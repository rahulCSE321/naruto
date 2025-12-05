import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import itachiVillain from "@/assets/itachi-villain.jpg";
import painVillain from "@/assets/pain-villain.jpg";

const products = [
  {
    id: 201,
    name: "Itachi Uchiha Statue",
    price: 149.99,
    category: "Premium Collectible",
    image: itachiVillain,
  },
  {
    id: 202,
    name: "Pain (Nagato) Figure Set",
    price: 199.99,
    category: "Limited Edition",
    image: painVillain,
  },
];

const Villains = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Dark Red Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>

      {/* Akatsuki Cloud Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl text-accent">☁</div>
        <div className="absolute bottom-20 right-20 text-9xl text-accent">☁</div>
        <div className="absolute top-1/2 left-1/3 text-7xl text-accent">☁</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-bold">
            AKATSUKI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Akatsuki Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">Exclusive villain merchandise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card border-accent/30 overflow-hidden group cursor-pointer hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Red Glow Effect */}
                <div className="absolute inset-0 glow-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 relative bg-gradient-to-b from-accent/10 to-transparent">
                <h3 className="font-bold text-2xl mb-3 text-foreground">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    {product.category}
                  </Badge>
                  <span className="text-2xl font-bold text-accent">${product.price}</span>
                </div>
                <Button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="w-full bg-accent hover:bg-accent/90 glow-red font-bold text-lg rounded-full transition-all hover:scale-105"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
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

export default Villains;
