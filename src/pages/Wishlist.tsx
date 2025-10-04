import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import productMugImage from '@/assets/product-mug.jpg';
import productJewelryImage from '@/assets/product-jewelry.jpg';
import productScarfImage from '@/assets/product-scarf.jpg';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      title: "Handcrafted Ceramic Coffee Mug",
      price: 24.99,
      originalPrice: 29.99,
      image: productMugImage,
      shop: "CeramicWorks Studio",
      inStock: true
    },
    {
      id: 2,
      title: "Sterling Silver Minimalist Necklace",
      price: 89.00,
      image: productJewelryImage,
      shop: "JewelCraft Co",
      inStock: true
    },
    {
      id: 3,
      title: "Handwoven Alpaca Wool Scarf",
      price: 56.50,
      image: productScarfImage,
      shop: "Mountain Weavers",
      inStock: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="flex items-center gap-2 mb-8">
          <Heart className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Your Wishlist</h1>
          <span className="text-muted-foreground">({wishlistItems.length} items)</span>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Save items you love to keep track of them</p>
            <Button>Continue Shopping</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {item.shop}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-foreground">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                      )}
                    </div>
                    {item.inStock ? (
                      <Button className="w-full" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" size="sm" disabled>
                        Out of Stock
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;