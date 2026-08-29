import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSchoolSection from '@/components/about-school-section';
import LearningtracksSection from '@/components/learning-tracks-section';
import AdmissionSection from '@/components/admission-section';
import GalleryctaSection from '@/components/gallery-cta-section';



export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSchoolSection />
      <LearningtracksSection />
      <AdmissionSection />
      <GalleryctaSection />
      
      {/* School Landing Hero Section */}
    </main>
  );
}
