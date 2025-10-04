import Header from '@/components/Header';
import ArtAndCraftsHero from '@/components/sections/ArtAndCraftsHero';
import ArtAndCraftsCategories from '@/components/sections/ArtAndCraftsCategories';
import ArtAndCraftsGallery from '@/components/sections/ArtAndCraftsGallery';
import ArtAndCraftsWorkshops from '@/components/sections/ArtAndCraftsWorkshops';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const ArtAndCrafts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArtAndCraftsHero />
        <ArtAndCraftsCategories />
        <ArtAndCraftsGallery />
        <ArtAndCraftsWorkshops />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ArtAndCrafts;