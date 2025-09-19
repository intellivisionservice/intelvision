import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhoWeServe from '@/components/WhoWeServe';
import StatsSection from '@/components/StatsSection';
import FlipServiceCards from '@/components/FlipServiceCards';
import TrustedCompanies from '@/components/TrustedCompanies';
import SuccessStories from '@/components/SuccessStories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeServe />
        <StatsSection />
        <FlipServiceCards />
        <TrustedCompanies />
        <SuccessStories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
