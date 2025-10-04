import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="font-semibold text-primary text-xl">
          ₹{product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link to={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
