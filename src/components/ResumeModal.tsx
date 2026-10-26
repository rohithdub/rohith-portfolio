import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen resume viewer matching ProjectModal architecture for flawless native scrolling. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <motion.div
      data-lenis-prevent
      className="fixed inset-0 z-[140]"
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div
        ref={scroller}
        data-lenis-prevent
        className="absolute inset-0 overflow-y-auto overscroll-contain"
        onClick={onClose}
      >
        <div className="min-h-full w-full py-4 sm:py-8">
          <motion.div
            className="gutter mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="mb-3 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-ink-2/90 px-4 py-3 backdrop-blur-md sm:mb-4 sm:px-6">
              <p className="truncate font-display text-lg tracking-wide text-bone sm:text-2xl">
                The Screenplay • Professional Overview
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-bone px-3 py-1.5 text-xs font-bold text-ink transition hover:bg-white sm:px-4 sm:py-2"
                >
                  <span className="hidden sm:inline">Connect on </span>LinkedIn ↗
                </a>
                <button
                  ref={closeBtn}
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume"
                  data-cursor="close"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20 sm:h-10 sm:w-10"
                >
                  ✕
                </button>
              </div>
            </div>

            <ResumeSheet />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
