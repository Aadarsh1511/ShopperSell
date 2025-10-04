import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const PaintingsPrints = () => {
  const products = [
    {
      id: 1,
      title: "Abstract Canvas Art - Ocean Blue",
      price: "$159.99",
      originalPrice: "$199.99",
      rating: 4.9,
      reviews: 87,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "ArtistStudio",
      isLiked: false
    },
    {
      id: 2,
      title: "Vintage Botanical Print Set",
      price: "$79.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image: "/src/assets/product-mug.jpg",
      seller: "VintageArt",
      isLiked: true
    },
    {
      id: 3,
      title: "Modern Geometric Painting",
      price: "$229.99",
      originalPrice: "$289.99",
      rating: 4.8,
      reviews: 134,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "ModernCanvas",
      isLiked: false
    },
    {
      id: 4,
      title: "Watercolor Landscape Print",
      price: "$49.99",
      originalPrice: null,
      rating: 4.6,
      reviews: 203,
      image: "/src/assets/product-mug.jpg",
      seller: "WatercolorWorks",
      isLiked: false
    },
    {
      id: 5,
      title: "Oil Painting - Still Life",
      price: "$399.99",
      originalPrice: "$499.99",
      rating: 5.0,
      reviews: 45,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "ClassicArt",
      isLiked: false
    },
    {
      id: 6,
      title: "Digital Art Print - Cityscape",
      price: "$35.99",
      originalPrice: null,
      rating: 4.5,
      reviews: 298,
      image: "/src/assets/product-mug.jpg",
      seller: "DigitalDesigns",
      isLiked: false
    },
    {
      id: 7,
      title: "Acrylic Painting - Sunset",
      price: "$189.99",
      originalPrice: "$229.99",
      rating: 4.8,
      reviews: 76,
      image: "/src/assets/category-arts-crafts.jpg",
      seller: "SunsetStudios",
      isLiked: false
    },
    {
      id: 8,
      title: "Gallery Wall Art Set - 6 Pieces",
      price: "$129.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 167,
      image: "/src/assets/product-mug.jpg",
      seller: "WallArtCo",
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
        <section className="py-12 px-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Paintings & Prints</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover unique artworks, original paintings, and beautiful prints for your space
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

export default PaintingsPrints;