import { Star, Clock, Truck } from "lucide-react";
import { Restaurant } from "@/data/mockData";

interface Props {
  restaurant: Restaurant;
  index: number;
}

const RestaurantCard = ({ restaurant, index }: Props) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-40">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {restaurant.featured && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
        {restaurant.deliveryFee === "Free" && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            Free Delivery
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-card-foreground">{restaurant.name}</h3>
          <div className="flex items-center gap-1 bg-rating/10 text-rating px-2 py-0.5 rounded-full">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold">{restaurant.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {restaurant.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" />
            {restaurant.deliveryFee}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
