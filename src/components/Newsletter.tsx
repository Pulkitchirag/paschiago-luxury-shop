import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 luxury-gradient">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-muted-foreground mb-8">
          Be the first to know about new collections, exclusive offers, and styling tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" variant="hero" size="lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
