"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Animated from '@/components/Animated';
import {
  ArrowRight,
  Baby,
  BookOpen,
  Building2,
  Bus,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Library,
  Music,
  Palette,
  Phone,
  School2,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
// Phosphor Icons for the Curriculum section
// Install with: npm install @phosphor-icons/react
import {
  Sparkle,
  Cpu,
  GlobeHemisphereWest,
  Lightbulb,
} from "@phosphor-icons/react";

// =========================
// ACADEMICS PAGE CONTENT
// =========================

const heroInfo = [
  {
    label: "Age Group",
    value: "1½ – 16 years",
    icon: Users,
  },
  {
    label: "School Hours",
    value: "Mon – Fri, 7:00 – 18:00",
    icon: Clock,
  },
  {
    label: "Class Range",
    value: "Crèche – SSS 3",
    icon: GraduationCap,
  },
];

const learningTracks = [
  {
    title: "Playgroup",
    ageRange: "1½ – 2½ years",
    description:
      "Our crèche and toddler room is the cradle of the future. Caregivers provide tender, loving care with utmost attention to detail, giving parents peace of mind.",
    image: "/images/learning-tracks/playgroup.JPG",
    icon: Baby,
    color: "from-emerald-500 to-green-600",
    points: [
      "Tender, loving care-givers",
      "Safe and clean environment",
      "Early sensory stimulation",
    ],
  },
  {
    title: "Pre-School",
    ageRange: "2½ – 5 years",
    description:
      "We apply a full Montessori approach to teaching and learning in our preschool section, nurturing curiosity, independence and a love for learning from the earliest years.",
    image: "/images/learning-tracks/preschool.JPG",
    icon: Sparkles,
    color: "from-pink-500 to-fuchsia-600",
    points: [
      "Full Montessori approach",
      "Reception & Foundation classes",
      "Play-based early learning",
    ],
  },
  {
    title: "Elementary",
    ageRange: "5 – 10 years",
    description:
      "Our lower and upper primary sections build strong academic foundations using STEAM teaching techniques, critical thinking and activity-based learning strategies.",
    image: "/images/learning-tracks/elementary.JPG",
    icon: BookOpen,
    color: "from-amber-500 to-orange-600",
    points: [
      "STEAM teaching techniques",
      "Lower & Upper Primary",
      "Activity-based learning",
    ],
  },
  {
    title: "College",
    ageRange: "10 – 16 years",
    description:
      "Our secondary school prepares students for leadership and future opportunities through a rigorous blend of Nigerian and international curricula, from JSS through SSS.",
    image: "/images/learning-tracks/college.JPG",
    icon: GraduationCap,
    color: "from-sky-500 to-blue-700",
    points: [
      "Junior & Senior Secondary",
      "Critical thinking focus",
      "21st century readiness",
    ],
  },
];

const classStructure = [
  {
    stage: "Pre-Elementary (Nursery)",
    color: "emerald",
    classes: [
      { age: "1½ – 2½ years", name: "Toddler (Playgroup)" },
      { age: "2½ – 3 years", name: "Reception (Nur. 1)" },
      { age: "3 – 4 years", name: "Foundation (Nur. 2)" },
    ],
  },
  {
    stage: "Lower Primary",
    color: "pink",
    classes: [
      { age: "4 – 5 years", name: "Kindergarten" },
      { age: "5 – 6 years", name: "Grade One" },
      { age: "6 – 7 years", name: "Grade Two" },
    ],
  },
  {
    stage: "Upper Primary",
    color: "amber",
    classes: [
      { age: "7 – 8 years", name: "Grade Three" },
      { age: "8 – 9 years", name: "Grade Four" },
      { age: "9 – 10 years", name: "Grade Five" },
    ],
  },
  {
    stage: "Junior Secondary",
    color: "sky",
    classes: [
      { age: "10 – 11 years", name: "JSS One" },
      { age: "11 – 12 years", name: "JSS Two" },
      { age: "12 – 13 years", name: "JSS Three" },
    ],
  },
  {
    stage: "Senior Secondary",
    color: "indigo",
    classes: [
      { age: "13 – 14 years", name: "SSS One" },
      { age: "14 – 15 years", name: "SSS Two" },
      { age: "15 – 16 years", name: "SSS Three" },
    ],
  },
];

const colorMap: Record<
  string,
  { bg: string; text: string; ring: string; dot: string }
> = {
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
    dot: "bg-emerald-500",
  },
  pink: {
    bg: "bg-pink-50",
    text: "text-pink-700",
    ring: "ring-pink-200",
    dot: "bg-pink-500",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    dot: "bg-amber-500",
  },
  sky: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    ring: "ring-sky-200",
    dot: "bg-sky-500",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-200",
    dot: "bg-indigo-500",
  },
};

// Curriculum pillars now use Phosphor Icons (capitalized Icon field)
const curriculumPillars = [
  {
    title: "Montessori Method",
    description:
      "A full Montessori approach to teaching and learning in our toddler and preschool sections, fostering independence and curiosity.",
    Icon: Sparkle,
    section: "Early Years",
  },
  {
    title: "STEAM Education",
    description:
      "STEAM teaching techniques are functional in our elementary and secondary sections, integrating Science, Technology, Engineering, Arts and Maths.",
    Icon: Cpu,
    section: "Primary & College",
  },
  {
    title: "Nigerian + American Blend",
    description:
      "We incorporate activity-based integrated American Curriculum and teaching strategies within the Nigerian Curriculum for global relevance.",
    Icon: GlobeHemisphereWest,
    section: "All Levels",
  },
  {
    title: "21st Century Skills",
    description:
      "Our programmes focus on higher-level questioning, critical thinking and problem solving, preparing learners to compete globally.",
    Icon: Lightbulb,
    section: "All Levels",
  },
];

const facilities = [
  { title: "Safe, clean & welcoming environment", icon: ShieldCheck },
  { title: "Peaceful, conducive & stimulating classrooms", icon: School2 },
  {
    title: "Well-illuminated, ventilated 21st century classrooms",
    icon: Building2,
  },
  { title: "Well-equipped Computer Room with internet", icon: Wifi },
  { title: "Science Laboratories", icon: FlaskConical },
  { title: "Art Room", icon: Palette },
  { title: "Well-stocked Library", icon: Library },
  { title: "Sickbay with a nurse & doctors on call", icon: HeartPulse },
  { title: "State-of-the-art playground equipment", icon: Trophy },
  { title: "Effective transportation system", icon: Bus },
  { title: "40KVA & 5KVA standby generators", icon: Zap },
  { title: "Clean water dispensers for all", icon: HeartPulse },
  { title: "Controlled security point", icon: ShieldCheck },
  { title: "Experienced, qualified & courteous staff", icon: Users },
  { title: "Very good class-to-teacher ratio", icon: GraduationCap },
  { title: "Scholarship awards for exceptional talents", icon: Trophy },
];

const uniqueQualities = [
  "Conducive Learning Environment",
  "Dedicated, Friendly & Experienced Staff",
  "Qualitative & Sound Western Education",
  "Talent and Skill Development Programmes",
  "Computer Room with Internet Facilities",
  "Competitive Programmes",
  "Chess, Music, and Ballet",
  "Absolute Security Guaranteed",
  "Coding Exposure for Learners",
  "Introduction to Digital Portal",
  "Various Extracurricular Activities",
  "Sport Activities & Playground",
];

// Campus gallery — add your photos to /public/images/campus/ with these filenames
const campusGallery = [
  {
    title: "School Bus",
    image: "/images/campus/school-bus.JPG",
    icon: Bus,
  },
  {
    title: "Purpose-Built Structure",
    image: "/images/campus/school-building.JPG",
    icon: Building2,
  },
  {
    title: "Multi-Purpose Hall",
    image: "/images/campus/multi-purpose-hall.JPG",
    icon: School2,
  },
  {
    title: "Play Ground",
    image: "/images/campus/playground.JPG",
    icon: Trophy,
  },
];

export default function AcademicsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#29189a_100%)] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
          <div className="float-slow absolute left-0 top-16 h-48 w-48 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-10 h-56 w-56 rounded-full bg-blue-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
          {/* Breadcrumb */}
          <Animated className="flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Academics</span>
          </Animated>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            <Animated>
              <div className="animate-fade-up delay-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-yellow-300" />
                Academic Excellence from Crèche to College
              </div>

              <h1 className="animate-fade-up delay-2 mt-5 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Our <span className="text-yellow-300">Academics</span>
              </h1>

              <p className="animate-fade-up delay-3 mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
                We admit children from one year and six months into preschool,
                lower and upper primary with regard to their respective ages and
                academic aptitudes; while our secondary school admits children
                from age 9 or 10. Every learner is guided to explore, expand and
                excel.
              </p>

              <div className="animate-fade-up delay-4 mt-8 flex w-full flex-col gap-3 sm:flex-row">
                <Link
                  href="/admission"
                  className="group button-lift button-shine glow-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 sm:w-auto sm:text-base"
                >
                  Begin Admission
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/2347012401488?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20academic%20programmes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group button-lift button-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:w-auto sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  Enquire Now
                </a>
              </div>
            </Animated>

            {/* Quick info card */}
            <Animated delay={0.18} className="">
              <div className="rounded-[1.75rem] border border-white/12 bg-white/10 p-5 backdrop-blur-md shadow-2xl shadow-black/10 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                  At a Glance
                </p>
                <div className="mt-5 space-y-4">
                  {heroInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm font-bold text-white sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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

      {/* ===================== LEARNING TRACKS ===================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute left-0 top-16 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="float-medium absolute right-0 top-10 h-52 w-52 rounded-full bg-[#0d0066]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <School2 className="h-4 w-4 text-yellow-500" />
              Learning Tracks
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold leading-tight text-[#0d0066] sm:text-4xl lg:text-5xl">
              Structured learning for every stage
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              From early childhood to college, First Atlantic Schools provides
              age-appropriate learning paths that help every child explore,
              expand and excel.
            </p>
          </div>

          <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            {learningTracks.map((track, index) => {
              const Icon = track.icon;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={track.title}
                  className="card-hover animate-fade-up grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.07)] lg:grid-cols-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div
                    className={`relative order-1 flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br ${track.color} sm:min-h-[280px] lg:order-none ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={track.image}
                      alt={track.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`order-2 flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${track.color} px-3 py-1 text-xs font-bold text-white`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {track.title}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {track.ageRange}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-[#0d0066] sm:text-3xl">
                      {track.title} Programme
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {track.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {track.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/admission"
                      className="group button-lift button-shine mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0d0066] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d0066]/20 hover:bg-[#120087]"
                    >
                      Apply for {track.title}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CLASS STRUCTURE ===================== */}
      <section className="relative bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm">
              <CalendarDays className="h-4 w-4 text-yellow-500" />
              Class Structure
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Age &amp; class placement
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              We admit children with regard to their respective ages and
              academic aptitudes. Here is how our classes are structured from
              nursery to senior secondary school.
            </p>
          </div>

          {/* Mobile / tablet: stage cards */}
          <div className="mt-10 space-y-5 md:hidden">
            {classStructure.map((stage, idx) => {
              const c = colorMap[stage.color];
              return (
                <div
                  key={stage.stage}
                  className="animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  <div className={`flex items-center gap-2 ${c.bg} px-5 py-3`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                    <h3 className={`text-sm font-bold ${c.text}`}>
                      {stage.stage}
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {stage.classes.map((cls) => (
                      <div
                        key={cls.name}
                        className="flex items-center justify-between gap-4 px-5 py-3"
                      >
                        <span className="text-sm font-semibold text-slate-800">
                          {cls.name}
                        </span>
                        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {cls.age}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: grouped table */}
          <div className="mt-12 hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr className="bg-[#0d0066] text-left text-white">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      Class
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                      Age Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classStructure.map((stage, sIdx) => {
                    const c = colorMap[stage.color];
                    return stage.classes.map((cls, cIdx) => (
                      <tr
                        key={`${stage.stage}-${cls.name}`}
                        className={`border-t border-slate-100 transition hover:bg-slate-50 ${
                          sIdx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                        }`}
                      >
                        {cIdx === 0 && (
                          <td
                            className="px-6 py-4 align-top"
                            rowSpan={stage.classes.length}
                          >
                            <div
                              className={`inline-flex items-center gap-2 rounded-full ${c.bg} px-3 py-1.5 ring-1 ${c.ring}`}
                            >
                              <span
                                className={`h-2 w-2 rounded-full ${c.dot}`}
                              />
                              <span className={`text-xs font-bold ${c.text}`}>
                                {stage.stage}
                              </span>
                            </div>
                          </td>
                        )}
                        <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                          {cls.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {cls.age}
                        </td>
                      </tr>
                    ));
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CURRICULUM ===================== */}
      <section className="relative overflow-hidden bg-[#1b0a73] py-14 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="float-slow absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-sm">
              <Lightbulb size={16} weight="duotone" />
              Our Curriculum
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              A curriculum built for the 21st century
            </h2>
            <p className="animate-fade-up delay-2 mt-5 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We blend the best of Nigerian and international educational ideas,
              adopting instructional strategies that focus on higher-level
              questioning, critical thinking and problem solving.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {curriculumPillars.map((pillar, index) => {
              const Icon = pillar.Icon;
              return (
                <div
                  key={pillar.title}
                  className="card-hover animate-fade-up rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      {pillar.section}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="animate-fade-up delay-4 mt-10 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-6 sm:p-8">
            <p className="text-sm leading-7 text-white/85 sm:text-base">
              You can be rest assured that your child/ward is in very good
              hands, and we hope that they will find their experiences at First
              Atlantic Schools{" "}
              <span className="font-semibold text-yellow-300">
                challenging, rewarding and fun
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FACILITIES ===================== */}
      <section className="relative bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-[#0d0066]/5 px-4 py-2 text-sm font-semibold text-[#0d0066]">
                <Building2 className="h-4 w-4 text-yellow-500" />
                Our Facilities
              </div>
              <h2 className="animate-fade-up delay-1 mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                A learning environment designed for growth
              </h2>
            </div>
            <p className="animate-fade-up delay-2 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Modern facilities and resources that support academic excellence,
              creativity, wellbeing and safety for every learner.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className="card-hover animate-fade-up group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-yellow-200 hover:bg-yellow-50/40 sm:p-5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0d0066] shadow-sm ring-1 ring-slate-100 transition group-hover:bg-yellow-400 group-hover:text-slate-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {facility.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== UNIQUE QUALITIES ===================== */}
      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-yellow-300/15 blur-3xl" />
          <div className="float-medium absolute right-0 bottom-10 h-52 w-52 rounded-full bg-[#0d0066]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm">
              <Trophy className="h-4 w-4 text-yellow-500" />
              Why Choose Us
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              What makes us different
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Beyond academics, we provide a balanced experience that nurtures
              talent, character, creativity and confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {uniqueQualities.map((quality, index) => (
              <div
                key={quality}
                className="card-hover animate-fade-up flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400/15 text-[#0d0066]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold leading-6 text-slate-800">
                  {quality}
                </p>
              </div>
            ))}
          </div>

          {/* Extracurricular highlight */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Music, label: "Chess & Music" },
              { icon: Palette, label: "Ballet & Arts" },
              { icon: Trophy, label: "Sports & Clubs" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="card-hover animate-fade-up flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#24107a_0%,#34159a_100%)] p-5 text-white shadow-[0_14px_40px_rgba(20,10,90,0.18)] sm:p-6"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon className="h-6 w-6 text-yellow-300" />
                  <span className="text-sm font-bold sm:text-base">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CAMPUS GALLERY ===================== */}
      <section className="relative bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <Camera className="h-4 w-4 text-yellow-500" />
              Our Campus
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Take a look around
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              A glimpse of our facilities and learning environment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 lg:grid-cols-4">
            {campusGallery.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-hover animate-fade-up group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {/* Real image — add your photo at the path below */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder if the image is missing
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback =
                        target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Fallback placeholder shown only if the image fails to load */}
                  <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-slate-50 p-4 text-center">
                    <div className="rounded-full bg-white p-4 shadow-sm ring-1 ring-slate-100">
                      <Icon className="h-7 w-7 text-[#0d0066]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0d0066]/60">
                        Add Photo
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  {/* Title overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#29189a_100%)] py-14 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-1/3 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <GraduationCap className="h-4 w-4 text-yellow-300" />
            Ready to join?
          </div>
          <h2 className="animate-fade-up delay-1 mt-6 text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Give your child the{" "}
            <span className="text-yellow-300">First Atlantic</span> advantage
          </h2>
          <p className="animate-fade-up delay-2 mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/82 sm:text-base sm:leading-8">
            Admissions are open for the 2026/2027 session. Begin your
            child&apos;s journey today and our team will guide you through every
            step.
          </p>

          <div className="animate-fade-up delay-3 mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/admission"
              className="group button-lift button-shine glow-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 sm:w-auto sm:text-base"
            >
              Start Admission
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/2347012401488?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20First%20Atlantic%20Schools"
              target="_blank"
              rel="noopener noreferrer"
              className="group button-lift button-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:w-auto sm:text-base"
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
