import { Home, Search, Heart, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const BottomNav = () => {
  const { totalItems, setIsCartOpen } = useCart();

  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Search", active: false },
    { icon: Heart, label: "Favorites", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-card/90 backdrop-blur-xl border-t safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${
              item.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={item.active ? 2.5 : 2} />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        ))}

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-0.5 right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full min-w-[18px] min-h-[18px] animate-scale-in">
              {totalItems}
            </span>
          )}
          <span className="text-[10px] font-semibold">Cart</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
