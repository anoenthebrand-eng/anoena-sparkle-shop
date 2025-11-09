import { useState } from "react";
import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 💌",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567?text=Hi%20ANOENA!", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            We'd love to hear from you! Reach out and let's create something beautiful together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-3xl font-display font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">Your Name</label>
                <Input
                  required
                  placeholder="Amira"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Email Address</label>
                <Input
                  required
                  type="email"
                  placeholder="amira@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Message</label>
                <Textarea
                  required
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Other Ways to Connect</h2>
              <p className="text-muted-foreground mb-8">
                Choose your preferred way to reach us. We're here to help!
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-r from-primary/10 to-rose/20 rounded-lg p-6 hover-lift cursor-pointer" onClick={handleWhatsApp}>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-full">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">WhatsApp Chat</h3>
                  <p className="text-muted-foreground mb-3">
                    Get instant support via WhatsApp. We're online and ready to help!
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    For detailed inquiries or custom orders
                  </p>
                  <a
                    href="mailto:hello@anoena.com"
                    className="text-primary hover:underline font-medium"
                  >
                    hello@anoena.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <p className="text-muted-foreground mb-4">
                Stay connected for the latest collections and style inspiration
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:border-primary hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Customer Service Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                <p>Friday: 2:00 PM - 9:00 PM</p>
                <p className="text-sm italic mt-4">UAE Time (GMT+4)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
