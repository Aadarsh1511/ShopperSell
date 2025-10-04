import { Clock, Percent, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import productMugImage from '@/assets/product-mug.jpg';
import productJewelryImage from '@/assets/product-jewelry.jpg';

const SpecialOffers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: "Flash Sale: 40% Off Ceramics",
      description: "Limited time offer on handcrafted pottery and ceramics",
      discount: "40% OFF",
      timeLeft: "2 hours left",
      image: productMugImage,
      originalPrice: 59.99,
      salePrice: 35.99,
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free Jewelry",
      description: "Mix and match from our jewelry collection",
      discount: "33% OFF",
      timeLeft: "Today only",
      image: productJewelryImage,
      originalPrice: 89.99,
      salePrice: 59.99,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Percent className="h-8 w-8 text-destructive" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Special Offers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these limited-time deals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="card-etsy overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${offer.color} text-white px-3 py-1 rounded-full font-bold text-sm`}>
                    {offer.discount}
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium text-destructive">
                      {offer.timeLeft}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold text-foreground">
                      ${offer.salePrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${offer.originalPrice}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full btn-primary"
                    onClick={() => navigate('/categories/handmade-crafts')}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;