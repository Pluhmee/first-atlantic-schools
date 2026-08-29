"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import Animated from '@/components/Animated';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Gift,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  Phone,
  Receipt,
  School2,
  Sparkles,
  Baby,
  Blocks,
  Users,
  Wallet,
} from "lucide-react";

// =========================
// ADMISSION PAGE CONTENT
// =========================

const admissionImages = {
  poster: "/images/admission/admission-poster.JPG",
};

const availableClasses = [
  {
    name: "Playgroup",
    description: "A warm, playful foundation for our earliest learners.",
    icon: Baby,
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Nursery",
    description: "Early-years learning focused on curiosity and language.",
    icon: Blocks,
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    name: "Primary",
    description: "Strong academic building blocks and character growth.",
    icon: School2,
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "JSS 1-2",
    description: "A purposeful start to secondary education and leadership.",
    icon: GraduationCap,
    color: "from-sky-400 to-cyan-500",
  },
];

const admissionSteps = [
  {
    step: "01",
    title: "Obtain an Admission Form",
    description:
      "Collect an admission form directly from the school office, or through our authorised staff and agents.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Placement Test",
    description:
      "Bring your ward for a placement test into their required class. This helps us place every learner correctly.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Collect Your Result",
    description:
      "Receive the result of the placement test. If your ward passes, you may proceed to the next stage.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Collect School Bill & Documents",
    description:
      "Collect the school bill and all other admission documents required for enrolment.",
    icon: Receipt,
  },
  {
    step: "05",
    title: "Make Payment",
    description:
      "Pay your bill into the school account and provide evidence of payment to the school account officer.",
    icon: Wallet,
  },
  {
    step: "06",
    title: "Return Completed Documents",
    description:
      "Fill and return all required admission documents given to you during the process.",
    icon: FileText,
  },
  {
    step: "07",
    title: "Welcome to Class",
    description:
      "After confirmation of payment and satisfaction of your documents, your ward receives uniforms, textbooks and stationery, then is taken to class.",
    icon: School2,
  },
];

const benefits = [
  {
    title: "Two Siblings Discount",
    description:
      "A discount of 5% on tuition is given when two siblings from the same biological parents are enrolled (2.5% each).",
    icon: Users,
    highlight: "5% OFF",
  },
  {
    title: "Three or More Siblings",
    description:
      "A discount of 10% on tuition applies when three or more siblings from the same biological parents are enrolled (3.33% each).",
    icon: Users,
    highlight: "10% OFF",
  },
  {
    title: "En Bloc Payment Discount",
    description:
      "Paying your fees en bloc (all at once) attracts a discount of 10% on tuition.",
    icon: Wallet,
    highlight: "10% OFF",
  },
];

const faqs = [
  {
    question: "When is the placement test held?",
    answer:
      "Placement tests hold every last Saturday of the month, or at a time agreed and fixed by both parties.",
  },
  {
    question: "Which classes are currently open for admission?",
    answer:
      "Admission is currently open into Playgroup, Nursery, Primary and JSS 1-2 for the 2026/2027 academic session.",
  },
  {
    question: "How do I obtain an admission form?",
    answer:
      "You can obtain an admission form directly from the school office, or through our authorised staff and agents. You can also reach out via WhatsApp to begin the process.",
  },
  {
    question: "Are there sibling discounts available?",
    answer:
      "Yes. Two siblings attract a 5% discount on tuition, while three or more siblings attract a 10% discount. En bloc payment also attracts a 10% discount.",
  },
  {
    question: "What happens after payment?",
    answer:
      "Once payment is confirmed and all required documents are returned, your ward will be issued uniforms, textbooks and stationery, and then taken to their class.",
  },
];

const quickStats = [
  { label: "Academic Session", value: "2026 / 2027" },
  { label: "Open Classes", value: "Playgroup – JSS 2" },
  { label: "Placement Test", value: "Last Sat monthly" },
];

export default function AdmissionPage() {
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

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* Text content */}
            <Animated className="max-w-3xl">
              {/* Breadcrumb */}
              <div className="animate-fade-up flex flex-wrap items-center gap-2 text-sm text-white/75">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-white">Admission</span>
              </div>

              <div className="animate-fade-up delay-1 mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm">
                <CalendarDays className="h-4 w-4 shrink-0 text-yellow-300" />
                <span>Admissions for 2026 / 2027 session are open</span>
              </div>

              <h1 className="animate-fade-up delay-2 mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-6xl">
                Admission <span className="text-yellow-300">in Progress</span>
              </h1>

              <p className="animate-fade-up delay-3 mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:mt-6 sm:text-base sm:leading-8">
                Are you in Ikorodu and looking for the right school for your
                child? First Atlantic Schools offers a warm, structured and
                future-focused learning environment where children grow
                academically, socially and morally.
              </p>

              <div className="animate-fade-up delay-4 mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <a
                  href="https://wa.me/2347012401488?text=Hello%20I%20would%20like%20to%20make%20an%20admission%20enquiry%20about%20First%20Atlantic%20Schools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group button-lift button-shine glow-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 sm:w-auto sm:text-base"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  Make an Enquiry
                </a>
                <a
                  href="tel:07012401488"
                  className="group button-lift button-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:w-auto sm:text-base"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  Call the School
                </a>
              </div>
            </Animated>

            {/* Hero poster card */}
            <Animated delay={0.12} className="w-full">
              <div className="card-hover mx-auto w-full max-w-[280px] rounded-[1.75rem] border border-white/12 bg-white/10 p-3 backdrop-blur-md shadow-2xl shadow-black/10 sm:max-w-sm sm:p-5 lg:max-w-none">
                <div className="overflow-hidden rounded-[1.25rem] bg-white/5 p-2 sm:rounded-[1.5rem] sm:p-3">
                  <div
                    className="aspect-[3/4] w-full rounded-[1rem] bg-contain bg-center bg-no-repeat sm:rounded-[1.15rem]"
                    style={{
                      backgroundImage: `url(${admissionImages.poster})`,
                    }}
                  />
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                  {quickStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/10 p-2 text-center sm:rounded-2xl sm:p-4 sm:text-left"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-white/60 sm:text-xs sm:tracking-[0.22em]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[11px] font-bold leading-tight text-white sm:mt-2 sm:text-sm sm:font-semibold">
                        {item.value}
                      </p>
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

      {/* ===================== AVAILABLE CLASSES ===================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute left-0 top-16 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="float-medium absolute right-0 top-10 h-52 w-52 rounded-full bg-[#0d0066]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <GraduationCap className="h-4 w-4 text-yellow-500" />
              Available Classes
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold leading-tight text-[#0d0066] sm:text-4xl lg:text-5xl">
              Admission is open into the following classes
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Qualified learners are welcome to apply for the 2026/2027 academic
              session across our early years, primary and college entry levels.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 xl:grid-cols-4">
            {availableClasses.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="card-hover animate-fade-up group overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-slate-200 sm:rounded-[2rem]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`flex h-28 items-center justify-center bg-gradient-to-br ${item.color} sm:h-40`}
                  >
                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 sm:p-5">
                      <Icon className="h-7 w-7 text-white sm:h-10 sm:w-10" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base font-bold text-[#0d0066] sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-600 sm:mt-2 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== ADMISSION PROCEDURE ===================== */}
      <section className="relative bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm">
              <ClipboardCheck className="h-4 w-4 text-yellow-500" />
              Admission Procedure
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Simple steps to enrol your ward
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Our admission process is clear and straightforward. Follow these
              steps to begin your child&apos;s journey at First Atlantic
              Schools.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === admissionSteps.length - 1;
              return (
                <div
                  key={step.step}
                  className={`card-hover animate-fade-up relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-7 ${
                    isLast
                      ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] xl:col-span-1 xl:col-start-2 xl:w-auto xl:mx-0"
                      : ""
                  }`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0d0066]/8 text-[#0d0066] sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-3xl font-extrabold text-[#0d0066]/10 sm:text-4xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 sm:mt-5 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Placement test banner */}
          <div className="animate-fade-up delay-3 mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#24107a_0%,#34159a_100%)] p-6 text-white shadow-[0_24px_70px_rgba(20,10,90,0.20)] sm:mt-10 sm:rounded-[2rem] sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-xl bg-yellow-400/20 p-3 text-yellow-300 sm:rounded-2xl sm:p-4">
                  <CalendarDays className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-yellow-300 sm:text-xs sm:tracking-[0.28em]">
                    Placement Test Date
                  </p>
                  <h3 className="mt-1 text-lg font-bold sm:mt-2 sm:text-2xl">
                    Every last Saturday of the month
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/80 sm:mt-2 sm:leading-7">
                    You can also arrange a time agreed by both parties.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/2347012401488?text=Hello%20I%20would%20like%20to%20book%20a%20placement%20test%20for%20my%20ward"
                target="_blank"
                rel="noopener noreferrer"
                className="group button-lift button-shine inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 sm:w-auto"
              >
                Book a Test
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SPECIAL BENEFITS ===================== */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="float-medium absolute right-0 bottom-10 h-52 w-52 rounded-full bg-[#0d0066]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
                <Gift className="h-4 w-4 text-yellow-500" />
                Special Benefits
              </div>
              <h2 className="animate-fade-up delay-1 mt-4 text-2xl font-extrabold text-[#0d0066] sm:mt-5 sm:text-4xl lg:text-5xl">
                Discounts designed for families
              </h2>
              <p className="animate-fade-up delay-2 mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                We reward families who choose First Atlantic Schools for more
                than one child, as well as those who complete their fee payments
                early.
              </p>
            </div>

            <div className="animate-fade-up delay-2 rounded-2xl bg-[linear-gradient(135deg,#24107a_0%,#34159a_100%)] p-6 text-white shadow-[0_24px_70px_rgba(20,10,90,0.18)] sm:rounded-[2rem] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Good to know
              </p>
              <p className="mt-3 text-sm leading-7 text-white/85 sm:mt-4 sm:text-base sm:leading-8">
                All discounts apply to tuition only and are applied once the
                relevant criteria are confirmed by the school accounts office.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="card-hover animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-[2rem] sm:p-7"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20 text-[#0d0066]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-extrabold text-slate-950">
                      {benefit.highlight}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION ===================== */}
      <section className="relative bg-slate-50 py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm">
              <HelpCircle className="h-4 w-4 text-yellow-500" />
              Frequently Asked Questions
            </div>
            <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Admission questions, answered
            </h2>
            <p className="animate-fade-up delay-2 mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Can&apos;t find what you&apos;re looking for? Reach out to us
              directly on WhatsApp and we&apos;ll be happy to help.
            </p>
          </div>

          <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="card-hover group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-[1.5rem]"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-900 transition [&::-webkit-details-marker]:hidden hover:bg-slate-50 sm:gap-4 sm:px-6 sm:py-5 sm:text-base">
                  <span>{faq.question}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d0066]/8 text-[#0d0066] transition-transform duration-300 group-open:rotate-45 sm:h-8 sm:w-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-200 bg-slate-50/60 px-4 py-4 sm:px-6 sm:py-5">
                  <p className="text-sm leading-7 text-slate-700 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative overflow-hidden bg-[#1b0a73] py-14 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-1/3 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            
            Ready to begin?
          </div>
          <h2 className="animate-fade-up delay-1 mt-5 text-2xl font-extrabold leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            Give your child the{" "}
            <span className="text-yellow-300">First Atlantic</span> advantage
          </h2>
          <p className="animate-fade-up delay-2 mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:mt-5 sm:text-base sm:leading-8">
            Join a school community where every child matters. Start your
            admission enquiry today and our team will guide you through every
            step.
          </p>

          <div className="animate-fade-up delay-3 mt-7 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href="https://wa.me/2347012401488?text=Hello%20I%20would%20like%20to%20make%20an%20admission%20enquiry%20about%20First%20Atlantic%20Schools"
              target="_blank"
              rel="noopener noreferrer"
              className="group button-lift button-shine glow-gold inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 sm:w-auto sm:px-7 sm:text-base"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Make Enquiries on WhatsApp
            </a>
            <Link
              href="/contact"
              className="group button-lift button-shine inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 sm:w-auto sm:px-7 sm:text-base"
            >
              Contact the School
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="animate-fade-up delay-4 mt-8 flex flex-col items-center gap-3 text-sm text-white/70 sm:mt-10 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="tel:07012401488"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-yellow-300" />
              07012401488
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-yellow-300" />
              Mon – Fri, 07:00 – 18:00
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
