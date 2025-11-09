import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            About ANOENA
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Celebrating modern femininity with style and confidence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ANOENA was born from a passion for empowering women through elegant, 
                accessible fashion. Based in the heart of the UAE, we believe that every 
                woman deserves to shine in her own unique way.
              </p>
              <p>
                Our journey began with a simple vision: to create jewellery and fashion 
                pieces that celebrate the modern woman—confident, stylish, and unapologetically 
                herself. Each piece in our collection is carefully curated to blend timeless 
                elegance with contemporary design.
              </p>
              <p>
                From dazzling party jewellery to cozy winter collections, we craft pieces 
                that accompany you through life's most memorable moments. ANOENA is more 
                than a brand—it's a celebration of you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-3">Quality & Care</h3>
              <p className="text-muted-foreground">
                Every piece is crafted with attention to detail and made to last, 
                because you deserve nothing but the best.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-3">Modern Elegance</h3>
              <p className="text-muted-foreground">
                We blend timeless sophistication with contemporary design, 
                creating pieces that are both classic and current.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-3">Community</h3>
              <p className="text-muted-foreground">
                ANOENA is a circle of empowered women who celebrate each other's 
                unique beauty and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            To inspire confidence and celebrate the modern woman through elegant, 
            accessible fashion that makes every moment shine. We believe that style 
            is personal, beauty is diverse, and every woman deserves to feel extraordinary.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-rose/20 rounded-lg p-8">
            <p className="text-2xl font-display italic text-foreground">
              "Your sparkle is our inspiration" ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
