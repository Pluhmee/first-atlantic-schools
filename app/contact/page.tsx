'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import Navbar from '@/components/navbar';
import Animated from '@/components/Animated';
import {
  ArrowRight,
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

const CONTACT_INFO = {
  address:
    '5, Ajasa Lamberu Street, opposite Government Technical College, Obafemi Awolowo Road, Oke-Ota Ona, Ikorodu, Lagos.',
  // Update this with a more precise Google Maps search query, landmark, coordinates,
  // or exact business/place name without changing the address text shown on the page.
  // Example: '5 Ajasa Lamberu Street, Oke-Ota Ona, Ikorodu, Lagos, Nigeria'
  // Example with coordinates: '6.6190, 3.5100'
  mapsQuery: 'First Atlantic School Ikorodu',
  phoneNumbers: ['09038559900', '081238234186', '09137813344', '07012401488'],
  email: 'contact@firstatlanticschools.com',
  schoolHours: 'Monday – Friday 07:00 – 16:00',
  whatsappNumber: '2348123834186',
};

const contactPageMedia = {
  heroBackgroundImage: '/images/gallery/gallery-66.JPG',
  heroCircleImage: '/images/gallery/gallery-128.JPG',
  campusImage: '/images/gallery/gallery-29.JPG',
};

// =========================
// FORM CONFIGURATION
// =========================
// Create a Formspree form and replace this endpoint with your real one.
// Example: https://formspree.io/f/xblyzabc
const FORM_CONFIG = {
  endpoint: 'https://formspree.io/f/mnpakpjb',
  successMessage: 'Thank you for your message. We will get back to you shortly.',
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.mapsQuery)}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.mapsQuery)}&z=16&output=embed`;
const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
  'Hello, I would like to enquire about First Atlantic Schools.'
)}`;

const contactCards = [
  {
    title: 'Address',
    value: CONTACT_INFO.address,
    icon: MapPin,
  },
  {
    title: 'Phone',
    value: CONTACT_INFO.phoneNumbers.join(', '),
    icon: Phone,
  },
  {
    title: 'Email',
    value: CONTACT_INFO.email,
    icon: Mail,
  },
  {
    title: 'School Hours',
    value: CONTACT_INFO.schoolHours,
    icon: Clock3,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus({ type: null, message: '' });

    if (FORM_CONFIG.endpoint.includes('your-form-id')) {
      setFormStatus({
        type: 'error',
        message:
          'Formspree is not connected yet. Replace the placeholder form endpoint at the top of app/contact/page.tsx with your real Formspree link.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(FORM_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: FORM_CONFIG.successMessage,
      });
    } catch {
      setFormStatus({
        type: 'error',
        message:
          'Sorry, your message could not be sent right now. Please try again or use the WhatsApp button instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#2b1494_100%)] text-white">
        <div className="absolute inset-0">
          {contactPageMedia.heroBackgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${contactPageMedia.heroBackgroundImage})` }}
            />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,3,40,0.82)_0%,rgba(13,0,102,0.60)_45%,rgba(13,0,102,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="float-slow absolute left-0 top-20 h-52 w-52 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <Animated className="order-2 lg:order-1">
              <div className="relative mx-auto h-[250px] w-[250px] sm:h-[310px] sm:w-[310px] lg:mx-0 lg:h-[360px] lg:w-[360px]">
                <div className="absolute -left-3 top-10 h-16 w-16 rounded-full bg-yellow-300 shadow-lg sm:h-20 sm:w-20" />
                <div className="absolute left-0 top-28 h-12 w-12 rounded-full bg-green-300 shadow-lg sm:h-14 sm:w-14" />
                <div className="absolute bottom-3 right-3 h-16 w-16 rounded-full bg-red-400 shadow-lg sm:h-20 sm:w-20" />

                <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#2d118e] bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:border-[6px]">
                  {contactPageMedia.heroCircleImage ? (
                    <img
                      src={contactPageMedia.heroCircleImage}
                      alt="First Atlantic Schools contact hero"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] px-8 text-center">
                      <div className="rounded-full bg-white/10 p-4 text-yellow-300 backdrop-blur-sm">
                        <Building2 className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
                        Contact Hero Image
                      </p>
                      <p className="mt-3 max-w-[13rem] text-sm leading-6 text-white/80">
                        Add your preferred contact page image here later.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Animated>

            <Animated className="order-1 lg:order-2">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                We are here to help
              </div>

              <h1 className="animate-fade-up delay-1 mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Contact <span className="text-yellow-300">Us</span>
              </h1>

              <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
                Wish to enquire about admissions, the syllabus, school life or anything else?
                You can call us, send an email, visit the school or reach out on WhatsApp.
              </p>

              <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group button-lift button-shine glow-gold inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-yellow-400/20"
                >
                  Chat on WhatsApp
                  <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                >
                  Get Directions
                  <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Animated>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 text-white/95">
          <svg viewBox="0 0 1440 190" className="h-auto w-full" fill="currentColor" aria-hidden="true">
            <path d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,165.3C560,171,640,149,720,122.7C800,96,880,64,960,69.3C1040,75,1120,117,1200,128C1280,139,1360,117,1400,106.7L1440,96L1440,191L1400,191C1360,191,1280,191,1200,191C1120,191,1040,191,960,191C880,191,800,191,720,191C640,191,560,191,480,191C400,191,320,191,240,191C160,191,80,191,40,191L0,191Z" />
          </svg>
        </div>
      </section>

      <section className="relative -mt-2 bg-white pb-10 pt-8 sm:pt-10 lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Animated className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[linear-gradient(135deg,#0d0066_0%,#24107a_100%)] p-6 text-white sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  Find Us on the Map
                </div>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Visit First Atlantic Schools easily
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  You can preview our location directly on the page below, then still use the full Google Maps links for directions and navigation.
                </p>

                <div className="mt-6 space-y-3 text-sm text-white/85">
                  <p>
                    <span className="font-semibold text-white">Address:</span> {CONTACT_INFO.address}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Map search:</span> {CONTACT_INFO.mapsQuery}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300"
                  >
                    Open Full Map
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
                    className="group button-lift inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                  >
                    Call the School
                    <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] bg-slate-100 sm:min-h-[380px] lg:min-h-[460px]">
                <iframe
                  src={mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="First Atlantic Schools map"
                />
              </div>
            </div>
          </Animated>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-yellow-300/16 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-52 w-52 rounded-full bg-[#0d0066]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex flex-col gap-4 sm:max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <MapPin className="h-4 w-4 text-yellow-500" />
              Get In Touch
            </div>
            <h2 className="text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Reach us through any of these channels
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="card-hover animate-fade-up rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="inline-flex rounded-full bg-[#0d0066]/8 p-3 text-[#0d0066]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(13,0,102,0.06),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="animate-fade-up rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
                <Send className="h-4 w-4 text-yellow-500" />
                Send an Enquiry
              </div>

              <h2 className="mt-5 text-3xl font-extrabold text-[#0d0066] sm:text-4xl">
                Let’s hear from you
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {CONTACT_INFO.email}.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New enquiry from First Atlantic Schools website" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-800">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0d0066] focus:ring-4 focus:ring-[#0d0066]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0d0066] focus:ring-4 focus:ring-[#0d0066]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-800">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0d0066] focus:ring-4 focus:ring-[#0d0066]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-800">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Admission, visit, enquiry..."
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0d0066] focus:ring-4 focus:ring-[#0d0066]/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us how we can help you"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#0d0066] focus:ring-4 focus:ring-[#0d0066]/10"
                  />
                </div>

                {formStatus.type && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm leading-7 ${
                      formStatus.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-rose-200 bg-rose-50 text-rose-700'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#0d0066] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d0066]/20 hover:bg-[#120087] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group button-lift inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                  >
                    Chat Instead
                    <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="animate-fade-up delay-1 card-hover overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                {contactPageMedia.campusImage ? (
                  <div
                    className="h-[280px] bg-cover bg-center sm:h-[340px]"
                    style={{ backgroundImage: `url(${contactPageMedia.campusImage})` }}
                  />
                ) : (
                  <div className="flex h-[280px] flex-col items-center justify-center bg-[linear-gradient(135deg,#eff6ff_0%,#e2e8f0_100%)] px-6 text-center sm:h-[340px]">
                    <div className="rounded-full bg-white p-4 text-[#0d0066] shadow-sm">
                      <Building2 className="h-9 w-9" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#0d0066]/65">
                      Campus / Contact Image Placeholder
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                      Add a school campus or contact-related image here later.
                    </p>
                  </div>
                )}
              </div>

              <div className="animate-fade-up delay-2 rounded-[2rem] bg-[linear-gradient(135deg,#0d0066_0%,#24107a_100%)] p-6 text-white shadow-[0_20px_50px_rgba(13,0,102,0.18)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">
                  Visit the school
                </p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Walk in during school hours or schedule a visit.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  Parents and guardians are welcome to reach out for admissions, school visits and general enquiries.
                  We are happy to guide you.
                </p>

                <div className="mt-6 space-y-3 text-sm text-white/85">
                  <p>
                    <span className="font-semibold text-white">Address:</span> {CONTACT_INFO.address}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Office Hours:</span> {CONTACT_INFO.schoolHours}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300"
                  >
                    Open in Maps
                    <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneNumbers[0]}`}
                    className="group button-lift inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                  >
                    Call the School
                    <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
