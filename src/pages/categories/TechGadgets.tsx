import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const TechGadgets = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Charging Pad - Fast Charge",
      price: "$39.99",
      originalPrice: "$59.99",
      rating: 4.8,
      reviews: 342,
      image: "/src/assets/category-tech.jpg",
      badge: "Fast Charge",
      seller: "TechPlus",
      isLiked: false
    },
    {
      id: 2,
      title: "Bluetooth Earbuds - Noise Cancel",
      price: "$149.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 567,
      image: "/src/assets/category-tech.jpg",
      badge: "Bestseller",
      seller: "AudioTech",
      isLiked: true
    },
    {
      id: 3,
      title: "Smart Watch - Fitness Tracker",
      price: "$199.99",
      originalPrice: "$249.99",
      rating: 4.7,
      reviews: 234,
      image: "/src/assets/category-tech.jpg",
      badge: "Health",
      seller: "WearableTech",
      isLiked: false
    },
    {
      id: 4,
      title: "Portable Power Bank - 20000mAh",
      price: "$49.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 456,
      image: "/src/assets/category-tech.jpg",
      badge: "High Capacity",
      seller: "PowerCore",
      isLiked: false
    },
    {
      id: 5,
      title: "USB-C Hub - 7-in-1 Adapter",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 189,
      image: "/src/assets/category-tech.jpg",
      badge: "Connectivity",
      seller: "HubMaster",
      isLiked: false
    },
    {
      id: 6,
      title: "Wireless Mouse - Gaming RGB",
      price: "$69.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 298,
      image: "/src/assets/category-tech.jpg",
      badge: "Gaming",
      seller: "GameGear",
      isLiked: false
    },
    {
      id: 7,
      title: "Phone Stand - Adjustable Aluminum",
      price: "$24.99",
      originalPrice: "$34.99",
      rating: 4.5,
      reviews: 367,
      image: "/src/assets/category-tech.jpg",
      badge: "Ergonomic",
      seller: "StandPro",
      isLiked: false
    },
    {
      id: 8,
      title: "Webcam HD 1080p - Auto Focus",
      price: "$89.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 123,
      image: "/src/assets/category-tech.jpg",
      badge: "HD Quality",
      seller: "CamTech",
      isLiked: false
    }
  ];

  const toggleLike = (productId: number) => {
    console.log('Toggling like for product:', productId);
  };

  const addToCart = (productId: number) => {
    console.log('Adding to cart:', productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 px-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tech Gadgets</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the latest in technology and innovative gadgets for your digital lifestyle
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
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
                        onClick={() => toggleLike(product.id)}
                      >
                        <Heart className={`h-4 w-4 ${product.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
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
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <Button 
                        className="w-full" 
                        size="sm"
                        onClick={() => addToCart(product.id)}
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
      </main>
      <Footer />
    </div>
  );
};

export default TechGadgets;