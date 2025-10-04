import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FashionShowcase = () => {
  const showcases = [
    {
      title: "Sustainable Fashion Revolution",
      description: "Discover eco-friendly brands making a difference in fashion",
      image: "/src/assets/category-fashion.jpg",
      cta: "Shop Sustainable"
    },
    {
      title: "Artisan Jewelry Collection",
      description: "Handcrafted pieces that tell unique stories",
      image: "/src/assets/product-jewelry.jpg",
      cta: "Explore Jewelry"
    },
    {
      title: "Vintage Revival",
      description: "Timeless pieces with modern appeal",
      image: "/src/assets/product-scarf.jpg",
      cta: "Browse Vintage"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Fashion Showcase</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore curated collections and discover your next favorite piece
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={showcase.image} 
                    alt={showcase.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{showcase.title}</h3>
                    <p className="text-white/90 mb-4">{showcase.description}</p>
                    <Button variant="secondary">{showcase.cta}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FashionShowcase;