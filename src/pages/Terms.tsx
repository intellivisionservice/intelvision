import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>These terms and conditions outline the rules and regulations for the use of our services.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;