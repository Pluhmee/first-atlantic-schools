import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MessageCircle, School2, Sparkles } from 'lucide-react';
import Animated from './Animated';

// Add your admission poster inside /public/images/admission/
// Then change the filename here if needed.
const admissionPoster = '/images/admission/admission-poster.JPG';

const admissionItems = ['Playgroup', 'Nursery', 'Primary', 'JSS 1-2'];

export default function AdmissionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute left-0 top-16 h-40 w-40 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="float-medium absolute right-0 top-10 h-52 w-52 rounded-full bg-[#0d0066]/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-fuchsia-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Animated className="order-2 lg:order-1">
            <div className="card-hover relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)] ring-1 ring-slate-200 lg:mx-0">
              <div className="relative h-[550px] w-full overflow-hidden rounded-[1.5rem] sm:h-[650px]">
                <Image
                  src={admissionPoster}
                  alt="Admission in progress poster"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 420px"
                  priority={false}
                />
              </div>

            </div>
          </Animated>

          <Animated className="order-1 lg:order-2">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>
              Admissions 2026/2027
            </div>

            <h2 className="animate-fade-up delay-1 mt-5 text-3xl font-extrabold leading-tight text-[#0d0066] sm:text-4xl lg:text-5xl">
              Admission in Progress
            </h2>

            <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Are you in Ikorodu and looking for the right school for your child? First
              Atlantic Schools offers a warm, structured and future-focused learning
              environment where children grow academically, socially and morally.
            </p>

            <p className="animate-fade-up delay-3 mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Admission is currently open for qualified learners into the following
              classes for the new academic session.
            </p>

            <div className="animate-fade-up delay-3 mt-7 flex flex-wrap gap-3">
              {admissionItems.map((item, index) => (
                <span
                  key={item}
                  className={`card-hover rounded-full border border-[#0d0066]/10 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#0d0066] ${
                    index % 2 === 0 ? 'float-slow' : 'float-medium'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-4 mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card-hover rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-yellow-400/20 p-3 text-[#0d0066]">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Academic Session</p>
                    <p className="text-sm text-slate-600">2026 / 2027</p>
                  </div>
                </div>
              </div>

              <div className="card-hover rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#0d0066]/10 p-3 text-[#0d0066]">
                    <School2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Learning Focus</p>
                    <p className="text-sm text-slate-600">Academic, social and moral growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-5 mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/admission"
                className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#0d0066] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0d0066]/20 hover:bg-[#120087]"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/2348097108811?text=Hello%20I%20would%20like%20to%20make%20an%20admission%20enquiry%20about%20First%20Atlantic%20Schools"
                target="_blank"
                rel="noopener noreferrer"
                className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full border border-[#0d0066]/15 bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300"
              >
                Make Enquiries
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
}
