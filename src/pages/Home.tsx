import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import heroImage from "@/assets/hero-image.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Signature Wool Coat",
      price: "₹24,999",
      description: "Timeless elegance in premium wool",
      image: product1,
    },
    {
      id: "2",
      name: "Classic Turtleneck",
      price: "₹8,999",
      description: "Essential luxury basics",
      image: product2,
    },
    {
      id: "3",
      name: "Wide-Leg Trousers",
      price: "₹12,999",
      description: "Effortless sophistication",
      image: product3,
    },
    {
      id: "4",
      name: "Cashmere Cardigan",
      price: "₹18,999",
      description: "Unmatched softness and warmth",
      image: product4,
    },
    {
      id: "5",
      name: "Silk Evening Dress",
      price: "₹32,999",
      description: "For unforgettable moments",
      image: product5,
    },
    {
      id: "6",
      name: "Tailored Blazer",
      price: "₹21,999",
      description: "Power meets elegance",
      image: product6,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury Clothing Awaits
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover timeless elegance and uncompromising quality
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Featured Collections
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Carefully curated pieces that define modern luxury
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Crafted with Excellence
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At Paschiago, we believe luxury is not just about clothing—it's about the art of living well. 
            Each piece is meticulously crafted using the finest materials and time-honored techniques.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our commitment to quality and craftsmanship ensures that every garment you wear 
            tells a story of elegance, sophistication, and timeless style.
          </p>
          <Button asChild variant="link" size="lg" className="mt-6">
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
