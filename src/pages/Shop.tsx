import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import smartHomeCollection from "@/assets/smart-home-collection.jpg";
import portableTechCollection from "@/assets/portable-tech-collection.jpg";
import chargingCollection from "@/assets/charging-collection.jpg";
import audioCollection from "@/assets/audio-collection.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Smart Home", "Portable Tech", "Charging & Power", "Audio & Sound"];

  const products = [
    {
      id: "1",
      name: "Smart LED Planter",
      price: 89,
      image: smartHomeCollection,
      category: "Smart Home",
    },
    {
      id: "2",
      name: "WiFi Smart Plug",
      price: 25,
      image: smartHomeCollection,
      category: "Smart Home",
    },
    {
      id: "3",
      name: "Smart Desk Lamp",
      price: 65,
      image: smartHomeCollection,
      category: "Smart Home",
    },
    {
      id: "4",
      name: "Portable Air Pump Pro",
      price: 45,
      image: portableTechCollection,
      category: "Portable Tech",
    },
    {
      id: "5",
      name: "Mini Handheld Fan",
      price: 18,
      image: portableTechCollection,
      category: "Portable Tech",
    },
    {
      id: "6",
      name: "Portable Phone Stand",
      price: 22,
      image: portableTechCollection,
      category: "Portable Tech",
    },
    {
      id: "7",
      name: "Fast Charging Kit",
      price: 35,
      image: chargingCollection,
      category: "Charging & Power",
    },
    {
      id: "8",
      name: "Wireless Charging Pad",
      price: 42,
      image: chargingCollection,
      category: "Charging & Power",
    },
    {
      id: "9",
      name: "Power Bank 20000mAh",
      price: 55,
      image: chargingCollection,
      category: "Charging & Power",
    },
    {
      id: "10",
      name: "Bluetooth Speaker Mini",
      price: 48,
      image: audioCollection,
      category: "Audio & Sound",
    },
    {
      id: "11",
      name: "Wireless Earbuds Pro",
      price: 78,
      image: audioCollection,
      category: "Audio & Sound",
    },
    {
      id: "12",
      name: "USB Sound Card",
      price: 28,
      image: audioCollection,
      category: "Audio & Sound",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            Shop Smart Electronics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Discover innovative gadgets that make everyday life easier and smarter
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "border-border hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
