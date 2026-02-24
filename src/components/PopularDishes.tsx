import { popularDishes } from "@/data/mockData";
import DishCard from "./DishCard";

const PopularDishes = () => {
  return (
    <section className="px-4 mt-8 pb-28">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Popular Right Now 🔥</h2>
        <button className="text-sm font-semibold text-primary hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularDishes.map((dish, i) => (
          <DishCard key={dish.id} dish={dish} index={i} />
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
