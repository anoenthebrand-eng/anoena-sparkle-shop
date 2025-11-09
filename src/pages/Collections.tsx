import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import partyMenCollection from "@/assets/party-men-collection.jpg";
import partyWomenCollection from "@/assets/party-women-collection.jpg";
import winterMenCollection from "@/assets/winter-men-collection.jpg";
import winterWomenCollection from "@/assets/winter-women-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Party Jewellery for Men",
      tagline: "Make a Statement ✨",
      description:
        "Elevate your party look with our sophisticated men's jewellery collection. From luxury watches to designer cufflinks and statement rings, each piece adds the perfect finishing touch to your celebration style.",
      image: partyMenCollection,
      featured: ["Luxury Watches", "Designer Cufflinks", "Statement Rings"],
    },
    {
      title: "Party Jewellery for Women",
      tagline: "Shine Bright at Every Celebration 💎",
      description:
        "Dazzle the crowd with our stunning women's party jewellery. From chandelier earrings to statement necklaces and cocktail rings, each piece is designed to capture the spotlight and make you feel extraordinary.",
      image: partyWomenCollection,
      featured: ["Chandelier Earrings", "Statement Necklaces", "Cocktail Rings"],
    },
    {
      title: "Winter Collection for Men",
      tagline: "Sophisticated Winter Style 🎩",
      description:
        "Stay elegant through the cooler months with our men's winter collection. Featuring refined accessories, cozy scarves, and timeless pieces that blend warmth with style for the modern gentleman.",
      image: winterMenCollection,
      featured: ["Wool Scarves", "Leather Gloves", "Winter Accessories"],
    },
    {
      title: "Winter Collection for Women",
      tagline: "Cozy Elegance ❄️",
      description:
        "Embrace the winter season with grace. Our women's winter collection features luxurious shawls, elegant winter jewellery, and sophisticated accessories that keep you warm while looking effortlessly chic.",
      image: winterWomenCollection,
      featured: ["Cashmere Shawls", "Winter Jewellery", "Elegant Scarves"],
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
