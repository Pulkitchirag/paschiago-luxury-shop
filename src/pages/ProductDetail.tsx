import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");

  const products = {
    "1": {
      name: "Signature Wool Coat",
      price: "₹24,999",
      description: "Experience timeless elegance with our Signature Wool Coat. Crafted from premium wool blend, this coat features a classic silhouette that never goes out of style. The double-breasted design and tailored fit create a sophisticated look perfect for any occasion.",
      details: [
        "Premium wool blend construction",
        "Double-breasted design with gold-tone buttons",
        "Lined interior for comfort",
        "Side pockets",
        "Dry clean only",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product1,
    },
    "2": {
      name: "Classic Turtleneck",
      price: "₹8,999",
      description: "A wardrobe essential that defines modern luxury. This Classic Turtleneck is crafted from the finest materials for everyday elegance. The sleek silhouette and comfortable fit make it perfect for layering or wearing alone.",
      details: [
        "Premium ribbed knit fabric",
        "Soft turtleneck design",
        "Fitted silhouette",
        "Long sleeves",
        "Machine washable",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product2,
    },
    "3": {
      name: "Wide-Leg Trousers",
      price: "₹12,999",
      description: "Effortless sophistication meets modern tailoring in these versatile Wide-Leg Trousers. The flowing silhouette creates an elegant line while maintaining comfort throughout the day.",
      details: [
        "Premium fabric with excellent drape",
        "High-waisted design",
        "Wide-leg silhouette",
        "Side zipper closure",
        "Machine washable",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product3,
    },
    "4": {
      name: "Cashmere Cardigan",
      price: "₹18,999",
      description: "Experience unmatched softness and warmth with this pure Cashmere Cardigan. A wardrobe essential that combines luxury with versatility.",
      details: [
        "100% pure cashmere",
        "Button-front closure",
        "Ribbed trims",
        "Two front pockets",
        "Dry clean only",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product4,
    },
    "5": {
      name: "Silk Evening Dress",
      price: "₹32,999",
      description: "Created for unforgettable moments. This Silk Evening Dress features luxurious silk that drapes beautifully, creating an elegant silhouette for special occasions.",
      details: [
        "100% pure silk",
        "V-neckline",
        "Flowing asymmetric hemline",
        "Elasticated waist",
        "Dry clean only",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product5,
    },
    "6": {
      name: "Tailored Blazer",
      price: "₹21,999",
      description: "Power meets elegance in this impeccably Tailored Blazer. The perfect statement piece for the modern professional.",
      details: [
        "Premium fabric construction",
        "Single-button closure",
        "Notched lapel",
        "Two front pockets",
        "Dry clean only",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      image: product6,
    },
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Product Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/shop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-luxury-cream aspect-[4/5]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-medium text-luxury-gold">{product.price}</p>
            </div>

            <p className="text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">Select Size</label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 border transition-luxury ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              variant="hero"
              size="lg"
              className="w-full"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            {/* Product Details */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-serif text-xl font-medium mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
