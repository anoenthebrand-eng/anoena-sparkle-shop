import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 hover-lift">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg bg-background/90 hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">
          {category}
        </p>
        <h3 className="font-medium text-foreground mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">
            AED {price.toFixed(2)}
          </span>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <ShoppingBag className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
