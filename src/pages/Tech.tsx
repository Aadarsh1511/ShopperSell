import Header from '@/components/Header';
import TechHero from '@/components/sections/TechHero';
import TechCategories from '@/components/sections/TechCategories';
import TechProducts from '@/components/sections/TechProducts';
import TechInnovation from '@/components/sections/TechInnovation';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Tech = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TechHero />
        <TechCategories />
        <TechProducts />
        <TechInnovation />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Tech;