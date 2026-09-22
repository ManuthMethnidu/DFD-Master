import React, { useState } from 'react';
import { Download, Share2, X, CheckCircle, Smartphone } from 'lucide-react';
import { usePWAInstall } from './usePWAInstall';

export const PWAInstallButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isInstallable, isInstalled, isIOS, isMobile, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [showMobileGuide, setShowMobileGuide] = useState(false);
  const [installing, setInstalling] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      setInstalling(true);
      try {
        const success = await install();
        if (!success && isMobile) {
          setShowMobileGuide(true);
        }
      } catch (err) {
        console.error('Install prompt failed:', err);
        if (isMobile) {
          setShowMobileGuide(true);
        }
      } finally {
        setInstalling(false);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Android / mobile / browser where beforeinstallprompt hasn't triggered or is blocked
      setShowMobileGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        disabled={installing}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 border-2 border-line bg-surface hover:bg-accent hover:text-on-accent text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)] active:translate-x-[1px] active:translate-y-[1px] ${className}`}
        title="Install DFD Master as an app on your device"
      >
        {isIOS ? (
          <Smartphone size={14} className="shrink-0" />
        ) : (
          <Download size={14} className="shrink-0" />
        )}
        <span className="hidden sm:inline">Install App</span>
        <span className="sm:hidden">Install</span>
      </button>

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm border-4 border-line bg-surface p-6 shadow-[10px_10px_0px_0px_rgba(var(--shadow-rgb),1)] text-ink">
            <div className="flex items-center justify-between border-b-2 border-line pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Smartphone size={18} />
                <h3 className="font-serif font-black text-lg italic tracking-wide">
                  Install on iPhone / iPad
                </h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 hover:bg-canvas transition-colors border-2 border-transparent hover:border-line"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-ink/90 leading-relaxed mb-6">
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">1</span>
                <span>Tap the <strong className="font-bold underline">Share</strong> button <Share2 size={13} className="inline mx-1" /> in Safari's toolbar.</span>
              </div>
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">2</span>
                <span>Scroll down and select <strong className="font-bold">Add to Home Screen</strong>.</span>
              </div>
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">3</span>
                <span>Tap <strong className="font-bold">Add</strong> to launch in crisp standalone mode.</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 bg-ink text-canvas font-bold uppercase tracking-widest text-xs border-2 border-ink hover:bg-accent hover:text-on-accent transition-colors shadow-[3px_3px_0px_0px_rgba(var(--shadow-rgb),1)]"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* Android / Mobile Browser Guide Modal */}
      {showMobileGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm border-4 border-line bg-surface p-6 shadow-[10px_10px_0px_0px_rgba(var(--shadow-rgb),1)] text-ink">
            <div className="flex items-center justify-between border-b-2 border-line pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Download size={18} />
                <h3 className="font-serif font-black text-lg italic tracking-wide">
                  Install DFD Master
                </h3>
              </div>
              <button
                onClick={() => setShowMobileGuide(false)}
                className="p-1 hover:bg-canvas transition-colors border-2 border-transparent hover:border-line"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-ink/90 leading-relaxed mb-6">
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">1</span>
                <span>Tap the browser menu button (three vertical dots <strong className="font-bold text-sm">⋮</strong> in the top-right corner).</span>
              </div>
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">2</span>
                <span>Select <strong className="font-bold">Install app</strong> or <strong className="font-bold">Add to Home screen</strong>.</span>
              </div>
              <div className="p-3 border-2 border-line bg-canvas flex items-start gap-2.5">
                <span className="font-bold text-sm bg-ink text-canvas w-5 h-5 flex items-center justify-center shrink-0">💡</span>
                <span><strong>In-app browser?</strong> If you opened this from WhatsApp, Instagram, or Facebook, tap <strong className="font-bold">⋮</strong> and choose <strong className="font-bold">Open in Chrome</strong> first.</span>
              </div>
            </div>

            <div className="flex gap-2">
              {isInstallable && (
                <button
                  onClick={() => {
                    setShowMobileGuide(false);
                    install();
                  }}
                  className="flex-1 py-2.5 bg-accent text-on-accent font-bold uppercase tracking-widest text-xs border-2 border-line hover:opacity-90 transition-opacity shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)]"
                >
                  Prompt Now
                </button>
              )}
              <button
                onClick={() => setShowMobileGuide(false)}
                className="flex-1 py-2.5 bg-ink text-canvas font-bold uppercase tracking-widest text-xs border-2 border-ink hover:bg-accent hover:text-on-accent transition-colors shadow-[2px_2px_0px_0px_rgba(var(--shadow-rgb),1)]"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
