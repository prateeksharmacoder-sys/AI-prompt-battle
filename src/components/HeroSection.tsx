import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="relative overflow-hidden rounded-2xl mx-4 mt-4">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative z-10 px-6 py-12 md:px-12 md:py-20 max-w-xl">
        <div className="flex items-center gap-2 text-primary-foreground/80 mb-4 animate-fade-in">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Delivering to your area</span>
        </div>

        <h1
          className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-3"
          style={{ animationDelay: "0.1s" }}
        >
          Delicious food,
          <br />
          <span className="text-gradient">delivered fast</span>
        </h1>

        <p
          className="text-primary-foreground/70 text-sm md:text-base mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Order from the best local restaurants with easy, on-demand delivery.
        </p>

        <div
          className="relative animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for restaurants or dishes..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card text-card-foreground placeholder:text-muted-foreground border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
