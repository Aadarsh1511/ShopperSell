import Header from '@/components/Header';
import GiftsHero from '@/components/sections/GiftsHero';
import GiftsCategories from '@/components/sections/GiftsCategories';
import GiftsOccasions from '@/components/sections/GiftsOccasions';
import GiftsPersonalized from '@/components/sections/GiftsPersonalized';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Gifts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <GiftsHero />
        <GiftsCategories />
        <GiftsOccasions />
        <GiftsPersonalized />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Gifts;