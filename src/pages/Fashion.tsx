import Header from '@/components/Header';
import FashionHero from '@/components/sections/FashionHero';
import FashionCategories from '@/components/sections/FashionCategories';
import FashionTrends from '@/components/sections/FashionTrends';
import FashionShowcase from '@/components/sections/FashionShowcase';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Fashion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FashionHero />
        <FashionCategories />
        <FashionTrends />
        <FashionShowcase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Fashion;