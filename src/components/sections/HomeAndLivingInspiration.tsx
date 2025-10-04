import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomeAndLivingInspiration = () => {
  const inspirations = [
    {
      title: "Cozy Reading Nooks",
      description: "Create the perfect corner for your daily reading ritual",
      image: "/src/assets/category-home-kitchen.jpg",
      tips: "5 styling tips"
    },
    {
      title: "Minimalist Kitchen Design",
      description: "Clean lines and functional beauty for modern homes",
      image: "/src/assets/product-mug.jpg",
      tips: "Kitchen essentials guide"
    },
    {
      title: "Boho Bedroom Vibes",
      description: "Warm textures and natural elements for relaxation",
      image: "/src/assets/category-home-kitchen.jpg",
      tips: "Color palette ideas"
    },
    {
      title: "Small Space Solutions",
      description: "Maximize every inch with clever storage and design",
      image: "/src/assets/product-mug.jpg",
      tips: "Space-saving hacks"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Design Inspiration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get inspired by real homes and discover styling tips from our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inspirations.map((inspiration, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={inspiration.image} 
                      alt={inspiration.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{inspiration.title}</h3>
                    <p className="text-muted-foreground mb-4">{inspiration.description}</p>
                    <p className="text-sm text-primary font-medium mb-4">{inspiration.tips}</p>
                    <Button variant="outline" className="self-start">Get Inspired</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Join Our Home & Living Community</h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Share your home transformations, get styling advice, and connect with fellow home enthusiasts
          </p>
          <Button size="lg">Join Community</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAndLivingInspiration;