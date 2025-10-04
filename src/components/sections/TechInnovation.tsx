import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Cpu } from 'lucide-react';

const TechInnovation = () => {
  const innovations = [
    {
      title: "Sustainable Tech",
      description: "Eco-friendly gadgets made from recycled materials and sustainable processes",
      icon: Shield,
      image: "/src/assets/category-tech.jpg",
      features: ["Solar powered", "Recycled materials", "Carbon neutral"]
    },
    {
      title: "AI-Powered Devices",
      description: "Smart gadgets with artificial intelligence for enhanced user experience",
      icon: Cpu,
      image: "/src/assets/category-tech.jpg",
      features: ["Voice control", "Smart learning", "Predictive features"]
    },
    {
      title: "Fast Charging Tech",
      description: "Revolutionary charging solutions for all your devices",
      icon: Zap,
      image: "/src/assets/category-tech.jpg",
      features: ["Ultra-fast charging", "Wireless capability", "Universal compatibility"]
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tech Innovation Hub</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the future of technology with cutting-edge innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <innovation.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground mb-6">{innovation.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {innovation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full">Explore Products</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Join the Tech Revolution</h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Stay updated with the latest tech trends and be the first to discover innovative products
          </p>
          <Button size="lg">Get Tech Updates</Button>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;