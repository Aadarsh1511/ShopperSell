import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeAndLivingCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Living Room",
      description: "Sofas, chairs, coffee tables & décor",
      image: "/src/assets/category-home-kitchen.jpg",
      itemCount: "2,450+ items",
      slug: "living-room"
    },
    {
      title: "Kitchen & Dining",
      description: "Cookware, tableware & storage",
      image: "/src/assets/product-mug.jpg",
      itemCount: "1,890+ items",
      slug: "kitchen"
    },
    {
      title: "Bedroom",
      description: "Bedding, lighting & furniture",
      image: "/src/assets/category-home-kitchen.jpg",
      itemCount: "3,200+ items",
      slug: "bedroom"
    },
    {
      title: "Bathroom",
      description: "Towels, storage & accessories",
      image: "/src/assets/product-mug.jpg",
      itemCount: "980+ items",
      slug: "bathroom"
    },
    {
      title: "Garden & Outdoor",
      description: "Planters, furniture & décor",
      image: "/src/assets/category-home-kitchen.jpg",
      itemCount: "1,560+ items",
      slug: "garden-outdoor"
    },
    {
      title: "Storage & Organization",
      description: "Baskets, shelving & containers",
      image: "/src/assets/product-mug.jpg",
      itemCount: "2,100+ items",
      slug: "storage-organization"
    }
  ];

  const addToCart = (categoryTitle: string) => {
    console.log('Adding category to cart:', categoryTitle);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Room</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find everything you need to create your perfect home, room by room
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

export default HomeAndLivingCategories;