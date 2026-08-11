import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

const configModules = import.meta.glob('../firebase-applet-config.json', { eager: true });
const localConfig = configModules['../firebase-applet-config.json'] as any;

const firebaseConfig = localConfig?.default || {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || '(default)'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// User Profile Actions
export async function createOrUpdateUserProfile(user: any) {
  if (!user) return;
  const userRef = doc(db, 'users', user.uid);
  try {
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || 'Anonymous',
        email: user.email || '',
        totalScore: 0,
        badges: [],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
  }
}

export async function getUserProfile(uid: string) {
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${uid}`);
  }
}

export async function getLeaderboard(type: 'desktop' | 'mobile' = 'desktop') {
    const field = type === 'mobile' ? 'totalMobileScore' : 'totalScore';
  try {
    const q = query(collection(db, 'users'), orderBy(field, 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'users');
  }
}

// Ensure the user total score is updated
export async function updateUserScore(uid: string, scenarioId: number | string, newScore: number) {
  try {
    const scoreRef = doc(db, 'users', uid, 'scores', scenarioId.toString());
    const scoreSnap = await getDoc(scoreRef);
    
    let previousScore = 0;
    if (scoreSnap.exists()) {
      previousScore = scoreSnap.data().score;
    }
    
    // Only update if the new score is strictly better
    if (newScore > previousScore) {
      const scoreDiff = newScore - previousScore;
      
      // Update scenario score
      if (scoreSnap.exists()) {
        await updateDoc(scoreRef, {
          score: newScore,
          updatedAt: new Date()
        });
      } else {
        await setDoc(scoreRef, {
          scenarioId,
          score: newScore,
          updatedAt: new Date()
        });
      }
      
      // Update total score on the user profile
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data();
        let isMobile = typeof scenarioId === 'string' && scenarioId.startsWith('mobile_');
        let updatedScore = ((isMobile ? userData.totalMobileScore : userData.totalScore) || 0) + scoreDiff;
        
        // Compute Badges based on total score
        const newBadges = [...(userData.badges || [])];
        if (updatedScore >= 100 && !newBadges.includes('Beginner')) newBadges.push('Beginner');
        if (updatedScore >= 500 && !newBadges.includes('Intermediate')) newBadges.push('Intermediate');
        if (updatedScore >= 1000 && !newBadges.includes('Expert')) newBadges.push('Expert');
        if (updatedScore >= 5000 && !newBadges.includes('Master')) newBadges.push('Master');
        
        const updatePayload: any = { updatedAt: new Date(), badges: newBadges };
        if (isMobile) {
          updatePayload.totalMobileScore = updatedScore;
        } else {
          updatePayload.totalScore = updatedScore;
        }
        await updateDoc(userRef, updatePayload);

      }
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${uid}/scores`);
  }
}
