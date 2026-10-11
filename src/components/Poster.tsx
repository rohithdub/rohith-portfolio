import { useId, type ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * When real project screenshot is provided, it's composited cinematically with atmospheric grain and vignettes.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
    </div>
  );
}

/** Motif illustrations & artwork for each Original, built from actual screenshots and architectural motifs. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  const rawId = useId();
  const gradId = `g-${project.id}-${rawId.replace(/[:]/g, '')}`;

  return (
    <PosterBackdrop palette={project.palette} className={className}>
      {project.image ? (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center opacity-45 mix-blend-luminosity filter transition duration-700 hover:mix-blend-normal hover:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
        </div>
      ) : null}

      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#${gradId})`} />

        {project.motif === 'ai' && (
          <g transform="translate(220 50)" fill="none" stroke={a} strokeOpacity="0.85">
            <circle cx="60" cy="60" r="45" strokeWidth="2" />
            <circle cx="60" cy="60" r="22" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.6" />
            <path d="M60 5 V20 M60 100 V115 M5 60 H20 M100 60 H115" strokeWidth="2" />
            <circle cx="60" cy="60" r="8" fill={a} fillOpacity="0.7" />
            <path d="M28 28 L38 38 M82 82 L92 92 M28 92 L38 82 M82 38 L92 28" strokeWidth="1.5" strokeOpacity="0.5" />
          </g>
        )}

        {project.motif === 'agri' && (
          <g transform="translate(225 50)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M60 110 C60 60 10 40 10 10 C40 10 60 30 60 110 Z" strokeWidth="2" />
            <path d="M60 110 C60 60 110 40 110 10 C80 10 60 30 60 110 Z" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="60" y1="110" x2="60" y2="20" strokeWidth="1.8" />
            <circle cx="60" cy="10" r="4" fill={a} />
          </g>
        )}

        {project.motif === 'skill' && (
          <g transform="translate(210 60)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M20 70 C40 20 80 20 100 70" strokeWidth="2.5" />
            <path d="M10 80 C40 10 80 10 110 80" strokeWidth="1" strokeDasharray="5 5" strokeOpacity="0.5" />
            <circle cx="20" cy="70" r="6" fill={a} />
            <circle cx="100" cy="70" r="6" fill={a} />
            <circle cx="60" cy="35" r="9" strokeWidth="2" fill={a} fillOpacity="0.3" />
            <path d="M45 50 L75 50 M50 60 L70 60" strokeWidth="1.5" strokeOpacity="0.6" />
          </g>
        )}

        {project.motif === 'series' && (
          <g transform="translate(220 50)" fill="none" stroke={a} strokeOpacity="0.85">
            <rect x="15" y="15" width="90" height="90" rx="14" strokeWidth="2" />
            <polygon points="50,42 50,78 80,60" fill={a} fillOpacity="0.8" />
            <circle cx="60" cy="60" r="52" strokeWidth="1" strokeDasharray="8 6" strokeOpacity="0.5" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M5 4 h7 c4 0 7 2.5 7 6.5 c0 3.5 -2.5 6 -6 6.5 l6.5 11 M5 4 v24 M5 17 h7" fill="none" stroke="#e5132b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
