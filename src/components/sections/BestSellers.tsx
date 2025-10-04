import { Heart, Star, ShoppingCart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import productMugImage from '@/assets/product-mug.jpg';
import productJewelryImage from '@/assets/product-jewelry.jpg';
import productScarfImage from '@/assets/product-scarf.jpg';

const BestSellers = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 101,
      title: "Bestselling Ceramic Mug Set",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 834,
      image: productMugImage,
      sold: 2400,
      shop: "Pottery Plus"
    },
    {
      id: 102,
      title: "Popular Gold Chain Necklace",
      price: 129.00,
      rating: 4.8,
      reviews: 567,
      image: productJewelryImage,
      sold: 1890,
      shop: "Jewelry Artisan"
    },
    {
      id: 103,
      title: "Top-Rated Wool Blanket",
      price: 85.50,
      rating: 4.9,
      reviews: 423,
      image: productScarfImage,
      sold: 1456,
      shop: "Cozy Home Co"
    },
    {
      id: 104,
      title: "Bestselling Travel Journal",
      price: 28.00,
      rating: 4.7,
      reviews: 689,
      image: productMugImage,
      sold: 3200,
      shop: "Paper & Pen"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Best Sellers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular items loved by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group"
            >
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image rounded-t-lg cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <button className="wishlist-heart">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  #{Math.floor(Math.random() * 10) + 1} Bestseller
                </div>
              </div>

              <div className="p-4">
                <h3 
                  className="font-medium text-foreground mb-2 line-clamp-2 leading-snug cursor-pointer hover:text-primary"
                  onClick={() => navigate(`/product/${product.id}`)}
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

                <p className="text-sm text-muted-foreground mb-2">
                  {product.shop}
                </p>

                <p className="text-xs text-green-600 mb-3 font-medium">
                  {product.sold}+ sold
                </p>
                
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;