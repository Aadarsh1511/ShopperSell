import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoryHighlights from '@/components/CategoryHighlights';
import TrendingProducts from '@/components/TrendingProducts';
import BestSellers from '@/components/sections/BestSellers';
import SpecialOffers from '@/components/sections/SpecialOffers';
import HomeProducts from '@/components/sections/HomeProducts';
import FashionProducts from '@/components/sections/FashionProducts';
import TechProducts from '@/components/sections/TechProducts';
import ArtCraftsProducts from '@/components/sections/ArtCraftsProducts';
import GiftProducts from '@/components/sections/GiftProducts';
import FeaturedBrands from '@/components/sections/FeaturedBrands';
import CustomerReviews from '@/components/sections/CustomerReviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <CategoryHighlights />
        <TrendingProducts />
        <BestSellers />
        <SpecialOffers />
        <HomeProducts />
        <FashionProducts />
        <TechProducts />
        <ArtCraftsProducts />
        <GiftProducts />
        <FeaturedBrands />
        <CustomerReviews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;