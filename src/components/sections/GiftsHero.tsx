import { Button } from '@/components/ui/button';

const GiftsHero = () => {
  return (
    <section className="relative h-[60vh] bg-gradient-subtle flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/src/assets/product-jewelry.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Find the <span className="text-gradient">Perfect Gift</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover unique, handmade gifts for every occasion and person in your life. Make every moment special.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3">Shop by Occasion</Button>
          <Button variant="outline" size="lg" className="px-8 py-3">Personalized Gifts</Button>
        </div>
      </div>
    </section>
  );
};

export default GiftsHero;