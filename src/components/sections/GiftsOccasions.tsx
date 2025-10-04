import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Gift, Star, Calendar } from 'lucide-react';

const GiftsOccasions = () => {
  const occasions = [
    {
      title: "Valentine's Day",
      description: "Romantic gifts to express your love",
      icon: Heart,
      image: "/src/assets/product-jewelry.jpg",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "Birthdays",
      description: "Celebrate another year with special gifts",
      icon: Gift,
      image: "/src/assets/category-arts-crafts.jpg",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Anniversaries",
      description: "Mark milestones with memorable presents",
      icon: Star,
      image: "/src/assets/product-jewelry.jpg",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Holidays",
      description: "Seasonal gifts for festive celebrations",
      icon: Calendar,
      image: "/src/assets/category-home-kitchen.jpg",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Occasion</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect gift for life's special moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${occasion.bgColor} rounded-full mb-4`}>
                  <occasion.icon className={`h-8 w-8 ${occasion.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{occasion.title}</h3>
                <p className="text-muted-foreground mb-6">{occasion.description}</p>
                <Button variant="outline" className="w-full">Shop Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/src/assets/product-jewelry.jpg" 
                    alt="Last Minute Gifts"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 text-white">
                      <h3 className="text-3xl font-bold mb-4">Last Minute Gifts</h3>
                      <p className="text-white/90 mb-4">Digital downloads and express shipping available</p>
                      <Button variant="secondary">Shop Quick Gifts</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="/src/assets/category-arts-crafts.jpg" 
                    alt="Gift Bundles"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-end">
                    <div className="p-8 text-white text-right">
                      <h3 className="text-3xl font-bold mb-4">Gift Bundles</h3>
                      <p className="text-white/90 mb-4">Curated collections for every taste</p>
                      <Button variant="secondary">Browse Bundles</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsOccasions;