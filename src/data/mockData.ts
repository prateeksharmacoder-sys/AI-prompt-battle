export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  featured?: boolean;
}

export interface Dish {
  id: string;
  name: string;
  restaurant: string;
  image: string;
  price: number;
  rating: number;
  description: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export const categories: Category[] = [
  { id: "1", name: "Pizza", emoji: "🍕" },
  { id: "2", name: "Burgers", emoji: "🍔" },
  { id: "3", name: "Sushi", emoji: "🍣" },
  { id: "4", name: "Salads", emoji: "🥗" },
  { id: "5", name: "Desserts", emoji: "🍰" },
  { id: "6", name: "Indian", emoji: "🍛" },
  { id: "7", name: "Mexican", emoji: "🌮" },
  { id: "8", name: "Chinese", emoji: "🥡" },
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Napoli",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    featured: true,
  },
  {
    id: "2",
    name: "Sakura Garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: "$2.99",
    featured: true,
  },
  {
    id: "3",
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "35-45 min",
    deliveryFee: "$1.99",
  },
  {
    id: "4",
    name: "Green Bowl",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop",
    cuisine: "Healthy",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "Free",
    featured: true,
  },
  {
    id: "5",
    name: "Taco Loco",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    cuisine: "Mexican",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.49",
  },
  {
    id: "6",
    name: "Dragon Palace",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop",
    cuisine: "Chinese",
    rating: 4.4,
    deliveryTime: "25-40 min",
    deliveryFee: "$2.49",
  },
];

export const popularDishes: Dish[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    restaurant: "Bella Napoli",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=400&fit=crop",
    price: 14.99,
    rating: 4.9,
    description: "Fresh mozzarella, tomato sauce, basil",
  },
  {
    id: "2",
    name: "Dragon Roll",
    restaurant: "Sakura Garden",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
    price: 16.99,
    rating: 4.8,
    description: "Shrimp tempura, avocado, eel sauce",
  },
  {
    id: "3",
    name: "Buddha Bowl",
    restaurant: "Green Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    price: 12.99,
    rating: 4.7,
    description: "Quinoa, avocado, chickpeas, tahini",
  },
  {
    id: "4",
    name: "Butter Chicken",
    restaurant: "Spice Route",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=400&fit=crop",
    price: 15.99,
    rating: 4.8,
    description: "Tender chicken in creamy tomato sauce",
  },
  {
    id: "5",
    name: "Smash Burger",
    restaurant: "Taco Loco",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
    price: 11.99,
    rating: 4.6,
    description: "Double patty, cheddar, special sauce",
  },
  {
    id: "6",
    name: "Kung Pao Chicken",
    restaurant: "Dragon Palace",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=400&fit=crop",
    price: 13.99,
    rating: 4.5,
    description: "Spicy chicken, peanuts, vegetables",
  },
];
