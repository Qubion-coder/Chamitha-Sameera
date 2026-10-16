import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

import { VideoIntro } from './components/VideoIntro';
import { InvitationContent } from './components/InvitationContent';
import { Admin } from './components/Admin';
import { INVITATION_IMAGE_URLS, preloadImages } from './utils/preloadImages';
import { GALLERY_IMAGE_URLS } from './components/Gallery';

const isAdminRoute = () => window.location.pathname === '/admin';

export default function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const params = new URLSearchParams(window.location.search);
  const titleParam = params.get('title') || '';
  const nameParam = params.get('name') || '';
  const eventParam = params.get('event') || 'both';

  const fullInviteeName = titleParam.toLowerCase() === 'family'
    ? `${nameParam} and Family`.trim()
    : `${titleParam} ${nameParam}`.trim();

  let eventLabel = 'Our Wedding Celebration';

  const weddingDate = new Date('2026-12-16T09:00:00');

  useEffect(() => {
    if (isAdminRoute()) return;

    let cancelled = false;

    preloadImages([...INVITATION_IMAGE_URLS]).then(() => {
      if (!cancelled) setAssetsReady(true);
    });
    // Warm the gallery photos in the background without delaying the intro
    preloadImages(GALLERY_IMAGE_URLS);

    return () => {
      cancelled = true;
    };
  }, []);

  const ensureAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio('/Dreams Come True - Dylan Carwyn Romantic Wedding Song 2025 (Lyrics) - Dazzling Tunes (128k).mp3');
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = 'auto';

      audio.addEventListener('play', () => setIsMusicPlaying(true));
      audio.addEventListener('pause', () => setIsMusicPlaying(false));
      audio.addEventListener('ended', () => setIsMusicPlaying(false));

      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMusicStart = useCallback(() => {
    const audio = ensureAudio();
    audio.play().catch(console.error);
  }, [ensureAudio]);

  const toggleMusic = useCallback(() => {
    const audio = ensureAudio();
    if (audio.paused) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [ensureAudio]);

  const handleEnvelopeComplete = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      setShowInvitation(true);
    });
  }, []);

  if (isAdminRoute()) {
    return (
      <>
        <Toaster position="top-center" />
        <Admin />
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" />

      <InvitationContent
        active={showInvitation}
        eventParam={eventParam}
        fullInviteeName={fullInviteeName}
        eventLabel={eventLabel}
        weddingDate={weddingDate}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={toggleMusic}
      />

      <AnimatePresence mode="wait">
        {!showInvitation && (
          <VideoIntro
            key="intro"
            onComplete={handleEnvelopeComplete}
            onMusicStart={handleMusicStart}
            event={eventParam}
            readyToTransition={assetsReady}
          />
        )}
      </AnimatePresence>
    </>
  );
}
