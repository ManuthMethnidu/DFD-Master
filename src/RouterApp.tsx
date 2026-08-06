import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, createOrUpdateUserProfile, getUserProfile, getLeaderboard } from './firebase';
import { User, LogOut, Award, Trophy, ArrowLeft } from 'lucide-react';
import DFDSimulator from './App';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await createOrUpdateUserProfile(currentUser);
      }
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center bg-[#FAF9F6] text-black font-serif italic text-2xl">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<DFDSimulator user={user} />} />
      <Route path="/profile" element={user ? <Profile user={user} /> : <Login />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#FAF9F6] border-8 border-black">
      <div className="bg-white p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md w-full flex flex-col items-center">
        <h1 className="text-4xl font-serif font-black italic mb-2">DFD Master.</h1>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-8">Authentication Required</p>
        <button 
          onClick={handleLogin}
          className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
        >
          Sign in with Google
        </button>
        <Link to="/" className="mt-8 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors underline decoration-2 underline-offset-4">
          Return to Simulator
        </Link>
      </div>
    </div>
  );
}

function Profile({ user }: { user: any }) {
  const [profile, setProfile] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUserProfile(user.uid).then(setProfile);
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (!profile) return <div className="p-8 text-center font-mono">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white border-2 border-transparent hover:border-black px-3 py-1.5 transition-colors">
            <ArrowLeft size={16} /> Back to Simulator
          </Link>
          <button onClick={handleLogout} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:bg-red-50 px-3 py-1.5 transition-colors border-2 border-transparent hover:border-red-600">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
        
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <User size={120} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black italic mb-2 relative z-10">{profile.displayName}</h1>
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12 relative z-10">{profile.email}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 border-b-2 border-black pb-2 inline-block">Total Score</h2>
              <div className="text-7xl font-serif font-black italic">{profile.totalScore || 0}</div>
              <p className="text-xs font-mono text-gray-500 mt-2">Earned by passing scenarios</p>
            </div>
            
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 border-b-2 border-black pb-2 flex items-center gap-2">
                <Award size={18} /> Earned Badges
              </h2>
              {profile.badges && profile.badges.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {profile.badges.map((badge: string) => (
                    <div key={badge} className="px-4 py-2 border-2 border-black bg-[#FAF9F6] text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      {badge}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm font-mono text-gray-400 italic">No badges earned yet. Complete scenarios to level up!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Leaderboard() {
  const [leaders, setLeaders] = useState<any[]>([]);
  
  useEffect(() => {
    getLeaderboard().then(data => data && setLeaders(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white border-2 border-transparent hover:border-black px-3 py-1.5 transition-colors">
            <ArrowLeft size={16} /> Back to Simulator
          </Link>
        </div>
        
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4 mb-12 border-b-4 border-black pb-6">
            <Trophy size={48} className="text-black" />
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-black italic">Hall of Fame</h1>
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-2">Top 10 DFD Masters</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {leaders.length > 0 ? (
              leaders.map((leader, idx) => (
                <div key={leader.uid} className={`flex items-center justify-between p-4 md:p-6 border-2 border-black ${idx === 0 ? 'bg-amber-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-1 -translate-x-1' : 'bg-[#FAF9F6]'}`}>
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-2xl md:text-3xl font-serif font-black italic text-gray-400">#{idx + 1}</span>
                    <span className="text-lg md:text-xl font-bold">{leader.displayName}</span>
                  </div>
                  <div className="flex items-baseline gap-2 text-right">
                    <span className="text-2xl md:text-3xl font-serif font-black italic">{leader.totalScore}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">PTS</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center font-mono text-sm text-gray-500 py-12 border-2 border-dashed border-gray-300">
                No scores recorded yet. Be the first to make the leaderboard!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
