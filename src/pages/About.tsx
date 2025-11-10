import { Zap, Heart, Star, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description:
        "We constantly seek out the latest technology to bring you cutting-edge products that enhance your daily life.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Quality",
      description:
        "Every product is carefully tested and selected to meet our high standards of reliability and performance.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Design",
      description:
        "Beautiful aesthetics meet practical functionality in every ANOENA product we offer.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Convenience",
      description:
        "Making smart technology accessible and easy to use for everyone, everywhere.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            About ANOENA Electronics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Bringing smarter living to your everyday life
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                ANOENA Electronics was born from a simple idea: everyday technology should be
                smart, stylish, and accessible to everyone. We saw a gap in the market for
                electronics that combine cutting-edge innovation with elegant design at
                affordable prices.
              </p>
              <p>
                From smart planters that help your plants thrive to portable air pumps that
                keep you moving, our products are designed to solve real problems while looking
                great in your home or on the go.
              </p>
              <p>
                Today, ANOENA serves thousands of customers who trust us to deliver quality
                tech products that enhance their daily routines. We're not just selling
                gadgets—we're helping you live smarter.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-primary/10 to-tech-gray-light rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make cutting-edge technology accessible, affordable, and beautifully
              integrated into everyday life. We believe that smart living shouldn't be
              complicated or expensive—it should be simple, elegant, and available to all.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover-lift hover:border-primary transition-colors"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Why Shop With ANOENA?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Curated Selection</h3>
              <p className="text-muted-foreground">
                Every product is hand-picked and tested by our team to ensure it meets our
                high standards for quality and innovation.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Get your tech gadgets delivered quickly with our reliable shipping partners
                throughout the region.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Expert Support</h3>
              <p className="text-muted-foreground">
                Our knowledgeable team is always ready to help you find the perfect product
                or answer any questions.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Fair Prices</h3>
              <p className="text-muted-foreground">
                Premium quality doesn't have to mean premium prices. We believe in making
                smart tech accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
