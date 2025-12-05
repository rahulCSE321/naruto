import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const CartButton = () => {
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <Button
            onClick={() => setIsCartOpen(true)}
            size="lg"
            className="fixed top-6 right-6 z-50 rounded-full bg-primary hover:bg-primary-glow glow-orange font-bold text-primary-foreground transition-all hover:scale-110 shadow-2xl"
        >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full bg-accent text-accent-foreground border-2 border-background animate-pulse">
                    {totalItems}
                </Badge>
            )}
        </Button>
    );
};

export default CartButton;
