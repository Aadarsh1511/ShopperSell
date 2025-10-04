import { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import productMugImage from '@/assets/product-mug.jpg';
import categoryHomeImage from '@/assets/category-home-kitchen.jpg';

const HomeProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      title: "Handwoven Cotton Throw Blanket",
      price: 68.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 94,
      image: categoryHomeImage,
      isLiked: false,
      shop: "CozyHome Textiles"
    },
    {
      id: 2,
      title: "Ceramic Dinnerware Set (16-piece)",
      price: 124.50,
      rating: 4.9,
      reviews: 167,
      image: productMugImage,
      isLiked: true,
      shop: "Artisan Pottery"
    },
    {
      id: 3,
      title: "Bamboo Kitchen Utensil Set",
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 203,
      image: categoryHomeImage,
      isLiked: false,
      shop: "Eco Kitchen"
    },
    {
      id: 4,
      title: "Macrame Wall Hanging",
      price: 45.00,
      rating: 4.6,
      reviews: 89,
      image: productMugImage,
      isLiked: false,
      shop: "Fiber Arts Studio"
    }
  ];

  const toggleLike = (productId: number) => {
    console.log('Toggling like for product:', productId);
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Home & Living Essentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your space with handcrafted home decor and essentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
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
                    <Heart className={`h-4 w-4 ${product.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 
                    className="font-semibold text-foreground mb-2 line-clamp-2 cursor-pointer hover:text-primary"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.shop}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
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

export default HomeProducts;