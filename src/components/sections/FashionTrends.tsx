import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FashionTrends = () => {
  const trendingItems = [
    {
      title: "Vintage Silk Scarf - Hand Painted",
      price: "$68.99",
      originalPrice: "$89.99",
      rating: 4.9,
      reviews: 167,
      image: "/src/assets/product-scarf.jpg",
      badge: "Trending",
      seller: "VintageVibes"
    },
    {
      title: "Handcrafted Silver Ring Set",
      price: "$145.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 234,
      image: "/src/assets/product-jewelry.jpg",
      badge: "Bestseller",
      seller: "ArtisanJewelry"
    },
    {
      title: "Organic Cotton Wrap Dress",
      price: "$78.99",
      originalPrice: "$98.99",
      rating: 4.7,
      reviews: 298,
      image: "/src/assets/category-fashion.jpg",
      badge: "Eco-friendly",
      seller: "SustainableStyle"
    },
    {
      title: "Bohemian Leather Crossbody Bag",
      price: "$89.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "/src/assets/product-scarf.jpg",
      badge: "New",
      seller: "BohoChic"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trending Now</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what's popular in fashion right now
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-3 left-3">{item.badge}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {item.seller}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-muted-foreground">({item.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                      )}
                    </div>
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

export default FashionTrends;