import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const Shop = () => {
  const products = [
    {
      id: "1",
      name: "Signature Wool Coat",
      price: "₹24,999",
      description: "Timeless elegance in premium wool blend. Perfect for the sophisticated wardrobe.",
      image: product1,
    },
    {
      id: "2",
      name: "Classic Turtleneck",
      price: "₹8,999",
      description: "Essential luxury basics crafted from the finest materials for everyday elegance.",
      image: product2,
    },
    {
      id: "3",
      name: "Wide-Leg Trousers",
      price: "₹12,999",
      description: "Effortless sophistication meets modern tailoring in these versatile trousers.",
      image: product3,
    },
    {
      id: "4",
      name: "Cashmere Cardigan",
      price: "₹18,999",
      description: "Unmatched softness and warmth in pure cashmere. A wardrobe essential.",
      image: product4,
    },
    {
      id: "5",
      name: "Silk Evening Dress",
      price: "₹32,999",
      description: "For unforgettable moments. Luxurious silk that drapes beautifully.",
      image: product5,
    },
    {
      id: "6",
      name: "Tailored Blazer",
      price: "₹21,999",
      description: "Power meets elegance in this impeccably tailored statement piece.",
      image: product6,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Our Collection</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover pieces that define modern luxury and timeless elegance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
