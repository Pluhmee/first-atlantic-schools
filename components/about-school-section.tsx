/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown, HeartHandshake, Star } from 'lucide-react';
import Animated from './Animated';

type Tab = {
  id: string;
  label: string;
  content: string;
};

const aboutImage = '/images/hero/child-matters.jpg';
  

const tabs: Tab[] = [
  {
    id: 'vision',
    label: 'School Vision',
    content:
      'First Atlantic Schools is established to see a world where children’s genuine ambitions become reality.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    content:
      'We partner with families and society to guide children to explore knowledge with expanded understanding and excel in their chosen paths.',
  },
  {
    id: 'principle',
    label: 'School Principle',
    content:
      'At First Atlantic Schools, every child matters regardless of ethnicity, religion, colour or gender, and we place strong emphasis on qualitative education.',
  },
  {
    id: 'motto',
    label: 'School Motto',
    content: 'Explore, Expand and Excel.',
  },
  {
    id: 'values',
    label: 'School Core Values',
    content:
      'Friendship, Inspiration, Responsibility, Service and Teamwork shape the way we teach, learn and grow together as a school community.',
  },
];

const highlights = [
  {
    title: 'Qualitative Learning',
    icon: BookOpen,
  },
  {
    title: 'Moral Development',
    icon: HeartHandshake,
  },
  {
    title: 'Global Standard',
    icon: Star,
  },
];

export default function AboutSchoolSection() {
  const [activeTab, setActiveTab] = useState('vision');

  const currentTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  }, [activeTab]);

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <Animated className="rounded-[2rem] bg-[linear-gradient(135deg,#24107a_0%,#34159a_100%)] p-6 text-white shadow-[0_24px_80px_rgba(20,10,90,0.20)] sm:p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
              About First Atlantic
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              About Our School
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              First Atlantic Schools is a private co-educational school committed to
              combining strong Nigerian and international educational ideas in a warm,
              disciplined and forward-looking environment.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              We help learners grow academically, socially and morally while building
              confidence, curiosity and a lifelong love for learning.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map(({ title, icon: Icon }, index) => (
                <div
                  key={title}
                  className={`card-hover rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm ${index % 2 === 0 ? 'float-slow' : 'float-medium'}`}
                >
                  <Icon className="h-5 w-5 text-yellow-300" />
                  <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group button-lift button-shine mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0d0066] shadow-lg shadow-slate-900/10 hover:bg-slate-100"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Animated>

          <Animated delay={0.12} className="relative pb-0 sm:pb-10 lg:pb-0">
            <div className="pointer-events-none float-slow absolute -left-4 -top-4 h-24 w-24 rounded-full bg-yellow-300/70 blur-2xl" />

            <div className="card-hover relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(15,23,42,0.15)] ring-1 ring-slate-200">
              <img
                src={aboutImage}
                alt="Pupils learning together at First Atlantic Schools"
                className="h-[280px] w-full rounded-[1.4rem] object-cover transition-transform duration-700 hover:scale-105 sm:h-[360px] lg:h-[430px]"
              />
            </div>

            <div className="card-hover relative z-10 mt-4 w-fit rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:absolute sm:-bottom-2 sm:right-4 sm:mt-0 lg:-bottom-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Our Promise
              </p>
              <p className="mt-2 text-lg font-bold text-[#0d0066]">Every child matters.</p>
            </div>
          </Animated>
        </div>

        {/* Mobile accordion - native details for better real-phone support */}
        <div className="relative z-20 mt-12 space-y-3 sm:hidden">
          {tabs.map((tab, index) => (
            <details key={tab.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" open={index === 0}>
              <summary className="flex list-none cursor-pointer items-center justify-between px-4 py-4 text-sm font-semibold text-slate-800 transition [&::-webkit-details-marker]:hidden">
                <span>{tab.label}</span>
                <ChevronDown className="h-4 w-4 text-[#0d0066]" />
              </summary>
              <div className="border-t border-slate-200 bg-slate-50 px-4 py-4">
                <p className="text-sm leading-7 text-slate-700">{tab.content}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Desktop / tablet tabs */}
        <Animated className="relative z-20 mt-12 hidden delay-3 sm:block sm:mt-14 lg:mt-16">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = currentTab.id === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`button-lift shrink-0 rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${isActive ? 'bg-[#0d0066] text-white shadow-lg shadow-[#0d0066]/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'}`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <Animated key={currentTab.id} className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0d0066]/60">{currentTab.label}</p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-lg sm:leading-8">{currentTab.content}</p>
          </Animated>
        </Animated>
      </div>
    </section>
  );
}
