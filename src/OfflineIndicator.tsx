import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 border-2 border-line bg-surface px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider text-ink shadow-[4px_4px_0px_0px_rgba(var(--shadow-rgb),1)] animate-pulse">
      <WifiOff size={14} className="text-amber-500" />
      <span>Offline Mode &bull; Cached Service Worker Active</span>
    </div>
  );
};
