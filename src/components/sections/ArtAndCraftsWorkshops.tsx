import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock } from 'lucide-react';

const ArtAndCraftsWorkshops = () => {
  const workshops = [
    {
      title: "Watercolor Landscape Painting",
      instructor: "Sarah Chen",
      date: "March 15, 2024",
      duration: "3 hours",
      participants: "8-12 people",
      price: "$85",
      image: "/src/assets/category-arts-crafts.jpg",
      level: "Beginner"
    },
    {
      title: "Pottery Wheel Basics",
      instructor: "Miguel Rodriguez",
      date: "March 20, 2024",
      duration: "2.5 hours",
      participants: "6-10 people",
      price: "$95",
      image: "/src/assets/product-mug.jpg",
      level: "All levels"
    },
    {
      title: "Digital Illustration Workshop",
      instructor: "Alex Kim",
      date: "March 25, 2024",
      duration: "4 hours",
      participants: "5-8 people",
      price: "$120",
      image: "/src/assets/category-arts-crafts.jpg",
      level: "Intermediate"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Creative Workshops</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from talented artists and enhance your creative skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                    {workshop.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-4">with {workshop.instructor}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{workshop.participants}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{workshop.price}</span>
                    <Button>Book Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">View All Workshops</Button>
        </div>
      </div>
    </section>
  );
};

export default ArtAndCraftsWorkshops;