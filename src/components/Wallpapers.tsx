import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import wallpaper1 from "@/assets/wallpaper1.jpg";
import wallpaper2 from "@/assets/wallpaper2.jpg";

const products = [
  {
    id: 301,
    name: "Hokage Dreams Print",
    size: "24x36 inches",
    price: 39.99,
    image: wallpaper1,
  },
  {
    id: 302,
    name: "Akatsuki Rising Poster",
    size: "24x36 inches",
    price: 39.99,
    image: wallpaper2,
  },
  {
    id: 303,
    name: "Hokage Legacy Canvas",
    size: "30x40 inches",
    price: 59.99,
    image: wallpaper1,
  },
  {
    id: 304,
    name: "Dark Shadows Print",
    size: "24x36 inches",
    price: 39.99,
    image: wallpaper2,
  },
];

const Wallpapers = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-orange mb-4">
            Art Prints & Posters
          </h2>
          <p className="text-muted-foreground text-lg">Premium quality Naruto artwork</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card overflow-hidden border-border/50 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                  <Button
                    size="lg"
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    className="bg-primary hover:bg-primary-glow glow-orange font-bold rounded-full px-8"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{product.size}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wallpapers;
