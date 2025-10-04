import Header from '@/components/Header';
import HomeAndLivingHero from '@/components/sections/HomeAndLivingHero';
import HomeAndLivingCategories from '@/components/sections/HomeAndLivingCategories';
import HomeAndLivingProducts from '@/components/sections/HomeAndLivingProducts';
import HomeAndLivingInspiration from '@/components/sections/HomeAndLivingInspiration';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const HomeAndLiving = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HomeAndLivingHero />
        <HomeAndLivingCategories />
        <HomeAndLivingProducts />
        <HomeAndLivingInspiration />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomeAndLiving;