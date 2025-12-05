import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Card } from '@/components/ui/card';

const CartSidebar = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-background/95 backdrop-blur-xl border-l border-primary/30 z-50 shadow-2xl animate-slide-in-right overflow-hidden">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-primary/30 bg-gradient-to-r from-primary/10 to-transparent">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-bold text-gradient-orange">Shopping Cart</h2>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsCartOpen(false)}
                                className="hover:bg-primary/20 rounded-full"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-4" />
                                <p className="text-lg text-muted-foreground">Your cart is empty</p>
                                <p className="text-sm text-muted-foreground/70 mt-2">Add some awesome Naruto products!</p>
                            </div>
                        ) : (
                            cartItems.map((item) => (
                                <Card key={item.id} className="glass-card p-4 border-border/50 hover-lift">
                                    <div className="flex gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                            <p className="text-primary font-bold text-lg">${item.price.toFixed(2)}</p>

                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="flex items-center gap-2 bg-secondary/50 rounded-full p-1">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-7 w-7 rounded-full hover:bg-primary/20"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="h-7 w-7 rounded-full hover:bg-primary/20"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>

                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-8 w-8 rounded-full hover:bg-accent/20 text-accent"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="p-6 border-t border-primary/30 bg-gradient-to-t from-primary/10 to-transparent">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-lg font-semibold">Total:</span>
                                <span className="text-2xl font-bold text-gradient-orange">${totalPrice.toFixed(2)}</span>
                            </div>
                            <Button
                                size="lg"
                                className="w-full bg-primary hover:bg-primary-glow glow-orange font-bold text-lg rounded-full transition-all hover:scale-105"
                            >
                                Checkout
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CartSidebar;
