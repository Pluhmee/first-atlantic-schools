'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import Navbar from '@/components/navbar';
import Animated from '@/components/Animated';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
} from 'lucide-react';

type TabItem = {
  id: string;
  label: string;
  title: string;
  content: string;
};

type ValueItem = {
  letter: string;
  word: string;
  description: string;
};

const aboutPageImages = {
  hero: '/images/hero/child-matters.',
  story: '/images/hero/hero-bg-1.JPG',
  proprietor: '',
};

const tabs: TabItem[] = [
  {
    id: 'vision',
    label: 'School Vision',
    title: 'A vision shaped around genuine ambition',
    content:
      'First Atlantic Schools is established to see a world where children’s genuine ambitions become reality. We believe every learner deserves the structure, guidance and confidence to grow into their full potential.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    title: 'Guiding learners to explore, expand and excel',
    content:
      'We partner with families and society to guide children to explore knowledge with expanded understanding so they are equipped to excel in their chosen paths, both locally and globally.',
  },
  {
    id: 'principle',
    label: 'School Principle',
    title: 'Every child matters',
    content:
      'At First Atlantic Schools, every child matters regardless of ethnicity, religion, colour or gender. We place strong emphasis on qualitative education, discipline, care and meaningful development.',
  },
  {
    id: 'motto',
    label: 'School Motto',
    title: 'Explore. Expand. Excel.',
    content:
      'Our motto reflects the journey we want for every learner: to explore knowledge with curiosity, expand understanding with purpose, and excel with confidence and character.',
  },
  {
    id: 'values',
    label: 'School Core Values',
    title: 'Character is part of the curriculum',
    content:
      'We build a culture rooted in Friendship, Inspiration, Responsibility, Service and Teamwork. These values shape behaviour, relationships, learning and leadership across the school community.',
  },
  {
    id: 'qualities',
    label: 'Unique Qualities',
    title: 'Why families choose First Atlantic Schools',
    content:
      'Families choose us for our conducive learning environment, dedicated staff, qualitative education, talent development, digital exposure, extracurricular strength, security and a balanced approach to academics and character formation.',
  },
];

const uniqueQualities = [
  'Conducive learning environment',
  'Dedicated, friendly and experienced staff',
  'Qualitative and sound western education',
  'Talent and skill development programmes',
  'Computer room with internet facilities',
  'Competitive programmes',
  'Chess, music and ballet',
  'Absolute security guaranteed',
  'Coding exposure for learners',
  'Introduction to digital learning tools',
  'Various extracurricular activities',
  'Sports activities and playground',
];

const coreValues: ValueItem[] = [
  {
    letter: 'F',
    word: 'Friendship',
    description: 'We build a caring school community where learners grow with mutual respect and belonging.',
  },
  {
    letter: 'I',
    word: 'Inspiration',
    description: 'We encourage children to dream boldly, stay curious and pursue excellence with confidence.',
  },
  {
    letter: 'R',
    word: 'Responsibility',
    description: 'We teach accountability, discipline and good choices in learning and character.',
  },
  {
    letter: 'S',
    word: 'Service',
    description: 'We nurture compassion and the desire to contribute positively to others and society.',
  },
  {
    letter: 'T',
    word: 'Teamwork',
    description: 'We help learners collaborate well, communicate clearly and grow together.',
  },
];

const highlights = [
  {
    title: 'Nigerian and international blend',
    description: 'A learning approach that combines local strength with global relevance.',
    icon: Globe2,
  },
  {
    title: 'Character and academic growth',
    description: 'Strong focus on both classroom achievement and personal development.',
    icon: HeartHandshake,
  },
  {
    title: 'Safe and structured environment',
    description: 'A warm, disciplined and secure space where children can thrive.',
    icon: ShieldCheck,
  },
];

const quickStats = [
  { label: 'Learning Tracks', value: 'Playgroup to College' },
  { label: 'School Focus', value: 'Academic + Character Growth' },
  { label: 'Location', value: 'Ikorodu, Lagos' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('vision');

  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  }, [activeTab]);

  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#29189a_100%)] text-white">
        <div className="absolute inset-0">
          {aboutPageImages.hero && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="float-slow absolute left-0 top-16 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-10 h-56 w-56 rounded-full bg-blue-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Animated className="max-w-3xl">
              <div className="animate-fade-up flex flex-wrap items-center gap-2 text-sm text-white/75">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">About Us</span>
              </div>

              <div className="animate-fade-up delay-1 mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                A modern school community where every child matters
              </div>

              <h1 className="animate-fade-up delay-2 mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                About <span className="text-yellow-300">First Atlantic Schools</span>
              </h1>

              <p className="animate-fade-up delay-3 mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                First Atlantic Schools is a private co-educational school committed to
                integrating strong Nigerian and international educational ideas in a
                nurturing environment that develops confident, responsible and future-ready learners.
              </p>

              <div className="animate-fade-up delay-4 mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/admission"
                  className="group button-lift button-shine glow-gold inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-yellow-400/20"
                >
                  Start Admission Enquiry
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                >
                  Contact the School
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Animated>

            <Animated delay={0.12} className="">
              <div className="card-hover rounded-[2rem] border border-white/12 bg-white/10 p-4 backdrop-blur-md shadow-2xl shadow-black/10 sm:p-6">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 p-4 sm:p-5">
                  {aboutPageImages.hero ? (
                    <div
                      className="h-[260px] rounded-[1.35rem] bg-cover bg-center sm:h-[320px]"
                      style={{ backgroundImage: `url(${aboutPageImages.hero})` }}
                    />
                  ) : (
                    <div className="flex h-[260px] flex-col items-center justify-center rounded-[1.35rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-6 text-center sm:h-[320px]">
                      <div className="rounded-full bg-yellow-300/15 p-4 text-yellow-300">
                        <Building2 className="h-10 w-10" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
                        About Page Hero Image
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-white/78">
                        Add your preferred About Us hero image later in this file.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {quickStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 text-white">
          <svg
            viewBox="0 0 1440 80"
            className="h-auto w-full"
            fill="currentColor"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,48 C240,80 480,16 720,32 C960,48 1200,80 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <div className="card-hover relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
                {aboutPageImages.story ? (
                  <div
                    className="h-[320px] rounded-[1.5rem] bg-cover bg-center sm:h-[420px]"
                    style={{ backgroundImage: `url(${aboutPageImages.story})` }}
                  />
                ) : (
                  <div className="flex h-[320px] flex-col items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#eef2ff_0%,#e2e8f0_100%)] px-6 text-center sm:h-[420px]">
                    <div className="rounded-full bg-white p-4 text-[#0d0066] shadow-sm">
                      <BookOpen className="h-9 w-9" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#0d0066]/65">
                      School Story Image Placeholder
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                      Add a strong photo of learners, classes or the school environment here later.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
                <BadgeCheck className="h-4 w-4 text-yellow-500" />
                About Our School
              </div>

              <h2 className="animate-fade-up delay-1 mt-5 text-3xl font-extrabold leading-tight text-[#0d0066] sm:text-4xl lg:text-5xl">
                A school committed to purpose, confidence and excellence
              </h2>

              <p className="animate-fade-up delay-2 mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                First Atlantic Schools is a private co-educational school aiming to integrate
                the best Nigerian and international educational ideas. We prepare learners for
                the challenges of an ever-changing global world while nurturing purpose, discipline
                and meaningful character.
              </p>

              <p className="animate-fade-up delay-3 mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Beyond academics, we help our children build confidence in their identities,
                develop social and moral strength, and grow into responsible leaders who can make
                a positive difference in the world.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map(({ title, description, icon: Icon }, index) => (
                  <div
                    key={title}
                    className={`card-hover animate-fade-up rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 ${
                      index === 0 ? 'delay-2' : index === 1 ? 'delay-3' : 'delay-4'
                    }`}
                  >
                    <div className="inline-flex rounded-full bg-[#0d0066]/8 p-3 text-[#0d0066]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0d0066]/70">
              What We Stand For
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              The foundation behind our school culture
            </h2>
            
          </div>

          <div className="mt-12 space-y-3 sm:hidden">
            {tabs.map((tab, index) => (
              <details
                key={tab.id}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
                open={index === 0}
              >
                <summary className="flex list-none cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  <span>{tab.label}</span>
                  <ChevronRight className="h-4 w-4 rotate-90 text-[#0d0066]" />
                </summary>
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0d0066]/60">
                    {tab.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{tab.content}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 hidden sm:block">
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => {
                const isActive = currentTab.id === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`button-lift rounded-full px-5 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-[#0d0066] text-white shadow-lg shadow-[#0d0066]/20'
                        : 'bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="animate-fade-up mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0d0066]/60">
                {currentTab.label}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{currentTab.title}</h3>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
                {currentTab.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-52 w-52 rounded-full bg-[#0d0066]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
                <Star className="h-4 w-4 text-yellow-500" />
                Our Unique Qualities
              </div>

              <h2 className="animate-fade-up delay-1 mt-5 text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
                What makes the school experience different
              </h2>

              
            </div>

            <div className="animate-fade-up delay-2 rounded-[2rem] bg-[linear-gradient(135deg,#24107a_0%,#34159a_100%)] p-6 text-white shadow-[0_24px_70px_rgba(20,10,90,0.18)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Why families choose us
              </p>
              <p className="mt-4 text-base leading-8 text-white/85">
                We combine academic structure, values, creativity, technology, extracurricular balance
                and a caring atmosphere to support all-round learner development.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {uniqueQualities.map((quality, index) => (
              <div
                key={quality}
                className="card-hover animate-fade-up rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-yellow-400/20 p-2 text-[#0d0066]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-800">{quality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#12075f] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
              FIRST Core Values
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Values we teach, practise and protect
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {coreValues.map((value, index) => (
              <div
                key={value.word}
                className="card-hover animate-fade-up rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-extrabold text-slate-950">
                  {value.letter}
                </div>
                <h3 className="mt-4 text-xl font-bold">{value.word}</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="animate-fade-up">
              <div className="card-hover overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">
                {aboutPageImages.proprietor ? (
                  <div
                    className="h-[450px] rounded-[1.5rem] bg-cover bg-center sm:h-[480px]"
                    style={{ backgroundImage: `url(${aboutPageImages.proprietor})` }}
                  />
                ) : (
                    <div className="relative h-[450px] rounded-[1.5rem] overflow-hidden sm:h-[480px]">
                    <Image
                      src="/images/campus/soyebo.JPG"
                      alt="School proprietor"
                      fill
                      sizes="(max-width: 640px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
                <GraduationCap className="h-4 w-4 text-yellow-500" />
                School Leadership
              </div>

              <h2 className="animate-fade-up delay-1 mt-5 text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
                Leadership that keeps the vision alive
              </h2>

              <p className="animate-fade-up delay-2 mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                The old About page included a school proprietor section, but it felt disconnected.
                In this redesign, leadership is presented with more clarity and warmth to reinforce
                trust, direction and the school’s sense of purpose.
              </p>

              <p className="animate-fade-up delay-3 mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                This area can later include a real message from the proprietor, principal or school
                leadership team about the school’s mission, care philosophy and commitment to student growth.
              </p>

              <div className="animate-fade-up delay-4 mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#0d0066] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d0066]/20 hover:bg-[#120087]"
                >
                  Book a School Visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/admission"
                  className="group button-lift inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  Explore Admission
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
