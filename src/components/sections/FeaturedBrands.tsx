import { Star } from 'lucide-react';

const FeaturedBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Artisan Collective",
      description: "Handcrafted goods from independent makers",
      rating: 4.9,
      reviews: 2340,
      logo: "AC",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Heritage Crafts",
      description: "Traditional techniques, modern designs",
      rating: 4.8,
      reviews: 1890,
      logo: "HC",
      color: "bg-emerald-500"
    },
    {
      id: 3,
      name: "Modern Makers",
      description: "Contemporary art meets functionality",
      rating: 4.7,
      reviews: 1456,
      logo: "MM",
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "Eco Studio",
      description: "Sustainable and eco-friendly products",
      rating: 4.9,
      reviews: 2100,
      logo: "ES",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional creators and their unique collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="card-etsy p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${brand.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                {brand.logo}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {brand.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {brand.description}
              </p>
              
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">{brand.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({brand.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;