import { categories } from "@/data/mockData";
import { useState } from "react";

const CategoryScroll = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="px-4 mt-8">
      <h2 className="text-lg font-bold mb-4">What are you craving?</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setActive(active === cat.id ? null : cat.id)}
            className={`flex flex-col items-center gap-1.5 min-w-[72px] px-3 py-3 rounded-2xl transition-all duration-200 animate-fade-in ${
              active === cat.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                : "bg-card hover:bg-secondary text-card-foreground"
            }`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="text-2xl">{cat.emoji}</span>
            <span className="text-xs font-semibold whitespace-nowrap">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryScroll;
