import { Star, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      rating: 5,
      comment: "Absolutely love the handcrafted jewelry I purchased! The quality is exceptional and the shipping was super fast.",
      product: "Sterling Silver Necklace",
      avatar: "SM"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Los Angeles, CA",
      rating: 5,
      comment: "Amazing customer service and unique products. I've found so many one-of-a-kind items here that I can't find anywhere else.",
      product: "Ceramic Coffee Set",
      avatar: "DC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Austin, TX",
      rating: 5,
      comment: "The artisan quality is outstanding. Supporting small businesses while getting beautiful, unique items - what's not to love?",
      product: "Handwoven Scarf",
      avatar: "ER"
    },
    {
      id: 4,
      name: "Michael Johnson",
      location: "Portland, OR",
      rating: 5,
      comment: "Perfect platform for discovering new artists and makers. The variety and quality of products consistently exceeds my expectations.",
      product: "Wooden Home Decor",
      avatar: "MJ"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who love shopping with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="card-etsy p-6 group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mr-4">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="border-t pt-3">
                <p className="text-xs text-muted-foreground">
                  Purchased: <span className="font-medium">{review.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;