import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArtAndCraftsGallery = () => {
  const artworks = [
    {
      title: "Abstract Watercolor Painting",
      price: "$125.99",
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: "/src/assets/category-arts-crafts.jpg",
      badge: "Original",
      artist: "ColorFlow Studio"
    },
    {
      title: "Handwoven Ceramic Vase",
      price: "$68.99",
      originalPrice: "$89.99",
      rating: 4.8,
      reviews: 156,
      image: "/src/assets/product-mug.jpg",
      badge: "Handmade",
      artist: "ClayCreations"
    },
    {
      title: "Digital Art Print Set",
      price: "$34.99",
      originalPrice: null,
      rating: 4.7,
      reviews: 234,
      image: "/src/assets/category-arts-crafts.jpg",
      badge: "Digital",
      artist: "PixelArt Co"
    },
    {
      title: "Embroidery Wall Art",
      price: "$78.99",
      originalPrice: "$98.99",
      rating: 4.9,
      reviews: 167,
      image: "/src/assets/product-mug.jpg",
      badge: "Trending",
      artist: "ThreadArt"
    },
    {
      title: "Wooden Sculpture - Abstract",
      price: "$289.99",
      originalPrice: null,
      rating: 4.8,
      reviews: 45,
      image: "/src/assets/category-arts-crafts.jpg",
      badge: "Premium",
      artist: "WoodWorks Studio"
    },
    {
      title: "Acrylic Painting Kit",
      price: "$45.99",
      originalPrice: "$65.99",
      rating: 4.6,
      reviews: 298,
      image: "/src/assets/product-mug.jpg",
      badge: "Kit",
      artist: "ArtSupplies Pro"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated collection of exceptional artworks and crafts
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-3 left-3">{artwork.badge}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {artwork.artist}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{artwork.rating}</span>
                    <span className="text-sm text-muted-foreground">({artwork.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{artwork.price}</span>
                      {artwork.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{artwork.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtAndCraftsGallery;