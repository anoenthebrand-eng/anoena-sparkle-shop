import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import partyMenCollection from "@/assets/party-men-collection.jpg";
import partyWomenCollection from "@/assets/party-women-collection.jpg";
import winterMenCollection from "@/assets/winter-men-collection.jpg";
import winterWomenCollection from "@/assets/winter-women-collection.jpg";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    { id: "1", name: "Golden Elegance Necklace", price: 299, image: partyWomenCollection, category: "Party Jewellery for Women" },
    { id: "2", name: "Men's Luxury Watch", price: 589, image: partyMenCollection, category: "Party Jewellery for Men" },
    { id: "3", name: "Cashmere Shawl", price: 249, image: winterWomenCollection, category: "Winter Collection for Women" },
    { id: "4", name: "Designer Cufflinks", price: 199, image: partyMenCollection, category: "Party Jewellery for Men" },
    { id: "5", name: "Chandelier Earrings", price: 269, image: partyWomenCollection, category: "Party Jewellery for Women" },
    { id: "6", name: "Wool Scarf", price: 179, image: winterMenCollection, category: "Winter Collection for Men" },
    { id: "7", name: "Winter Jewellery Set", price: 329, image: winterWomenCollection, category: "Winter Collection for Women" },
    { id: "8", name: "Statement Ring", price: 229, image: partyMenCollection, category: "Party Jewellery for Men" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            Shop ANOENA
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up">
            Discover your sparkle ✨
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-display font-bold mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Party Jewellery for Men">Party Jewellery for Men</SelectItem>
                    <SelectItem value="Party Jewellery for Women">Party Jewellery for Women</SelectItem>
                    <SelectItem value="Winter Collection for Men">Winter Collection for Men</SelectItem>
                    <SelectItem value="Winter Collection for Women">Winter Collection for Women</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="text-sm font-semibold mb-3 block">
                  Price Range: AED {priceRange[0]} - AED {priceRange[1]}
                </label>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-4"
                />
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setPriceRange([0, 1000]);
                  setSelectedCategory("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
