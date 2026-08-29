/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ArrowRight, Camera, Images } from 'lucide-react';
import Animated from './Animated';

type GalleryItem = {
  src: string;
  alt: string;
};

// Add your gallery images here later.
// Example:
// { src: '/images/gallery/gallery-1.jpg', alt: 'Pupils in class' }
const galleryItems: GalleryItem[] = [
  { src: '/images/pictures/gallery-1.jpg', alt: 'Gallery image 1' },
  { src: '/images/pictures/gallery-2.jpg', alt: 'Gallery image 2' },
  { src: '/images/pictures/gallery-3.jpg', alt: 'Gallery image 3' },
  { src: '/images/pictures/gallery-4.jpg', alt: 'Gallery image 4' },
  { src: '/images/pictures/gallery-5.jpg', alt: 'Gallery image 5' },
  { src: '/images/pictures/gallery-6.jpg', alt: 'Gallery image 6' },
  { src: '/images/pictures/gallery-7.jpg', alt: 'Gallery image 7' },
  { src: '/images/pictures/gallery-8.jpg', alt: 'Gallery image 8' },
  { src: '/images/pictures/gallery-9.jpg', alt: 'Gallery image 9' },
  { src: '/images/pictures/gallery-10.jpg', alt: 'Gallery image 10' },
];

export default function GalleryCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-36 pt-16 sm:pb-40 sm:pt-20 lg:pb-52 lg:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-yellow-300/70 blur-[2px] sm:-left-16 sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem]" />
        <div className="float-slow absolute right-10 top-10 h-24 w-24 rounded-full bg-[#0d0066]/6 blur-2xl" />
        <div className="float-medium absolute bottom-24 left-1/3 h-32 w-32 rounded-full bg-fuchsia-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Animated className="flex flex-col gap-4 sm:max-w-md">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white/80 px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm backdrop-blur-sm">
            <Images className="h-4 w-4 text-yellow-500" />
            School Moments
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl lg:text-5xl">
            Our Gallery
          </h2>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            A glimpse into learning, activities, celebrations and the vibrant school
            life at First Atlantic Schools.
          </p>
        </Animated>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 xl:grid-cols-5">
          {galleryItems.map((item, index) => (
            <Animated
              key={`${item.alt}-${index}`}
              delay={index * 0.08}
              className="card-hover group relative overflow-hidden rounded-[1.35rem] bg-slate-100 shadow-[0_14px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#eff6ff_0%,#e2e8f0_100%)] px-4 text-center">
                    <div className="rounded-full bg-white/80 p-3 shadow-sm">
                      <Camera className="h-6 w-6 text-[#0d0066]" />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0d0066]/70">
                      Add Image
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Gallery slot {index + 1}
                    </p>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Animated>
          ))}
        </div>

        <Animated delay={0.24} className="mt-10 flex justify-center lg:mt-12">
          <Link
            href="/gallery"
            className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-black/15 hover:bg-slate-900"
          >
            View More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Animated>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 overflow-hidden sm:h-40 lg:h-52">
        <svg
          viewBox="0 0 1440 170"
          className="absolute bottom-6 h-auto w-full text-[#6241c7]/35 sm:bottom-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,144L48,149.3C96,155,192,165,288,154.7C384,144,480,112,576,106.7C672,101,768,123,864,133.3C960,144,1056,144,1152,133.3C1248,123,1344,101,1392,90.7L1440,80L1440,171L1392,171C1344,171,1248,171,1152,171C1056,171,960,171,864,171C768,171,672,171,576,171C480,171,384,171,288,171C192,171,96,171,48,171L0,171Z" />
        </svg>

        <svg
          viewBox="0 0 1440 170"
          className="absolute bottom-0 h-auto w-full text-[#2b0c88]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,122.7C560,117,640,139,720,144C800,149,880,139,960,122.7C1040,107,1120,85,1200,90.7C1280,96,1360,128,1400,144L1440,160L1440,171L1400,171C1360,171,1280,171,1200,171C1120,171,1040,171,960,171C880,171,800,171,720,171C640,171,560,171,480,171C400,171,320,171,240,171C160,171,80,171,40,171L0,171Z" />
        </svg>
      </div>
    </section>
  );
}