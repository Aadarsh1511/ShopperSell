import { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import productMugImage from '@/assets/product-mug.jpg';
import productJewelryImage from '@/assets/product-jewelry.jpg';
import productScarfImage from '@/assets/product-scarf.jpg';

const TrendingProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  
  const products = [
    {
      id: 1,
      title: "Handcrafted Ceramic Coffee Mug",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 127,
      image: productMugImage,
      isLiked: false,
      shop: "CeramicWorks Studio"
    },
    {
      id: 2,
      title: "Sterling Silver Minimalist Necklace",
      price: 89.00,
      rating: 4.9,
      reviews: 203,
      image: productJewelryImage,
      isLiked: true,
      shop: "JewelCraft Co"
    },
    {
      id: 3,
      title: "Handwoven Alpaca Wool Scarf",
      price: 56.50,
      rating: 4.7,
      reviews: 89,
      image: productScarfImage,
      isLiked: false,
      shop: "Mountain Weavers"
    },
    {
      id: 4,
      title: "Vintage Leather Journal",
      price: 42.00,
      rating: 4.6,
      reviews: 156,
      image: productMugImage,
      isLiked: false,
      shop: "Heritage Crafts"
    },
    {
      id: 5,
      title: "Hand-Painted Plant Pot Set",
      price: 35.99,
      originalPrice: 45.99,
      rating: 4.8,
      reviews: 94,
      image: productJewelryImage,
      isLiked: true,
      shop: "Garden Artisan"
    },
    {
      id: 6,
      title: "Artisan Soap Collection",
      price: 28.00,
      rating: 4.9,
      reviews: 167,
      image: productScarfImage,
      isLiked: false,
      shop: "Natural Scents"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('products-container');
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const toggleLike = (productId: number) => {
    // Handle wishlist toggle
    console.log('Toggling like for product:', productId);
  };

  const addToCart = (productId: number) => {
    console.log('Adding to cart:', productId);
  };

  const viewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Trending Now
            </h2>
            <p className="text-muted-foreground">
              Discover what shoppers are loving this week
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          id="products-container"
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 product-card group"
            >
              <div className="relative mb-4 cursor-pointer" onClick={() => viewProduct(product.id)}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image rounded-t-lg"
                />
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`wishlist-heart ${product.isLiked ? 'opacity-100' : ''}`}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      product.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              <div className="p-4 pt-0">
                <h3 
                  className="font-medium text-foreground mb-2 line-clamp-2 leading-snug cursor-pointer hover:text-primary"
                  onClick={() => viewProduct(product.id)}
                >
                  {product.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {product.shop}
                </p>
                
                <Button 
                  className="w-full" 
                  size="sm"
                  onClick={() => addToCart(product.id)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;