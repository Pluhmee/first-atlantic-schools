import Link from 'next/link';
import { ArrowRight, Baby, BookOpen, GraduationCap, School } from 'lucide-react';
import Animated from './Animated';

type TrackCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
};

const tracks: TrackCard[] = [
  {
    title: 'Playgroup',
    description:
      'A warm and playful foundation where little learners begin to grow, discover and interact with confidence.',
    href: '/academics',
    image: '/images/learning-tracks/playgroup.jpg',
    accent: 'from-emerald-500 to-green-600',
    icon: Baby,
  },
  {
    title: 'Pre-School',
    description:
      'A nurturing early-years experience focused on curiosity, routines, language development and joyful learning.',
    href: '/academics',
    image: '/images/learning-tracks/preschool.jpg',
    accent: 'from-pink-500 to-fuchsia-600',
    icon: BookOpen,
  },
  {
    title: 'Elementary',
    description:
      'Strong academic building blocks, creativity and character development designed to help pupils thrive.',
    href: '/academics',
    image: '/images/learning-tracks/elementary.jpg',
    accent: 'from-yellow-500 to-amber-600',
    icon: School,
  },
  {
    title: 'College',
    description:
      'Purpose-driven secondary education that prepares students for leadership, excellence and future opportunities.',
    href: '/academics',
    image: '/images/learning-tracks/college.jpg',
    accent: 'from-sky-400 to-cyan-500',
    icon: GraduationCap,
  },
];

export default function LearningTracksSection() {
  return (
    <section className="relative overflow-hidden bg-[#1b0a73] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Animated className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
            Learning Tracks
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Designed for every stage of learning
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            From early childhood to college, First Atlantic Schools provides structured
            learning paths that help every child explore, expand and excel.
          </p>
        </Animated>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <Animated
                key={track.title}
                delay={index * 0.12}
                className="card-hover group overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                <div className={`relative h-52 bg-gradient-to-br ${track.accent}`}>
                  {track.image ? (
                    <img
                      src={track.image}
                      alt={track.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-white/95">
                      <div className="rounded-full bg-white/15 p-4 backdrop-blur-sm">
                        <Icon className="h-10 w-10" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em]">
                          Add Image
                        </p>
                        <p className="mt-1 text-xs text-white/80">
                          Replace placeholder later
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0d0066]">{track.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {track.description}
                  </p>

                  <Link
                    href={track.href}
                    className="group/button button-lift button-shine mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d0066] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d0066]/20 hover:bg-[#120087]"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </Animated>
            );
          })}
        </div>

        <Animated delay={0.18} className="mt-10 text-center">
          <Link
            href="/academics"
            className="group button-lift inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
          >
            View All Learning Tracks
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Animated>
      </div>
    </section>
  );
}