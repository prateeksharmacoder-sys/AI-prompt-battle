import HeroSection from "@/components/HeroSection";
import CategoryScroll from "@/components/CategoryScroll";
import RestaurantSection from "@/components/RestaurantSection";
import PopularDishes from "@/components/PopularDishes";
import BottomNav from "@/components/BottomNav";
import CartSheet from "@/components/CartSheet";

const Index = () => {
  return (
    <div className="min-h-screen bg-background warm-glow">
      <header className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Good evening 👋</p>
          <h2 className="text-base font-bold">What would you like to eat?</h2>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
          🍽️
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <HeroSection />
        <CategoryScroll />
        <RestaurantSection />
        <PopularDishes />
      </main>

      <BottomNav />
      <CartSheet />
    </div>
  );
};

export default Index;
