import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const TechProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const products = [
    {
      id: 201,
      title: "Wireless Charging Stand - Bamboo",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 342,
      image: "/src/assets/category-tech.jpg",
      badge: "Eco-friendly",
      seller: "GreenTech Co"
    },
    {
      id: 202,
      title: "Bluetooth Mechanical Keyboard",
      price: 89.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      image: "/src/assets/category-tech.jpg",
      badge: "Bestseller",
      seller: "KeyCraft"
    },
    {
      id: 203,
      title: "Smart Desk Organizer LED",
      price: 56.99,
      originalPrice: 78.99,
      rating: 4.7,
      reviews: 234,
      image: "/src/assets/category-tech.jpg",
      badge: "Smart",
      seller: "DeskTech"
    },
    {
      id: 204,
      title: "Noise Cancelling Earbuds",
      price: 129.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 189,
      image: "/src/assets/category-tech.jpg",
      badge: "Premium",
      seller: "AudioMax"
    },
    {
      id: 205,
      title: "Phone Camera Lens Kit",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.8,
      reviews: 567,
      image: "/src/assets/category-tech.jpg",
      badge: "Photography",
      seller: "LensCreators"
    },
    {
      id: 206,
      title: "Portable SSD Drive - 1TB",
      price: 78.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 234,
      image: "/src/assets/category-tech.jpg",
      badge: "Storage",
      seller: "DataVault"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Tech</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover innovative gadgets and accessories from tech creators
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg" onClick={() => navigate(`/product/${product.id}`)}>
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
                  <h3 
                    className="font-semibold text-foreground mb-2 line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.seller}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image
                    })}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechProducts;