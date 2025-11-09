import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import partyCollection from "@/assets/party-collection.jpg";
import menCollection from "@/assets/men-collection.jpg";
import womenCollection from "@/assets/women-collection.jpg";
import everydayCollection from "@/assets/everyday-collection.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Golden Elegance Necklace",
      price: 299,
      image: partyCollection,
      category: "Party Jewellery",
    },
    {
      id: "2",
      name: "Men's Luxury Watch",
      price: 489,
      image: menCollection,
      category: "Men's Collection",
    },
    {
      id: "3",
      name: "Everyday Grace Earrings",
      price: 149,
      image: everydayCollection,
      category: "Everyday Elegance",
    },
    {
      id: "4",
      name: "Statement Gold Ring",
      price: 229,
      image: partyCollection,
      category: "Party Jewellery",
    },
  ];

  const collections = [
    {
      title: "Party Jewellery",
      description: "Shine bright at every celebration",
      image: partyCollection,
      link: "/collections",
    },
    {
      title: "Men's Collection",
      description: "Sophisticated style for him",
      image: menCollection,
      link: "/collections",
    },
    {
      title: "Women's Collection",
      description: "Elegance redefined",
      image: womenCollection,
      link: "/collections",
    },
  ];

  const testimonials = [
    {
      name: "Amira K.",
      text: "ANOENA pieces are absolutely stunning! The quality is exceptional and I receive compliments every time I wear them.",
      rating: 5,
    },
    {
      name: "Layla M.",
      text: "Finally found a brand that understands modern femininity. Their winter collection is to die for!",
      rating: 5,
    },
    {
      name: "Sophia R.",
      text: "The customer service is as beautiful as their jewellery. Fast delivery and gorgeous packaging!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="ANOENA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Sparkles className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Shine Every Moment
            <br />
            with ANOENA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Discover elegance that celebrates you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
            >
              <Link to="/shop">
                Shop the Look
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground text-lg px-8"
            >
              <Link to="/collections">Explore Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Collections
          </h2>
          <p className="text-muted-foreground text-lg">
            Curated with love for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to={collection.link}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] hover-lift"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {collection.title}
                </h3>
                <p className="text-white/90 mb-4">{collection.description}</p>
                <span className="inline-flex items-center text-primary font-semibold">
                  Discover
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Best Sellers
            </h2>
            <p className="text-muted-foreground text-lg">
              Our most loved pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Loved by Women Everywhere
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-lift"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-rose/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Join the ANOENA Circle
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive offers, and
            style inspiration
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
