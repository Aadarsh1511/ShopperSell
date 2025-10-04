import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup');
  };

  return (
    <section className="py-16 bg-accent-light">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get updates on new arrivals, exclusive offers, and creative inspiration 
              delivered straight to your inbox. Join our community of makers and shoppers!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-background border-border focus:border-accent h-12"
              required
            />
            <Button 
              type="submit" 
              className="btn-accent h-12 px-8 font-medium"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;