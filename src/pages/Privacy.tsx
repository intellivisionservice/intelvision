import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;