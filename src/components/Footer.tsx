import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = {
    explore: ["Shop", "Products", "New Arrivals", "Best Sellers"],
    community: ["Forum", "Discord", "Fan Art", "Cosplay"],
    about: ["About Us", "Contact", "Shipping & Returns", "Payment Methods"],
  };

  return (
    <footer className="relative py-16 px-4 md:px-8 mt-24">
      {/* Orange Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent glow-orange"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient-orange mb-4">Naruto Universe</h3>
            <p className="text-muted-foreground text-sm">
              Your ultimate destination for everything Naruto. Join millions of fans worldwide.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Explore</h4>
            <ul className="space-y-2">
              {links.explore.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">About</h4>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-border/50" />

        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Naruto Universe. All rights reserved. Naruto is a registered trademark.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
