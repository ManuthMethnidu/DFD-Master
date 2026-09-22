// Sound Effects module using new Audio() with mathematical PCM WAV data URIs
// Ensures zero external audio file latency, 100% offline support, and no broken assets

function createWavUri(sampleRate: number, duration: number, sampleFn: (t: number, d: number) => number): string {
  const numSamples = Math.floor(sampleRate * duration);
  const headerLength = 44;
  const dataLength = numSamples * 2;
  const totalLength = headerLength + dataLength;

  const buffer = new ArrayBuffer(totalLength);
  const view = new DataView(buffer);

  function writeString(offset: number, str: string) {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  }

  // RIFF header
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, 'WAVE');

  // fmt subchunk
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, 1, true); // Mono channel
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); // Byte rate
  view.setUint16(32, 2, true); // Block align
  view.setUint16(34, 16, true); // Bits per sample

  // data subchunk
  writeString(36, 'data');
  view.setUint32(40, dataLength, true);

  // PCM samples
  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = Math.max(-1, Math.min(1, sampleFn(t, duration)));
    const intSample = Math.floor(sample < 0 ? sample * 0x8000 : sample * 0x7FFF);
    view.setInt16(offset, intSample, true);
    offset += 2;
  }

  // Convert buffer to base64
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return 'data:audio/wav;base64,' + btoa(binary);
}

const SAMPLE_RATE = 22050;

// Lazy sound caching
let soundUris: Record<string, string> | null = null;

function getSoundUris() {
  if (!soundUris) {
    soundUris = {
      // Subtle wooden click/pop when placing or selecting nodes
      click: createWavUri(SAMPLE_RATE, 0.05, (t) => {
        return Math.sin(2 * Math.PI * 650 * t) * Math.exp(-t * 90) * 0.45;
      }),
      // Crisp mechanical snap when connecting nodes with an edge
      connect: createWavUri(SAMPLE_RATE, 0.08, (t) => {
        return Math.sin(2 * Math.PI * (500 + t * 4500) * t) * Math.exp(-t * 55) * 0.4;
      }),
      // Pleasant uplifting major chime chord when diagram is evaluated successfully
      success: createWavUri(SAMPLE_RATE, 0.45, (t) => {
        const c = Math.sin(2 * Math.PI * 523.25 * t);
        const e = Math.sin(2 * Math.PI * 659.25 * t);
        const g = Math.sin(2 * Math.PI * 783.99 * t);
        return (c * 0.35 + e * 0.3 + g * 0.35) * Math.exp(-t * 6);
      }),
      // Gentle, low double blip when errors are detected
      fail: createWavUri(SAMPLE_RATE, 0.28, (t) => {
        const f = t < 0.14 ? 220 : 170;
        return Math.sin(2 * Math.PI * f * t) * Math.exp(-(t % 0.14) * 16) * 0.35;
      })
    };
  }
  return soundUris;
}

export type SoundType = 'click' | 'connect' | 'success' | 'fail';

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const saved = localStorage.getItem('dfd_sound_effects');
    if (saved !== null) {
      return saved === 'true';
    }
  } catch (e) {}
  return true;
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('dfd_sound_effects', enabled ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('dfd_sound_toggle', { detail: enabled }));
  } catch (e) {}
}

export function playSound(type: SoundType): void {
  if (!isSoundEnabled() || typeof window === 'undefined') return;

  try {
    const uris = getSoundUris();
    const uri = uris[type];
    if (!uri) return;

    // Use new Audio() as explicitly requested
    const audio = new Audio(uri);
    audio.volume = type === 'click' ? 0.3 : type === 'connect' ? 0.35 : 0.4;
    audio.play().catch(() => {
      // Audio playback silently guarded against autoplay browser policies
    });
  } catch (e) {
    // Graceful fallback
  }
}
