import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const WomensFashion = () => {
  const products = [
    {
      id: 1,
      title: "Floral Summer Dress - Blue",
      price: "$79.99",
      originalPrice: "$99.99",
      rating: 4.8,
      reviews: 342,
      image: "/src/assets/category-fashion.jpg",
      seller: "StyleBoutique",
      isLiked: false
    },
    {
      id: 2,
      title: "Casual Blouse - White Cotton",
      price: "$39.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image: "/src/assets/product-scarf.jpg",
      seller: "ComfortWear",
      isLiked: true
    },
    {
      id: 3,
      title: "High Waisted Jeans - Dark Wash",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.9,
      reviews: 234,
      image: "/src/assets/category-fashion.jpg",
      seller: "DenimCo",
      isLiked: false
    },
    {
      id: 4,
      title: "Knit Cardigan - Cream",
      price: "$65.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 189,
      image: "/src/assets/product-scarf.jpg",
      seller: "CozyKnits",
      isLiked: false
    },
    {
      id: 5,
      title: "Midi Skirt - Pleated Navy",
      price: "$49.99",
      originalPrice: "$69.99",
      rating: 4.5,
      reviews: 167,
      image: "/src/assets/category-fashion.jpg",
      seller: "ElegantStyle",
      isLiked: false
    },
    {
      id: 6,
      title: "Silk Scarf - Floral Print",
      price: "$29.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 298,
      image: "/src/assets/product-scarf.jpg",
      seller: "LuxAccessories",
      isLiked: false
    },
    {
      id: 7,
      title: "Blazer - Professional Black",
      price: "$129.99",
      originalPrice: "$159.99",
      rating: 4.7,
      reviews: 123,
      image: "/src/assets/category-fashion.jpg",
      seller: "WorkWear",
      isLiked: false
    },
    {
      id: 8,
      title: "Leather Handbag - Brown",
      price: "$199.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/src/assets/product-scarf.jpg",
      seller: "LeatherCraft",
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
        <section className="py-12 px-6 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Women's Fashion</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the latest trends in women's clothing and accessories
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

export default WomensFashion;