import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, orderBy, limit, getDocs, Firestore } from 'firebase/firestore';

const configModules = import.meta.glob(['../firebase-applet-config.json', './firebase-applet-config.json', '/firebase-applet-config.json'], { eager: true });
let localConfig: any = null;
for (const key of Object.keys(configModules)) {
  if (configModules[key]) {
    localConfig = (configModules[key] as any)?.default || configModules[key];
    if (localConfig?.apiKey) break;
  }
}

const rawApiKey = localConfig?.apiKey || import.meta.env.VITE_FIREBASE_API_KEY;

export const isFirebaseConfigured: boolean = Boolean(
  rawApiKey &&
  typeof rawApiKey === 'string' &&
  rawApiKey.trim() !== '' &&
  rawApiKey !== 'undefined' &&
  rawApiKey !== 'null' &&
  !rawApiKey.includes('MY_FIREBASE_API_KEY') &&
  !rawApiKey.includes('YOUR_')
);

export const firebaseConfig = localConfig || {
  apiKey: rawApiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || '(default)'
};

let app: FirebaseApp | null = null;
let dbInstance: Firestore | null = null;
let authInstance: Auth | null = null;
let googleProviderInstance: GoogleAuthProvider | null = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    dbInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
    authInstance = getAuth(app);
    googleProviderInstance = new GoogleAuthProvider();
  } catch (error) {
    console.warn('Firebase initialization skipped due to configuration error:', error);
    app = null;
    dbInstance = null;
    authInstance = null;
    googleProviderInstance = null;
  }
}

export const db = dbInstance;
export const auth = authInstance;
export const googleProvider = googleProviderInstance;

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
      userId: auth?.currentUser?.uid,
      email: auth?.currentUser?.email,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// User Profile Actions
export async function createOrUpdateUserProfile(user: any) {
  if (!user) return;
  if (!isFirebaseConfigured || !db) {
    const key = `dfd_profile_${user.uid}`;
    const existing = localStorage.getItem(key);
    if (!existing) {
      const profile = {
        uid: user.uid,
        displayName: user.displayName || 'Student Guest',
        email: user.email || '',
        totalScore: 0,
        totalMobileScore: 0,
        badges: ['Beginner'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(key, JSON.stringify(profile));
    }
    return;
  }

  const userRef = doc(db, 'users', user.uid);
  try {
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || 'Anonymous',
        email: user.email || '',
        totalScore: 0,
        totalMobileScore: 0,
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
  if (!isFirebaseConfigured || !db) {
    const key = `dfd_profile_${uid}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // fallback
      }
    }
    return {
      uid,
      displayName: 'Student Guest',
      email: 'guest@al-ict.lk',
      totalScore: 0,
      totalMobileScore: 0,
      badges: ['Beginner']
    };
  }

  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `users/${uid}`);
  }
}

export interface DatabaseStatus {
  isConnected: boolean;
  provider: 'firestore' | 'local';
  label: string;
  detail?: string;
  projectId?: string;
}

export async function checkDatabaseConnection(): Promise<DatabaseStatus> {
  if (!isFirebaseConfigured || !db) {
    return {
      isConnected: false,
      provider: 'local',
      label: 'Local Storage (Offline)',
      detail: 'No Firebase credentials configured. Scores are saved on your local device.'
    };
  }

  try {
    const q = query(collection(db, 'users'), limit(1));
    await getDocs(q);
    return {
      isConnected: true,
      provider: 'firestore',
      label: 'Live Cloud Firestore',
      detail: `Connected to Cloud Project: ${firebaseConfig.projectId || 'Active'}`,
      projectId: firebaseConfig.projectId
    };
  } catch (error: any) {
    console.warn('Database health check error:', error);
    return {
      isConnected: false,
      provider: 'local',
      label: 'Local Storage (Cloud Unreachable)',
      detail: error?.message || 'Could not connect to Firestore'
    };
  }
}

export async function getLeaderboard(type: 'desktop' | 'mobile' = 'desktop') {
  const field = type === 'mobile' ? 'totalMobileScore' : 'totalScore';

  if (!isFirebaseConfigured || !db) {
    // Only return scores actually recorded by users on this device. Absolutely no fake/mock entries.
    const localKeys = Object.keys(localStorage).filter(k => k.startsWith('dfd_profile_'));
    const localProfiles: any[] = [];
    for (const k of localKeys) {
      try {
        const item = JSON.parse(localStorage.getItem(k) || '');
        if (item && ((item.totalScore || 0) > 0 || (item.totalMobileScore || 0) > 0)) {
          localProfiles.push(item);
        }
      } catch (e) {}
    }

    localProfiles.sort((a, b) => ((b[field] || 0) - (a[field] || 0)));
    return localProfiles.slice(0, 10);
  }

  try {
    const q = query(collection(db, 'users'), orderBy(field, 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'users');
    return [];
  }
}

// Ensure the user total score is updated
export async function updateUserScore(uid: string, scenarioId: number | string, newScore: number) {
  if (!isFirebaseConfigured || !db) {
    const scoreKey = `dfd_score_${uid}_${scenarioId}`;
    const previousScore = Number(localStorage.getItem(scoreKey) || 0);

    if (newScore > previousScore) {
      const scoreDiff = newScore - previousScore;
      localStorage.setItem(scoreKey, String(newScore));

      const profileKey = `dfd_profile_${uid}`;
      let profile: any = null;
      try {
        profile = JSON.parse(localStorage.getItem(profileKey) || 'null');
      } catch (e) {}

      if (!profile) {
        profile = {
          uid,
          displayName: 'Student Guest',
          email: 'guest@al-ict.lk',
          totalScore: 0,
          totalMobileScore: 0,
          badges: ['Beginner']
        };
      }

      const isMobile = typeof scenarioId === 'string' && scenarioId.startsWith('mobile_');
      const currentScore = (isMobile ? profile.totalMobileScore : profile.totalScore) || 0;
      const updatedTotal = currentScore + scoreDiff;

      if (isMobile) {
        profile.totalMobileScore = updatedTotal;
      } else {
        profile.totalScore = updatedTotal;
      }

      const newBadges = [...(profile.badges || [])];
      if (updatedTotal >= 100 && !newBadges.includes('Beginner')) newBadges.push('Beginner');
      if (updatedTotal >= 500 && !newBadges.includes('Intermediate')) newBadges.push('Intermediate');
      if (updatedTotal >= 1000 && !newBadges.includes('Expert')) newBadges.push('Expert');
      if (updatedTotal >= 5000 && !newBadges.includes('Master')) newBadges.push('Master');
      profile.badges = newBadges;
      profile.updatedAt = new Date().toISOString();

      localStorage.setItem(profileKey, JSON.stringify(profile));
    }
    return;
  }

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
