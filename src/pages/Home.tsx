import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield, Truck, Headphones, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import smartHomeCollection from "@/assets/smart-home-collection.jpg";
import portableTechCollection from "@/assets/portable-tech-collection.jpg";
import chargingCollection from "@/assets/charging-collection.jpg";

const Home = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to ANOENA Smart Circle! 🎉",
        description: "You'll receive exclusive deals and tech updates.",
      });
      setEmail("");
    }
  };

  const featuredProducts = [
    {
      id: "1",
      name: "Smart LED Planter",
      price: 89,
      image: smartHomeCollection,
      category: "Smart Home",
    },
    {
      id: "2",
      name: "Portable Air Pump Pro",
      price: 45,
      image: portableTechCollection,
      category: "Portable Tech",
    },
    {
      id: "3",
      name: "Fast Charging Kit",
      price: 35,
      image: chargingCollection,
      category: "Charging & Power",
    },
    {
      id: "4",
      name: "Smart Desk Lamp",
      price: 65,
      image: smartHomeCollection,
      category: "Smart Home",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description: "Cutting-edge technology that simplifies your daily life",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality Guaranteed",
      description: "Premium materials with rigorous testing standards",
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Quick shipping to get your tech gadgets to you ASAP",
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Always here to help with any questions or concerns",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The smart planter is a game-changer! My plants have never been healthier. ANOENA makes tech so accessible.",
      rating: 5,
    },
    {
      name: "James K.",
      text: "Love the portable air pump! Perfect for my car and bike. Great quality and super convenient.",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "Fast shipping and excellent customer service. The LED lamp is beautiful and functional. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-tech-dark">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="ANOENA Electronics Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-dark/70" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in max-w-4xl">
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            ⚡ Smart. Simple. Everyday Tech.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Discover smarter living with ANOENA — everyday tech that makes life easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 shadow-tech"
            >
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-tech-dark text-lg px-8"
            >
              <Link to="/collections">Explore Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Our Shop */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Welcome to ANOENA Electronics
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We bring you stylish and practical electronics designed for everyday living. 
            From smart home devices to portable tech essentials, ANOENA combines innovation 
            with elegant design to enhance your lifestyle.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is simple: make cutting-edge technology accessible, affordable, 
            and beautifully integrated into your daily routine. Welcome to smarter living.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Smart planters, LED lamps, portable air pumps, charging kits & more
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

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose ANOENA?
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovation, design, and convenience in every product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover-lift hover:border-primary transition-colors"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Customer Reviews
            </h2>
            <p className="text-muted-foreground text-lg">
              See what our satisfied customers are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-tech-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Join the ANOENA Smart Circle
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe for exclusive deals, new product launches, and tech tips delivered straight to your inbox.
          </p>
          <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
