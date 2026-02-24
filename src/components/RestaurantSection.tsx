import { restaurants } from "@/data/mockData";
import RestaurantCard from "./RestaurantCard";

const RestaurantSection = () => {
  return (
    <section className="px-4 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Featured Restaurants</h2>
        <button className="text-sm font-semibold text-primary hover:underline">
          See all
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((r, i) => (
          <RestaurantCard key={r.id} restaurant={r} index={i} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantSection;
