import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FashionCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Women's Fashion",
      description: "Dresses, tops, bottoms & accessories",
      image: "/src/assets/category-fashion.jpg",
      itemCount: "5,670+ items",
      slug: "womens-fashion"
    },
    {
      title: "Men's Fashion",
      description: "Shirts, pants, jackets & accessories",
      image: "/src/assets/product-scarf.jpg",
      itemCount: "2,890+ items",
      slug: "mens-fashion"
    },
    {
      title: "Vintage & Retro",
      description: "Curated vintage pieces & inspired designs",
      image: "/src/assets/category-fashion.jpg",
      itemCount: "1,450+ items",
      slug: "vintage-retro"
    },
    {
      title: "Jewelry & Accessories",
      description: "Handmade jewelry, bags & scarves",
      image: "/src/assets/product-jewelry.jpg",
      itemCount: "3,200+ items",
      slug: "jewelry-accessories"
    },
    {
      title: "Sustainable Fashion",
      description: "Eco-friendly & ethically made clothing",
      image: "/src/assets/product-scarf.jpg",
      itemCount: "980+ items",
      slug: "sustainable-fashion"
    },
    {
      title: "Plus Size",
      description: "Beautiful clothing for every body",
      image: "/src/assets/category-fashion.jpg",
      itemCount: "1,560+ items",
      slug: "plus-size"
    }
  ];

  const addToCart = (categoryTitle: string) => {
    console.log('Adding category to cart:', categoryTitle);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Fashion Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your perfect style across our curated fashion collections
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div 
                  className="relative overflow-hidden rounded-t-lg"
                  onClick={() => navigate(`/category/${category.slug}`)}
                >
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-3">{category.description}</p>
                  <p className="text-sm text-primary font-medium mb-4">{category.itemCount}</p>
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => addToCart(category.title)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Shop Category
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

export default FashionCategories;