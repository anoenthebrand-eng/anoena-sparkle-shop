import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import smartHomeCollection from "@/assets/smart-home-collection.jpg";
import portableTechCollection from "@/assets/portable-tech-collection.jpg";
import chargingCollection from "@/assets/charging-collection.jpg";
import audioCollection from "@/assets/audio-collection.jpg";

const Collections = () => {
  const collections = [
    {
      title: "Smart Home",
      description: "Transform your space with intelligent devices",
      image: smartHomeCollection,
      items: "12+ products",
      link: "/shop",
    },
    {
      title: "Portable Tech",
      description: "Tech essentials on the go",
      image: portableTechCollection,
      items: "8+ products",
      link: "/shop",
    },
    {
      title: "Charging & Power",
      description: "Never run out of power again",
      image: chargingCollection,
      items: "10+ products",
      link: "/shop",
    },
    {
      title: "Audio & Sound",
      description: "Premium sound for every moment",
      image: audioCollection,
      items: "6+ products",
      link: "/shop",
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
            Explore our curated selection of smart electronics designed for modern living
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to={collection.link}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] hover-lift"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/90 via-tech-dark/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {collection.items}
                </p>
                <h3 className="text-3xl font-display font-bold mb-3">
                  {collection.title}
                </h3>
                <p className="text-white/90 mb-4 text-lg">{collection.description}</p>
                <span className="inline-flex items-center text-primary font-semibold text-lg">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-tech-gray-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Browse our full shop or get in touch with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-border rounded-md hover:border-primary hover:text-primary transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
