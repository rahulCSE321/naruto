import Hero from "@/components/Hero";
import FeaturedEpisodes from "@/components/FeaturedEpisodes";
import Characters from "@/components/Characters";
import Villains from "@/components/Villains";
import Wallpapers from "@/components/Wallpapers";
import Footer from "@/components/Footer";
import CartButton from "@/components/CartButton";
import CartSidebar from "@/components/CartSidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CartButton />
      <CartSidebar />
      <Hero />
      <FeaturedEpisodes />
      <Characters />
      <Villains />
      <Wallpapers />
      <Footer />
    </div>
  );
};

export default Index;
