import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartSheet = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, isCartOpen, setIsCartOpen } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background z-50 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-lg">Your Order</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-3 p-8">
            <ShoppingBag className="w-16 h-16 opacity-20" />
            <p className="font-medium">Your cart is empty</p>
            <p className="text-sm text-center">
              Browse our restaurants and add some delicious items!
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.dish.id}
                  className="flex gap-3 bg-card rounded-xl p-3"
                >
                  <img
                    src={item.dish.image}
                    alt={item.dish.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm truncate pr-2">
                        {item.dish.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.dish.restaurant}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-secondary rounded-full">
                        <button
                          onClick={() =>
                            updateQuantity(item.dish.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-bold w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.dish.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-bold text-primary text-sm">
                        ${(item.dish.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/25">
                Place Order — ${totalPrice.toFixed(2)}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSheet;
