import { Plus, Star } from "lucide-react";
import { Dish } from "@/data/mockData";
import { useCart } from "@/context/CartContext";

interface Props {
  dish: Dish;
  index: number;
}

const DishCard = ({ dish, index }: Props) => {
  const { addToCart } = useCart();

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={() => addToCart(dish)}
          className="absolute bottom-3 right-3 bg-primary text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
          aria-label={`Add ${dish.name} to cart`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-card-foreground mb-0.5">{dish.name}</h3>
        <p className="text-muted-foreground text-xs mb-2">{dish.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-primary font-extrabold text-lg">
            ${dish.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Star className="w-3.5 h-3.5 fill-rating text-rating" />
            <span className="font-semibold">{dish.rating}</span>
            <span className="text-muted-foreground/60">• {dish.restaurant}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
