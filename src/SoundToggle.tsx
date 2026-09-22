import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playSound } from './soundEffects';

export function SoundToggle({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(() => isSoundEnabled());

  useEffect(() => {
    const handleToggle = (e: CustomEvent<boolean>) => {
      setEnabled(e.detail);
    };

    window.addEventListener('dfd_sound_toggle' as any, handleToggle);
    return () => {
      window.removeEventListener('dfd_sound_toggle' as any, handleToggle);
    };
  }, []);

  const handleToggle = () => {
    const next = !enabled;
    setEnabled(next);
    setSoundEnabled(next);
    if (next) {
      playSound('click');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={className || "p-1.5 border-2 border-line bg-surface text-ink hover:bg-canvas transition-colors flex items-center justify-center shrink-0"}
      title={enabled ? "Sound Effects: ON (Click to mute)" : "Sound Effects: MUTED (Click to enable)"}
      aria-label="Toggle sound effects"
    >
      {enabled ? (
        <Volume2 size={14} strokeWidth={2.5} />
      ) : (
        <VolumeX size={14} strokeWidth={2.5} className="text-ink/60" />
      )}
    </button>
  );
}
