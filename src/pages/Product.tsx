import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Mock product data - in real app, this would come from API based on ID
  const product = {
    id: id,
    title: "Essential Polos",
    price: 80.00,
    originalPrice: 90.00,
    rating: 4.8,
    reviews: 234,
    description: "Elevate your everyday style with our Essential Polos, the perfect blend of comfort and sophistication. Crafted from premium, breathable fabric, these polos offer a tailored fit that's ideal for both casual outings and smart-casual settings. Designed with classic colors and subtle detailing, they bring timeless appeal to your wardrobe. Available in a range of versatile colors, they pair effortlessly with jeans, chinos, or shorts. Whether you're heading to the office or a weekend brunch, Essential Polos keep you looking sharp and feeling comfortable all day long.",
    images: [
      "/src/assets/category-fashion.jpg",
      "/src/assets/product-scarf.jpg", 
      "/src/assets/product-jewelry.jpg",
      "/src/assets/product-mug.jpg"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'blue', class: 'bg-blue-500' },
      { name: 'gray', class: 'bg-gray-500' },
      { name: 'green', class: 'bg-green-500' }
    ],
    category: "Men",
    sku: "EP001",
    inStock: true,
    freeShipping: true,
    guarantees: [
      "No-Risk Money Back Guarantee!",
      "No Hassle Refunds",
      "Secure Payments"
    ]
  };

  const relatedProducts = [
    {
      id: 1,
      title: "Solid Shirt",
      price: "₹80.00 - ₹85.00",
      image: "/src/assets/category-fashion.jpg",
      badge: "Best"
    },
    {
      id: 2,
      title: "Cream T-Shirt", 
      price: "₹60.00 - ₹65.00",
      image: "/src/assets/product-scarf.jpg",
      badge: "Sales"
    },
    {
      id: 3,
      title: "Funky Hoodie",
      price: "₹120.00 - ₹125.00", 
      image: "/src/assets/product-jewelry.jpg",
      badge: "Best"
    },
    {
      id: 4,
      title: "Princess Hoodie",
      price: "₹90.00 - ₹105.00",
      image: "/src/assets/product-mug.jpg"
    }
  ];

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const addToCart = () => {
    console.log('Adding to cart:', { id, quantity, size: selectedSize, color: selectedColor });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span className="cursor-pointer hover:text-foreground" onClick={() => navigate('/')}>Home</span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-foreground" onClick={() => navigate('/fashion')}>Men</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Essential Polos</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded border cursor-pointer hover:border-primary">
                  <img 
                    src={image} 
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Category: {product.category}</p>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-foreground">₹{product.price.toFixed(2)} - ₹{product.originalPrice.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">+ Free Shipping</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <p className="font-medium">Size:</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    className="w-12 h-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <p className="font-medium">Color:</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-8 h-8 rounded-full border-2 ${color.class} ${
                      selectedColor === color.name ? 'border-foreground' : 'border-muted'
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <p className="font-medium">Quantity:</p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border rounded">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <Button onClick={addToCart} className="flex-1">
                ADD TO CART
              </Button>
              <Button variant="outline" size="icon" onClick={toggleLike}>
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Product Details */}
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">SKU:</span> {product.sku}</p>
              <p><span className="font-medium">Category:</span> {product.category}</p>
              {product.freeShipping && <p className="text-primary font-medium">Free shipping on orders over ₹500</p>}
            </div>

            {/* Guarantees */}
            <div className="space-y-2">
              {product.guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="border rounded p-4">
              <h3 className="font-medium mb-3">Guaranteed Safe Checkout</h3>
              <div className="flex gap-2">
                <Badge variant="outline">Visa</Badge>
                <Badge variant="outline">Mastercard</Badge>
                <Badge variant="outline">PayPal</Badge>
                <Badge variant="outline">Apple Pay</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </TabsContent>
          <TabsContent value="additional" className="mt-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Material</span>
                <span>Premium Cotton Blend</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Care Instructions</span>
                <span>Machine wash cold, tumble dry low</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Origin</span>
                <span>Made in India</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">Related products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.badge && (
                      <Badge className="absolute top-3 left-3" variant={relatedProduct.badge === 'Best' ? 'default' : 'destructive'}>
                        {relatedProduct.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{relatedProduct.title}</h3>
                    <p className="text-lg font-bold text-foreground">{relatedProduct.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;