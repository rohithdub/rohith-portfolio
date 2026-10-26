import { motion } from 'framer-motion';
import { education, experience, profile, seasons } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'Focus', v: 'ECE Student & Software Builder', s: `${education[0].degree}` },
    { k: 'Industry', v: `${experience[0].role}`, s: `${experience[0].company} · Agriverse` },
    { k: 'Philosophy', v: '“Research deeply before I build”', s: 'Turn understanding into working code' },
    { k: 'Based in', v: profile.location, s: 'Curiosity · Creation · Systems' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="Who I Am" />
      <div className="gutter grid items-center gap-7 sm:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-[min(80vw,310px)] sm:w-full sm:max-w-sm md:max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src={profile.portrait.src}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[88%] w-auto max-w-none -translate-x-[47%] object-contain object-bottom sm:h-[92%] lg:h-[94%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between sm:bottom-5 sm:left-5 sm:right-5">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.28em] text-crimson-2 sm:text-[10px]">STARRING</p>
                  <p className="font-display text-xl leading-none text-bone sm:text-2xl lg:text-3xl">{profile.displayName}</p>
                </div>
                <span className="shrink-0 rounded border border-white/30 bg-black/40 px-1.5 py-0.5 text-[9px] font-bold text-bone backdrop-blur-sm sm:text-[10px]">
                  S01–S0{seasons.length}
                </span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.p
            className="font-serif text-[clamp(1.3rem,3.6vw,2.6rem)] italic leading-[1.25] text-bone break-words"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            “{profile.intro}”
          </motion.p>
          <p className="mt-3 text-xs text-mist sm:mt-4 sm:text-sm">— {profile.fullName}</p>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:mt-10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-4 sm:p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-sm font-semibold text-bone sm:text-base">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Core Domains & Interests</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
