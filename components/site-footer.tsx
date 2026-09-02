"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Animated from './Animated';
import { LinkedinLogoIcon } from '@phosphor-icons/react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admission', href: '/admission' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// =========================
// EDIT SCHOOL CONTACT HERE
// Replace the socialMedia '#' values with your real links later.
// Example: 'https://instagram.com/your-school-name'
// =========================
const SCHOOL_CONTACT = {
  phoneNumbers: [
    '08123834186',
    '09137813344',
    '07012401488',
    '09038559900',
  ],
  email: 'contact@firstatlanticschools.org',
  whatsappNumber: '2348123834186',
  socialMedia: {
    facebook: 'https://www.facebook.com/share/19CFqcmfps/',
    linkedin: 'https://www.linkedin.com/company/firstatlanticschools',
    instagram: 'https://www.instagram.com/firstatlanticschools?igsi=MThhZmZkOGhjbnpreQ==',
  },
};

export default function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#19076f_0%,#2a0c88_45%,#13044e_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -left-16 top-12 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="float-medium absolute right-0 top-20 h-56 w-56 rounded-full bg-blue-200/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr_0.95fr]">
          {/* Brand column */}
          <Animated>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white p-2 shadow-lg shadow-black/10">
                <Image
                  src="/images/logos/logo.png"
                  alt="First Atlantic Schools Logo"
                  width={76}
                  height={76}
                  className="h-16 w-16 object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                  First Atlantic Schools
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">Explore, Expand and Excel</h3>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              First Atlantic Schools is a private co-educational school committed to
              strong academics, character formation and a nurturing environment where
              every child is prepared to grow with confidence and purpose.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/admission"
                className="group button-lift button-shine inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300"
              >
                Admission
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={`https://wa.me/${SCHOOL_CONTACT.whatsappNumber}?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20First%20Atlantic%20Schools`}
                target="_blank"
                rel="noopener noreferrer"
                className="group button-lift button-shine inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
              >
                Chat With Us
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-yellow-200">
                Follow Us
              </p>

             <div className="mt-4 flex flex-wrap gap-3">
  <a
    href={SCHOOL_CONTACT.socialMedia.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our Facebook page"
    className="group button-lift inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
    >
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.705 4.533-4.705 1.313 0 2.686.235 2.686.235v2.975H15.83c-1.49 0-1.955.931-1.955 1.887v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073Z"
      />
    </svg>
  </a>

  <a
  href={SCHOOL_CONTACT.socialMedia.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our LinkedIn page"
  className="group button-lift inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
  >
    <path
      fill="#0A66C2"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.31 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.09 20.45H3.53V9h3.56v11.45Z"
    />
  </svg>
</a>
  <a
    href={SCHOOL_CONTACT.socialMedia.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our Instagram page"
    className="group button-lift inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg"
  >
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
    >
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="25%" stopColor="#FEDA77" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="75%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagramGradient)"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.5 1.65a.85.85 0 1 1 0 1.7.85.85 0 0 1 0-1.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"
      />
    </svg>
  </a>
</div>
            </div>
          </Animated>

          {/* Quick links */}
          <Animated delay={0.06} className="delay-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-200">
              <GraduationCap className="h-4 w-4" />
              Quick Links
            </div>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 transition group-hover:scale-125" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Animated>

          {/* Contact */}
          <Animated delay={0.1} className="delay-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-yellow-200">
              <Phone className="h-4 w-4" />
              Contact Us
            </div>

            <div className="mt-6 space-y-5 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-yellow-300" />
                <p className="leading-7">
                  First Atlantic Schools Building, 5 Ajasa Lamberu Street, off Obafemi
                  Awolowo Road, Oke Ota-Ona, opposite Grammar School/Technical College,
                  Ikorodu, Lagos.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-yellow-300" />
                <div className="flex flex-col gap-1">
                  {SCHOOL_CONTACT.phoneNumbers.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="transition hover:text-white">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-yellow-300" />
                <a href={`mailto:${SCHOOL_CONTACT.email}`} className="transition hover:text-white">
                  {SCHOOL_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 shrink-0 text-yellow-300" />
                <p>Monday - Friday 07:00 - 18:00</p>
              </div>
            </div>
          </Animated>

          {/* CTA card */}
          <Animated delay={0.14} className="delay-3">
            <div className="card-hover rounded-[2rem] border border-white/12 bg-white/10 p-6 backdrop-blur-md shadow-2xl shadow-black/10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Need More Info?
              </p>
              <h4 className="mt-3 text-2xl font-bold leading-snug text-white">
                Let’s help you find the right learning path for your child.
              </h4>
              <p className="mt-4 text-sm leading-7 text-white/80">
                Reach out for admission enquiries, school visits and general information
                about First Atlantic Schools.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/${SCHOOL_CONTACT.whatsappNumber}?text=Hello%20I%20would%20like%20to%20know%20more%20about%20First%20Atlantic%20Schools`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group button-lift button-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#0d0066] shadow-lg shadow-black/10 hover:bg-slate-100"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact"
                  className="group button-lift inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Contact Page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Animated>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14">
          <div className="flex flex-col gap-3 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-center">
            <p>© {new Date().getFullYear()} First Atlantic Schools. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
