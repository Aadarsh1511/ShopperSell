import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GiftsPersonalized = () => {
  const personalizedGifts = [
    {
      title: "Custom Engraved Jewelry Box",
      price: "$78.99",
      originalPrice: "$98.99",
      rating: 4.9,
      reviews: 267,
      image: "/src/assets/product-jewelry.jpg",
      badge: "Personalized",
      seller: "CustomCrafts"
    },
    {
      title: "Monogrammed Leather Wallet",
      price: "$56.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 189,
      image: "/src/assets/category-fashion.jpg",
      badge: "Bestseller",
      seller: "LeatherWorks"
    },
    {
      title: "Custom Photo Canvas Print",
      price: "$45.99",
      originalPrice: "$65.99",
      rating: 4.7,
      reviews: 345,
      image: "/src/assets/category-arts-crafts.jpg",
      badge: "Custom",
      seller: "PhotoArt Studio"
    },
    {
      title: "Personalized Recipe Cutting Board",
      price: "$34.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "/src/assets/category-home-kitchen.jpg",
      badge: "Handmade",
      seller: "KitchenCrafters"
    }
  ];

  const features = [
    "Free personalization on all items",
    "Preview your customization before ordering",
    "High-quality engraving and printing",
    "Gift wrapping available",
    "Express processing for urgent orders"
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Personalized Gifts</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Make it special with custom engraving, monogramming, and personalization
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose Personalized?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8">Start Customizing</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalizedGifts.map((gift, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-3 w-3" />
                    </Button>
                    <Badge className="absolute top-2 left-2 text-xs">{gift.badge}</Badge>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-foreground mb-1 text-sm line-clamp-2">{gift.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">by {gift.seller}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{gift.rating}</span>
                      <span className="text-xs text-muted-foreground">({gift.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-foreground">{gift.price}</span>
                      {gift.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">{gift.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-subtle rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Gift Concierge Service</h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Can't find the perfect gift? Our experts will help you find or create something truly special
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Help Finding a Gift</Button>
            <Button variant="outline" size="lg">Request Custom Creation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsPersonalized;