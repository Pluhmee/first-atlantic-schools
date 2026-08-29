'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/navbar';
import Animated from '@/components/Animated';
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  PlayCircle,
  Sparkles,
  Video,
  X,
} from 'lucide-react';

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryVideo = {
  title: string;
  description: string;
  videoSrc: string;
  poster: string;
};

const galleryHeroMedia = {
  backgroundImage: '/images/gallery/gallery-45.JPG',
  featuredCircleImage: '/images/gallery/gallery-46.JPG',
};

// Add as many local images as you want here.
// Example: { src: '/images/pictures/gallery-1.JPG', alt: 'Pupils during class activity' }
const galleryImages: GalleryImage[] = [
  { src: '/images/pictures/gallery-1.JPG', alt: 'Gallery image 1' },
  { src: '/images/pictures/gallery-2.JPG', alt: 'Gallery image 2' },
  { src: '/images/pictures/gallery-3.JPG', alt: 'Gallery image 3' },
  { src: '/images/pictures/gallery-4.JPG', alt: 'Gallery image 4' },
  { src: '/images/pictures/gallery-5.JPG', alt: 'Gallery image 5' },
  { src: '/images/pictures/gallery-6.JPG', alt: 'Gallery image 6' },
  { src: '/images/pictures/gallery-7.JPG', alt: 'Gallery image 7' },
  { src: '/images/pictures/gallery-8.JPG', alt: 'Gallery image 8' },
  { src: '/images/pictures/gallery-9.JPG', alt: 'Gallery image 9' },
  { src: '/images/pictures/gallery-10.JPG', alt: 'Gallery image 10' },
  { src: '/images/gallery/gallery-11.JPG', alt: 'Gallery image 11' },
  { src: '/images/gallery/gallery-12.JPG', alt: 'Gallery image 12' },
  { src: '/images/gallery/gallery-13.JPG', alt: 'Gallery image 13' },
  { src: '/images/gallery/gallery-14.JPG', alt: 'Gallery image 14' },
  { src: '/images/gallery/gallery-15.JPG', alt: 'Gallery image 15' },
  { src: '/images/gallery/gallery-16.JPG', alt: 'Gallery image 16' },
  { src: '/images/gallery/gallery-17.JPG', alt: 'Gallery image 17' },
  { src: '/images/gallery/gallery-18.JPG', alt: 'Gallery image 18' },
  { src: '/images/gallery/gallery-19.JPG', alt: 'Gallery image 19' },
  { src: '/images/gallery/gallery-20.JPG', alt: 'Gallery image 20' },
  { src: '/images/gallery/gallery-21.JPG', alt: 'Gallery image 21' },
  { src: '/images/gallery/gallery-22.JPG', alt: 'Gallery image 22' },
  { src: '/images/gallery/gallery-23.JPG', alt: 'Gallery image 23' },
  { src: '/images/gallery/gallery-24.JPG', alt: 'Gallery image 24' },
  { src: '/images/gallery/gallery-25.JPG', alt: 'Gallery image 25' },
   { src: '/images/gallery/gallery-26.JPG', alt: 'Gallery image 1' },
  { src: '/images/gallery/gallery-27.JPG', alt: 'Gallery image 2' },
  { src: '/images/gallery/gallery-28.JPG', alt: 'Gallery image 3' },
  { src: '/images/gallery/gallery-29.JPG', alt: 'Gallery image 4' },
  { src: '/images/gallery/gallery-30.JPG', alt: 'Gallery image 5' },
  { src: '/images/gallery/gallery-31.JPG', alt: 'Gallery image 6' },
  { src: '/images/gallery/gallery-32.JPG', alt: 'Gallery image 7' },
  { src: '/images/gallery/gallery-33.JPG', alt: 'Gallery image 8' },
  { src: '/images/gallery/gallery-34.JPG', alt: 'Gallery image 9' },
  { src: '/images/gallery/gallery-35.JPG', alt: 'Gallery image 10' },
  { src: '/images/gallery/gallery-36.JPG', alt: 'Gallery image 11' },
  { src: '/images/gallery/gallery-37.JPG', alt: 'Gallery image 12' },
  { src: '/images/gallery/gallery-38.JPG', alt: 'Gallery image 13' },
  { src: '/images/gallery/gallery-39.JPG', alt: 'Gallery image 14' },
  { src: '/images/gallery/gallery-40.JPG', alt: 'Gallery image 15' },
  { src: '/images/gallery/gallery-41.JPG', alt: 'Gallery image 16' },
  { src: '/images/gallery/gallery-42.JPG', alt: 'Gallery image 17' },
  { src: '/images/gallery/gallery-43.JPG', alt: 'Gallery image 18' },
  { src: '/images/gallery/gallery-44.JPG', alt: 'Gallery image 19' },
  { src: '/images/gallery/gallery-45.JPG', alt: 'Gallery image 20' },
  { src: '/images/gallery/gallery-46.JPG', alt: 'Gallery image 21' },
  { src: '/images/gallery/gallery-47.JPG', alt: 'Gallery image 22' },
  { src: '/images/gallery/gallery-48.JPG', alt: 'Gallery image 23' },
  { src: '/images/gallery/gallery-49.JPG', alt: 'Gallery image 24' },
  { src: '/images/gallery/gallery-50.JPG', alt: 'Gallery image 25' },
  { src: '/images/gallery/gallery-51.JPG', alt: 'Gallery image 1' },
  { src: '/images/gallery/gallery-52.JPG', alt: 'Gallery image 2' },
  { src: '/images/gallery/gallery-53.JPG', alt: 'Gallery image 3' },
  { src: '/images/gallery/gallery-54.JPG', alt: 'Gallery image 4' },
  { src: '/images/gallery/gallery-55.JPG', alt: 'Gallery image 5' },
  { src: '/images/gallery/gallery-56.JPG', alt: 'Gallery image 6' },
  { src: '/images/gallery/gallery-57.JPG', alt: 'Gallery image 7' },
  { src: '/images/gallery/gallery-58.JPG', alt: 'Gallery image 8' },
  { src: '/images/gallery/gallery-59.JPG', alt: 'Gallery image 9' },
  { src: '/images/gallery/gallery-60.JPG', alt: 'Gallery image 10' },
  { src: '/images/gallery/gallery-61.JPG', alt: 'Gallery image 11' },
  { src: '/images/gallery/gallery-62.JPG', alt: 'Gallery image 12' },
  { src: '/images/gallery/gallery-63.JPG', alt: 'Gallery image 13' },
  { src: '/images/gallery/gallery-64.JPG', alt: 'Gallery image 14' },
  { src: '/images/gallery/gallery-65.JPG', alt: 'Gallery image 15' },
  { src: '/images/gallery/gallery-66.JPG', alt: 'Gallery image 16' },
  { src: '/images/gallery/gallery-67.JPG', alt: 'Gallery image 17' },
  { src: '/images/gallery/gallery-68.JPG', alt: 'Gallery image 18' },
  { src: '/images/gallery/gallery-69.JPG', alt: 'Gallery image 19' },
  { src: '/images/gallery/gallery-70.JPG', alt: 'Gallery image 20' },
  { src: '/images/gallery/gallery-71.JPG', alt: 'Gallery image 21' },
  { src: '/images/gallery/gallery-72.JPG', alt: 'Gallery image 22' },
  { src: '/images/gallery/gallery-73.JPG', alt: 'Gallery image 23' },
  { src: '/images/gallery/gallery-74.JPG', alt: 'Gallery image 24' },
  { src: '/images/gallery/gallery-75.JPG', alt: 'Gallery image 25' },
   { src: '/images/gallery/gallery-76.JPG', alt: 'Gallery image 1' },
  { src: '/images/gallery/gallery-77.JPG', alt: 'Gallery image 2' },
  { src: '/images/gallery/gallery-78.JPG', alt: 'Gallery image 3' },
  { src: '/images/gallery/gallery-79.JPG', alt: 'Gallery image 4' },
  { src: '/images/gallery/gallery-80.JPG', alt: 'Gallery image 5' },
  { src: '/images/gallery/gallery-81.JPG', alt: 'Gallery image 6' },
  { src: '/images/gallery/gallery-82.JPG', alt: 'Gallery image 7' },
  { src: '/images/gallery/gallery-83.JPG', alt: 'Gallery image 8' },
  { src: '/images/gallery/gallery-84.JPG', alt: 'Gallery image 9' },
  { src: '/images/gallery/gallery-85.JPG', alt: 'Gallery image 10' },
  { src: '/images/gallery/gallery-86.JPG', alt: 'Gallery image 11' },
  { src: '/images/gallery/gallery-87.JPG', alt: 'Gallery image 12' },
  { src: '/images/gallery/gallery-88.JPG', alt: 'Gallery image 13' },
  { src: '/images/gallery/gallery-89.JPG', alt: 'Gallery image 14' },
  { src: '/images/gallery/gallery-90.JPG', alt: 'Gallery image 15' },
  { src: '/images/gallery/gallery-91.JPG', alt: 'Gallery image 16' },
  { src: '/images/gallery/gallery-92.JPG', alt: 'Gallery image 17' },
  { src: '/images/gallery/gallery-93.JPG', alt: 'Gallery image 18' },
  { src: '/images/gallery/gallery-94.JPG', alt: 'Gallery image 19' },
  { src: '/images/gallery/gallery-95.JPG', alt: 'Gallery image 20' },
  { src: '/images/gallery/gallery-96.JPG', alt: 'Gallery image 21' },
  { src: '/images/gallery/gallery-97.JPG', alt: 'Gallery image 22' },
  { src: '/images/gallery/gallery-98.JPG', alt: 'Gallery image 23' },
  { src: '/images/gallery/gallery-99.JPG', alt: 'Gallery image 24' },
  { src: '/images/gallery/gallery-100.JPG', alt: 'Gallery image 25' },
  { src: '/images/gallery/gallery-101.JPG', alt: 'Gallery image 26' },
  { src: '/images/gallery/gallery-102.JPG', alt: 'Gallery image 27' },
  { src: '/images/gallery/gallery-103.JPG', alt: 'Gallery image 28' },
  { src: '/images/gallery/gallery-104.JPG', alt: 'Gallery image 29' },
  { src: '/images/gallery/gallery-105.JPG', alt: 'Gallery image 30' },
  { src: '/images/gallery/gallery-106.JPG', alt: 'Gallery image 31' },
  { src: '/images/gallery/gallery-107.JPG', alt: 'Gallery image 32' },
  { src: '/images/gallery/gallery-108.JPG', alt: 'Gallery image 33' },
  { src: '/images/gallery/gallery-109.JPG', alt: 'Gallery image 34' },
  { src: '/images/gallery/gallery-110.JPG', alt: 'Gallery image 35' },
  { src: '/images/gallery/gallery-111.JPG', alt: 'Gallery image 36' },
  { src: '/images/gallery/gallery-112.JPG', alt: 'Gallery image 37' },
  { src: '/images/gallery/gallery-113.JPG', alt: 'Gallery image 38' },
  { src: '/images/gallery/gallery-114.JPG', alt: 'Gallery image 39' },
  { src: '/images/gallery/gallery-115.JPG', alt: 'Gallery image 40' },
  { src: '/images/gallery/gallery-116.JPG', alt: 'Gallery image 41' },
  { src: '/images/gallery/gallery-117.JPG', alt: 'Gallery image 42' },
  { src: '/images/gallery/gallery-118.JPG', alt: 'Gallery image 43' },
  { src: '/images/gallery/gallery-119.JPG', alt: 'Gallery image 44' },
  { src: '/images/gallery/gallery-120.JPG', alt: 'Gallery image 45' },
  { src: '/images/gallery/gallery-121.JPG', alt: 'Gallery image 46' },
  { src: '/images/gallery/gallery-122.JPG', alt: 'Gallery image 47' },
  { src: '/images/gallery/gallery-123.JPG', alt: 'Gallery image 48' },
  { src: '/images/gallery/gallery-124.JPG', alt: 'Gallery image 49' },
  { src: '/images/gallery/gallery-125.JPG', alt: 'Gallery image 50' },
  { src: '/images/gallery/gallery-126.JPG', alt: 'Gallery image 51' },
  { src: '/images/gallery/gallery-127.JPG', alt: 'Gallery image 52' },
  { src: '/images/gallery/gallery-128.JPG', alt: 'Gallery image 53' },
  { src: '/images/gallery/gallery-129.JPG', alt: 'Gallery image 54' },
  { src: '/images/gallery/gallery-130.JPG', alt: 'Gallery image 55' },
  { src: '/images/gallery/gallery-131.JPG', alt: 'Gallery image 56' },
  { src: '/images/gallery/gallery-132.JPG', alt: 'Gallery image 57' },
  { src: '/images/gallery/gallery-133.JPG', alt: 'Gallery image 58' },
];

// Use local video files only.
// Put video files inside /public/videos/gallery/
// Put poster images inside /public/images/gallery/
const galleryVideos: GalleryVideo[] = [
  {
    title: 'Outdoor Group Activity',
    description: 'A fun outdoor activity session where pupils learn, move and interact together in an energetic and lively environment.',
    videoSrc: '/videos/gallery/video-1.mp4',
    poster: '/images/gallery/video_poster1.png',
  },
  {
    title: 'Violin Performance',
    description: 'A young learner confidently showcases musical talent through a violin performance, reflecting creativity and skill development.',
    videoSrc: '/videos/gallery/video-2.mp4',
    poster: '/images/gallery/video_poster2.png',
  },
  {
    title: 'Indoor Learning Activity',
    description: 'An engaging indoor activity moment where pupils participate actively in hands-on learning and guided movement.',
    videoSrc: '/videos/gallery/video-3.mp4',
    poster: '/images/gallery/video_poster3.png',
  },
  {
    title: 'Celebration and Dance Moment',
    description: 'A joyful celebration scene featuring pupils dressed up and participating in a lively performance filled with confidence and excitement.',
    videoSrc: '/videos/gallery/video-4.mp4',
    poster: '/images/gallery/video_poster4.png',
  },
  {
    title: ' Classroom Presentation Activity',
    description: 'A classroom-based interactive session where pupils take part in a presentation or response activity with guidance from a teacher.',
    videoSrc: '/videos/gallery/video-8.mp4',
    poster: '/images/gallery/video_poster5.png',
  },
  {
    title: 'Group Presentation Session',
    description: 'A collaborative presentation where students work together to showcase their learning and skills.',
    videoSrc: '/videos/gallery/video-9.mp4',
    poster: '/images/gallery/video_poster6.png',
  },
  {
    title: 'Cultural Dance Performance',
    description: 'A lively cultural dance moment where learners express energy, confidence and creativity through performance.',
    videoSrc: '/videos/gallery/video-11.mp4',
    poster: '/images/gallery/video_poster7.png',
  },
  {
    title: ' Outdoor Washing Activity',
    description: 'An engaging outdoor school activity where pupils gather together for a lively and coordinated group experience.',
    videoSrc: '/videos/gallery/video-15.mp4',
    poster: '/images/gallery/video_poster8.png',
  },
  {
    title: 'Classroom Speaking Exercise',
    description: 'A structured classroom session where pupils participate in speaking and presentation activities with teacher guidance.',
    videoSrc: '/videos/gallery/video-22.mp4',
    poster: '/images/gallery/video_poster9.png',
  },
  {
    title: 'Cultural Performance Display',
    description: 'A showcase of cultural performances where students demonstrate their talents and creativity.',
    videoSrc: '/videos/gallery/video-25.mp4',
    poster: '/images/gallery/video_poster10.png',
  },
];

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const hasHeroBackground = Boolean(galleryHeroMedia.backgroundImage);
  const hasFeaturedCircle = Boolean(galleryHeroMedia.featuredCircleImage);

  const displayImages = useMemo(() => {
    const realImages = galleryImages.filter((item) => item.src.trim());
    return realImages.length > 0 ? realImages : galleryImages;
  }, []);

  const displayVideos = useMemo(() => {
    const realVideos = galleryVideos.filter((item) => item.videoSrc.trim());
    return realVideos.length > 0 ? realVideos : galleryVideos;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeImageIndex !== null) {
        if (event.key === 'Escape') setActiveImageIndex(null);
        if (event.key === 'ArrowRight') {
          setActiveImageIndex((prev) => (prev === null ? 0 : (prev + 1) % displayImages.length));
        }
        if (event.key === 'ArrowLeft') {
          setActiveImageIndex((prev) =>
            prev === null ? 0 : (prev - 1 + displayImages.length) % displayImages.length
          );
        }
      }

      if (activeVideoIndex !== null) {
        if (event.key === 'Escape') setActiveVideoIndex(null);
        if (event.key === 'ArrowRight') {
          setActiveVideoIndex((prev) => (prev === null ? 0 : (prev + 1) % displayVideos.length));
        }
        if (event.key === 'ArrowLeft') {
          setActiveVideoIndex((prev) =>
            prev === null ? 0 : (prev - 1 + displayVideos.length) % displayVideos.length
          );
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, activeVideoIndex, displayImages.length, displayVideos.length]);

  const currentImage = activeImageIndex !== null ? displayImages[activeImageIndex] : null;
  const currentVideo = activeVideoIndex !== null ? displayVideos[activeVideoIndex] : null;

  return (
    <main className="bg-white">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#090049_0%,#0d0066_55%,#2b1494_100%)] text-white">
        <div className="absolute inset-0">
          {hasHeroBackground && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-55"
              style={{ backgroundImage: `url(${galleryHeroMedia.backgroundImage})` }}
            />
          )}

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,3,40,0.78)_0%,rgba(13,0,102,0.58)_46%,rgba(13,0,102,0.25)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="float-slow absolute left-0 top-16 h-52 w-52 rounded-full bg-yellow-300/10 blur-3xl" />
          <div className="float-medium absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-200/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <Animated className="order-2 lg:order-1">
              <div className="relative mx-auto h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:mx-0 lg:h-[380px] lg:w-[380px]">
                <div className="absolute -left-3 top-10 h-16 w-16 rounded-full bg-green-300 shadow-lg sm:h-20 sm:w-20" />
                <div className="absolute -left-1 top-28 h-14 w-14 rounded-full bg-red-500 shadow-lg sm:h-16 sm:w-16" />
                <div className="absolute bottom-4 right-2 h-16 w-16 rounded-full bg-yellow-300 shadow-lg sm:h-20 sm:w-20" />

                <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-[#2d118e] bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:border-[6px]">
                  {hasFeaturedCircle ? (
                    <img
                      src={galleryHeroMedia.featuredCircleImage}
                      alt="Featured school gallery moment"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02))] px-8 text-center">
                      <div className="rounded-full bg-white/10 p-4 text-yellow-300 backdrop-blur-sm">
                        <Images className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      {/* <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200">
                        Gallery Hero Photo
                      </p>
                      <p className="mt-3 max-w-[12rem] text-sm leading-6 text-white/80">
                        Add your featured gallery image here later.
                      </p> */}
                    </div>
                  )}
                </div>
              </div>
            </Animated>

            <Animated className="order-1 lg:order-2">
              <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                School Memories and Moments
              </div>

              <h1 className="animate-fade-up delay-1 mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Our <span className="text-yellow-300">Gallery</span>
              </h1>

              <p className="animate-fade-up delay-2 mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Explore a visual story of school life at First Atlantic Schools — from
                classroom engagement and celebrations to excursions, activities and special events.
              </p>

              <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#photo-gallery"
                  className="group button-lift button-shine glow-gold inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-yellow-400/20"
                >
                  View Photos
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#video-gallery"
                  className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15"
                >
                  Watch Videos
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      <section id="photo-gallery" className="relative bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-yellow-300/16 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-52 w-52 rounded-full bg-[#0d0066]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Animated className="flex flex-col gap-4 sm:max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0d0066]/10 bg-[#0d0066]/5 px-4 py-2 text-sm font-medium text-[#0d0066]">
              <Camera className="h-4 w-4 text-yellow-500" />
              Photo Gallery
            </div>
            <h2 className="text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Picture moments from school life
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              The gallery is a collection of images that capture the essence of school life, from
              classroom activities and events to excursions and celebrations. Each image tells a story
              of the vibrant and dynamic environment that students experience at First Atlantic
              Schools.
            </p>
          </Animated>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {displayImages.map((item, index) => {
              const hasImage = Boolean(item.src.trim());

              return (
                <article
                  key={`${item.alt}-${index}`}
                  className={`card-hover animate-fade-up group overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] ${
                    hasImage ? 'cursor-pointer' : ''
                  }`}
                  style={{ animationDelay: `${index * 40}ms` }}
                  onClick={() => hasImage && setActiveImageIndex(index)}
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    {hasImage ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#eff6ff_0%,#e2e8f0_100%)] px-4 text-center">
                        <div className="rounded-full bg-white/90 p-3 shadow-sm">
                          <Camera className="h-5 w-5 text-[#0d0066]" />
                        </div>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0d0066]/70">
                          Add Image
                        </p>
                        <p className="mt-1 text-xs text-slate-500">Slot {index + 1}</p>
                      </div>
                    )}

                    {hasImage && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="video-gallery" className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(13,0,102,0.06),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Animated className="flex flex-col gap-4 sm:max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0d0066]/10 bg-white px-4 py-2 text-sm font-medium text-[#0d0066] shadow-sm">
              <Video className="h-4 w-4 text-yellow-500" />
              Video Gallery
            </div>
            <h2 className="text-3xl font-extrabold text-[#0d0066] sm:text-4xl lg:text-5xl">
              Video highlights and school experiences
            </h2>
            {/* <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Videos now behave more like the image gallery too: users can open one video at a time
              and move to the previous or next video in a larger viewer.
            </p> */}
          </Animated>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {displayVideos.map((video, index) => {
              const hasVideo = Boolean(video.videoSrc.trim());
              const hasPoster = Boolean(video.poster.trim());

              return (
                <article
                  key={`${video.title}-${index}`}
                  className={`card-hover animate-fade-up group overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)] ${
                    hasVideo ? 'cursor-pointer' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => hasVideo && setActiveVideoIndex(index)}
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    {hasPoster ? (
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(135deg,#0d0066_0%,#2b1494_100%)] px-4 text-center text-white">
                        <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                          <PlayCircle className="h-8 w-8 text-yellow-300" />
                        </div>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow-200">
                          Add Poster
                        </p>
                      </div>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20">
                      <div className="rounded-full bg-white/92 p-3 text-[#0d0066] shadow-lg">
                        <PlayCircle className="h-7 w-7" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="line-clamp-2 text-sm font-bold text-slate-900 sm:text-base">{video.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-600 sm:text-sm">
                      {video.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <Animated delay={0.24} className="delay-4 mt-10 rounded-[2rem] bg-[linear-gradient(135deg,#0d0066_0%,#24107a_100%)] p-6 text-white shadow-[0_20px_50px_rgba(13,0,102,0.18)] sm:p-8 lg:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">
                Want to see more?
              </p>
              {/* <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                More school moments can be added anytime as the gallery grows.
              </h3> */}
              {/* <p className="mt-3 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                We can later connect this page to a larger gallery archive, categories or a lightbox if you want.
              </p> */}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:shrink-0">
              <Link
                href="/contact"
                className="group button-lift button-shine inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 hover:bg-yellow-300"
              >
                Make an Enquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/admission"
                className="group button-lift inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
              >
                Explore Admission
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Animated>
        </div>
      </section>

      {currentImage && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/88 p-4 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveImageIndex(null)}
            aria-label="Close image viewer overlay"
          />

          <div className="relative z-10 flex w-full max-w-6xl items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === null ? 0 : (prev - 1 + displayImages.length) % displayImages.length
                )
              }
              className="button-lift inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm hover:bg-white/18 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="button-lift absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-sm hover:bg-slate-950/70"
                aria-label="Close image viewer"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[80vh] w-full object-contain bg-black"
              />

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-950/80 px-4 py-3 text-white sm:px-5">
                <p className="text-sm font-medium text-white/85">{currentImage.alt}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  {activeImageIndex! + 1} / {displayImages.length}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === null ? 0 : (prev + 1) % displayImages.length
                )
              }
              className="button-lift inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm hover:bg-white/18 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {currentVideo && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/88 p-4 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveVideoIndex(null)}
            aria-label="Close video viewer overlay"
          />

          <div className="relative z-10 flex w-full max-w-6xl items-center justify-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() =>
                setActiveVideoIndex((prev) =>
                  prev === null ? 0 : (prev - 1 + displayVideos.length) % displayVideos.length
                )
              }
              className="button-lift inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm hover:bg-white/18 sm:h-12 sm:w-12"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-black shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveVideoIndex(null)}
                className="button-lift absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-sm hover:bg-slate-950/70"
                aria-label="Close video viewer"
              >
                <X className="h-5 w-5" />
              </button>

              <video
                controls
                autoPlay
                poster={currentVideo.poster || undefined}
                className="max-h-[80vh] w-full bg-black object-contain"
              >
                <source src={currentVideo.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-950/80 px-4 py-3 text-white sm:px-5">
                <div>
                  <p className="text-sm font-medium text-white/90">{currentVideo.title}</p>
                  <p className="mt-1 text-xs leading-6 text-white/65 sm:text-sm">{currentVideo.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  {activeVideoIndex! + 1} / {displayVideos.length}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveVideoIndex((prev) =>
                  prev === null ? 0 : (prev + 1) % displayVideos.length
                )
              }
              className="button-lift inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm hover:bg-white/18 sm:h-12 sm:w-12"
              aria-label="Next video"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
