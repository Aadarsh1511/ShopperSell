import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DIYKits = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Complete Embroidery Starter Kit",
      price: "$49.99",
      originalPrice: "$65.99",
      rating: 4.8,
      reviews: 234,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "CraftComplete",
      isLiked: false
    },
    {
      id: 2,
      title: "Macrame Plant Hanger DIY Kit",
      price: "$34.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 167,
      image: "/src/assets/product-mug.jpg",
      seller: "MacrameKit",
      isLiked: true
    },
    {
      id: 3,
      title: "Paint by Numbers - Landscape Set",
      price: "$24.99",
      originalPrice: "$32.99",
      rating: 4.6,
      reviews: 289,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "PaintKit",
      isLiked: false
    },
    {
      id: 4,
      title: "Jewelry Making Beginner Kit",
      price: "$59.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 198,
      image: "/src/assets/product-mug.jpg",
      seller: "JewelryDIY",
      isLiked: false
    }
  ];

  const toggleLike = (productId: number) => {
    console.log('Toggling like for product:', productId);
  };

  const addToCart = (productId: number) => {
    console.log('Adding to cart:', productId);
  };

  const openProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 px-6 bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">DIY Kits</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete craft kits with everything you need for your next creative project
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg" onClick={() => openProduct(product.id)}>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(product.id);
                        }}
                      >
                        <Heart className={`h-4 w-4 ${product.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2" onClick={() => openProduct(product.id)}>{product.title}</h3>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
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

export default DIYKits;