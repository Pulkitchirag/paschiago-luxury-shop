import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  description?: string;
  image: string;
}

const ProductCard = ({ id, name, price, description, image }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden bg-luxury-cream mb-4 aspect-[4/5]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-luxury group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-medium">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
          <p className="text-lg font-medium text-luxury-gold">{price}</p>
        </div>
      </Link>
      <div className="mt-4 flex gap-2">
        <Button asChild variant="outline" className="flex-1" size="sm">
          <Link to={`/product/${id}`}>View Details</Link>
        </Button>
        <Button variant="default" className="flex-1" size="sm">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
