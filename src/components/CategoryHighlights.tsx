import { useNavigate } from 'react-router-dom';
import homeKitchenImage from '@/assets/category-home-kitchen.jpg';
import fashionImage from '@/assets/category-fashion.jpg';
import artsCraftsImage from '@/assets/category-arts-crafts.jpg';
import techImage from '@/assets/category-tech.jpg';

const CategoryHighlights = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      title: "Home & Kitchen",
      subtitle: "Cozy essentials for every space",
      image: homeKitchenImage,
      size: "large",
      route: "/home-living"
    },
    {
      id: 2,
      title: "Fashion Finds",
      subtitle: "Unique styles that speak to you",
      image: fashionImage,
      size: "medium",
      route: "/fashion"
    },
    {
      id: 3,
      title: "Arts & Crafts",
      subtitle: "Creative supplies & handmade treasures",
      image: artsCraftsImage,
      size: "medium",
      route: "/art-crafts"
    },
    {
      id: 4,
      title: "Tech Gadgets",
      subtitle: "Smart solutions for modern life",
      image: techImage,
      size: "small",
      route: "/tech"
    },
    {
      id: 5,
      title: "Personalized Gifts",
      subtitle: "Make it meaningful",
      image: homeKitchenImage,
      size: "small",
      route: "/gifts"
    },
    {
      id: 6,
      title: "Vintage Collection",
      subtitle: "Timeless pieces with history",
      image: fashionImage,
      size: "small",
      route: "/category/vintage-retro"
    },
    {
      id: 7,
      title: "Handmade Crafts",
      subtitle: "Artisan creations",
      image: artsCraftsImage,
      size: "small",
      route: "/category/handmade-crafts"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'category-card-large md:col-span-2';
      case 'medium':
        return 'category-card-medium';
      case 'small':
        return 'category-card-small';
      default:
        return 'category-card-medium';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted, vintage, and unique items across all our favorite categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card group ${getSizeClasses(category.size)}`}
              onClick={() => navigate(category.route)}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="overlay-dark opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
              <div className="overlay-content justify-end pointer-events-none">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/90 text-sm lg:text-base">
                  {category.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;