import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeAndLivingProducts = () => {
  const products = [
    {
      title: "Handwoven Macrame Wall Hanging",
      price: "$45.99",
      originalPrice: "$65.99",
      rating: 4.8,
      reviews: 234,
      image: "/src/assets/product-mug.jpg",
      badge: "Bestseller",
      seller: "BohoHomeCrafts"
    },
    {
      title: "Ceramic Dinnerware Set - 16 Pieces",
      price: "$89.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 456,
      image: "/src/assets/category-home-kitchen.jpg",
      badge: "New",
      seller: "CeramicStudio"
    },
    {
      title: "Minimalist Wood Coffee Table",
      price: "$299.99",
      originalPrice: "$399.99",
      rating: 4.7,
      reviews: 123,
      image: "/src/assets/product-mug.jpg",
      badge: "Sale",
      seller: "ModernWoodworks"
    },
    {
      title: "Vintage Brass Pendant Light",
      price: "$156.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: "/src/assets/category-home-kitchen.jpg",
      badge: "Featured",
      seller: "VintageDecorCo"
    },
    {
      title: "Organic Cotton Throw Pillows Set",
      price: "$34.99",
      originalPrice: "$49.99",
      rating: 4.8,
      reviews: 567,
      image: "/src/assets/product-mug.jpg",
      badge: "Eco-friendly",
      seller: "NaturalHome"
    },
    {
      title: "Rustic Wooden Floating Shelves",
      price: "$78.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 234,
      image: "/src/assets/category-home-kitchen.jpg",
      badge: "Handmade",
      seller: "RusticCrafters"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover unique home essentials handpicked by our curators
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-3 left-3">{product.badge}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.seller}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAndLivingProducts;