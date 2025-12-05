import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import episode1 from "@/assets/episode1.jpg";
import episode2 from "@/assets/episode2.jpg";

const products = [
  {
    id: 1,
    name: "Team 7 Collectible Set",
    price: 49.99,
    rating: 4.9,
    image: episode1,
  },
  {
    id: 2,
    name: "Final Battle Premium Figure",
    price: 89.99,
    rating: 5.0,
    image: episode2,
  },
  {
    id: 3,
    name: "Naruto Headband Replica",
    price: 29.99,
    rating: 4.8,
    image: episode1,
  },
  {
    id: 4,
    name: "Rasengan Light Effect",
    price: 69.99,
    rating: 4.9,
    image: episode2,
  },
];

const FeaturedEpisodes = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 animate-slide-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-orange mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">Premium Naruto merchandise</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card hover-lift overflow-hidden border-border/50 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-bold">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
                <Button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full bg-primary hover:bg-primary-glow glow-orange font-bold rounded-full transition-all hover:scale-105"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;
