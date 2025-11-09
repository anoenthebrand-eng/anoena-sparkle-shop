import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import partyCollection from "@/assets/party-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";
import womenCollection from "@/assets/women-collection.jpg";
import everydayCollection from "@/assets/everyday-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Party Jewellery",
      tagline: "Shine bright at every celebration ✨",
      description:
        "Make a statement with our stunning party jewellery collection. From elegant necklaces to dazzling earrings, each piece is designed to capture the spotlight and make you feel extraordinary.",
      image: partyCollection,
      featured: ["Statement Necklaces", "Chandelier Earrings", "Cocktail Rings"],
    },
    {
      title: "Men's Collection",
      tagline: "Sophisticated Style for Him 🎩",
      description:
        "Discover our curated men's collection featuring sophisticated watches, refined bracelets, and elegant accessories. Each piece embodies modern masculinity with timeless appeal.",
      image: menCollection,
      featured: ["Luxury Watches", "Leather Bracelets", "Designer Cufflinks"],
    },
    {
      title: "Women's Collection",
      tagline: "Elegance Redefined 💎",
      description:
        "Embrace timeless femininity with our exquisite women's collection. From delicate necklaces to stunning earrings, each piece is crafted to celebrate your unique beauty and style.",
      image: womenCollection,
      featured: ["Gold Necklaces", "Diamond Earrings", "Statement Rings"],
    },
    {
      title: "Everyday Elegance",
      tagline: "Grace in Every Moment 💫",
      description:
        "Timeless pieces designed for daily wear. Our everyday elegance collection features delicate, versatile jewellery that effortlessly elevates any outfit, from office to evening.",
      image: everydayCollection,
      featured: ["Minimalist Necklaces", "Delicate Bracelets", "Simple Earrings"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Each collection tells a story of elegance, crafted for the modern woman who embraces her unique style
          </p>
        </div>
      </section>

      {/* Collections */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-lg aspect-square hover-lift ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <h2 className="text-4xl font-display font-bold mb-2">
                    {collection.title}
                  </h2>
                  <p className="text-xl text-primary font-medium">
                    {collection.tagline}
                  </p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {collection.description}
                </p>

                <div>
                  <h3 className="font-semibold mb-3">Featured in this collection:</h3>
                  <ul className="space-y-2">
                    {collection.featured.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Link to="/shop">
                    Shop This Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-rose/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Can't Decide?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore all our products and discover pieces that speak to your unique style
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/shop">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Collections;
