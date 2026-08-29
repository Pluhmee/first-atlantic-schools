/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import Animated from './Animated';

const heroBackgroundImages = [
  '/images/hero/hero-bg-1.JPG',
  '/images/hero/hero-bg-2.JPG',
  '/images/hero/hero-bg-3.JPG',
].filter(Boolean) as string[];

const SLIDE_INTERVAL = 3000;

const heroImages = {
  main: '/images/hero/hero-pic-1.JPG',
  sideTop: '/images/hero/hero-pic-2.JPG',
  sideBottom: '/images/hero/hero-pic-3.JPG',
};

const levels = ['Playgroup', 'Nursery', 'Primary', 'College'];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroBackgroundImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBackgroundImages.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  const hasBackgroundSlides = heroBackgroundImages.length > 0;

  return (
    <section className="relative isolate overflow-hidden bg-[#0d0066] text-white">
      <div className="absolute inset-0">
        {hasBackgroundSlides &&
          heroBackgroundImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}

        <div
          className={`absolute inset-0 ${
            hasBackgroundSlides
              ? 'bg-[#0d0066]/32'
              : 'bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#2b23a0_100%)]'
          }`}
        />

        <div
          className={`absolute inset-0 ${
            hasBackgroundSlides
              ? 'bg-[linear-gradient(90deg,rgba(6,3,40,0.74)_0%,rgba(13,0,102,0.54)_42%,rgba(13,0,102,0.18)_100%)]'
              : 'bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.15),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]'
          }`}
        />

        <div className="float-slow absolute left-10 top-24 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="float-medium absolute right-16 top-20 h-56 w-56 rounded-full bg-blue-200/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(13,0,102,0.70),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[88vh] items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:py-24">
          {/* Mobile / tablet visual collage */}
          <Animated mode="immediate" className="relative mx-auto w-full max-w-sm lg:hidden">
            <div className="relative h-[280px] sm:h-[340px]">
              <div className="float-medium absolute left-1/2 top-0 h-[230px] w-[230px] -translate-x-1/2 overflow-hidden rounded-full border-[6px] border-white/15 shadow-2xl sm:h-[220px] sm:w-[220px]">
                <img
                  src={heroImages.main}
                  alt="Teacher with pupils in classroom"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="float-slow absolute right-1 top-6 h-[110px] w-[110px] overflow-hidden rounded-full border-[5px] border-yellow-300/80 shadow-2xl sm:right-0 sm:h-[130px] sm:w-[130px]">
                <img
                  src={heroImages.sideTop}
                  alt="Pupils standing in school uniform"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="float-medium absolute bottom-6 left-2 h-[110px] w-[110px] overflow-hidden rounded-full border-[5px] border-white/80 shadow-2xl sm:bottom-4 sm:left-0 sm:h-[125px] sm:w-[125px]">
                <img
                  src={heroImages.sideBottom}
                  alt="First Atlantic pupils outdoors"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="card-hover absolute bottom-0 right-2 max-w-[12rem] rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md shadow-2xl sm:max-w-[14rem]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-200 sm:text-xs">
                  First Atlantic Promise
                </p>
                <p className="mt-2 text-sm font-bold leading-snug text-white sm:text-base">
                  Explore, Expand and Excel
                </p>
              </div>

              <div className="float-slow absolute right-8 top-6 -z-10 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />
              <div className="float-medium absolute left-4 bottom-6 -z-10 h-44 w-44 rounded-full bg-blue-300/10 blur-3xl" />
            </div>
          </Animated>

          {/* Text content */}
          <div className="max-w-2xl">
            <Animated
              mode="immediate"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-yellow-200 sm:text-xs">
                Where every child matters.
              </p>
            </Animated>

            <Animated mode="immediate" delay={0.08}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Welcome to <span className="text-yellow-300">First Atlantic Schools</span>
              </h1>
            </Animated>

            <Animated mode="immediate" delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/88 sm:text-lg">
                A private co-educational school in Ikorodu focused on raising confident,
                curious and well-rounded learners through quality teaching, strong values,
                and a nurturing environment.
              </p>
            </Animated>

            <Animated mode="immediate" delay={0.24}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className="group button-lift button-shine glow-gold inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-yellow-400/20"
                >
                  Explore the School
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group button-lift button-shine inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0d0066]/20 backdrop-blur-sm hover:bg-white/15"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Animated>

            <Animated mode="immediate" delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                {levels.map((level, index) => (
                  <span
                    key={level}
                    className={`card-hover rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm ${
                      index % 2 === 0 ? 'float-slow' : 'float-medium'
                    }`}
                  >
                    {level}
                  </span>
                ))}
              </div>
            </Animated>

            <Animated mode="immediate" delay={0.4}>
              <div className="mt-8 flex items-center gap-2 text-sm text-white/82">
                <MapPin className="h-4 w-4 text-yellow-300" />
                Ikorodu, Lagos, Nigeria
              </div>
            </Animated>

            {hasBackgroundSlides && heroBackgroundImages.length > 1 && (
              <Animated mode="immediate" delay={0.48}>
                <div className="mt-8 flex items-center gap-2">
                  {heroBackgroundImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Show hero background slide ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? 'w-8 bg-yellow-300'
                          : 'w-2.5 bg-white/45 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </Animated>
            )}
          </div>

          {/* Desktop visual collage */}
          <Animated
            mode="immediate"
            delay={0.14}
            className="relative mx-auto hidden w-full max-w-[34rem] lg:block"
          >
            <div className="relative h-[540px]">
              <div className="float-medium absolute left-10 top-8 h-[320px] w-[320px] overflow-hidden rounded-full border-[8px] border-white/15 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03]">
                <img
                  src={heroImages.main}
                  alt="Teacher with pupils in classroom"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="float-slow absolute right-8 top-0 h-[210px] w-[210px] overflow-hidden rounded-full border-[6px] border-yellow-300/80 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.04]">
                <img
                  src={heroImages.sideTop}
                  alt="Pupils standing in school uniform"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="float-medium absolute bottom-14 left-0 h-[190px] w-[190px] overflow-hidden rounded-full border-[6px] border-white/80 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.04]">
                <img
                  src={heroImages.sideBottom}
                  alt="First Atlantic pupils outdoors"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="card-hover absolute bottom-0 right-0 max-w-xs rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-200">
                  First Atlantic Promise
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                  Explore, Expand and Excel
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  We blend learning, character and care to help every child grow with
                  purpose and confidence.
                </p>
              </div>

              <div className="float-slow absolute right-10 top-16 -z-10 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
              <div className="float-medium absolute left-0 bottom-8 -z-10 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
            </div>
          </Animated>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 text-white/95">
        <svg viewBox="0 0 1440 170" className="h-auto w-full" fill="currentColor" aria-hidden="true">
          <path d="M0,128L40,133.3C80,139,160,149,240,144C320,139,400,117,480,117.3C560,117,640,139,720,138.7C800,139,880,117,960,101.3C1040,85,1120,75,1200,80C1280,85,1360,107,1400,117.3L1440,128L1440,171L1400,171C1360,171,1280,171,1200,171C1120,171,1040,171,960,171C880,171,800,171,720,171C640,171,560,171,480,171C400,171,320,171,240,171C160,171,80,171,40,171L0,171Z" />
        </svg>
      </div>
    </section>
  );
}