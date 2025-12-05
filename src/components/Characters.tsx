import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import narutoChar from "@/assets/naruto-char.jpg";
import sasukeChar from "@/assets/sasuke-char.jpg";
import sakuraChar from "@/assets/sakura-char.jpg";
import kakashiChar from "@/assets/kakashi-char.jpg";

const products = [
  {
    id: 101,
    name: "Naruto Uzumaki Figure",
    price: 79.99,
    image: narutoChar,
  },
  {
    id: 102,
    name: "Sasuke Uchiha Figure",
    price: 79.99,
    image: sasukeChar,
  },
  {
    id: 103,
    name: "Sakura Haruno Figure",
    price: 74.99,
    image: sakuraChar,
  },
  {
    id: 104,
    name: "Kakashi Hatake Figure",
    price: 84.99,
    image: kakashiChar,
  },
];

const Characters = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-orange mb-4">
            Character Figures
          </h2>
          <p className="text-muted-foreground text-lg">Collectible shinobi figures</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card group cursor-pointer overflow-hidden border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-full aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="font-bold text-lg mb-2 relative z-10">{product.name}</h3>
                <p className="text-xl font-bold text-primary mb-3 relative z-10">${product.price}</p>
                <Button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full bg-primary hover:bg-primary-glow glow-orange font-bold rounded-full transition-all hover:scale-105 relative z-10"
                  size="sm"
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

export default Characters;
