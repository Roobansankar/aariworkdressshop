import { Link } from "react-router-dom";
import { Sparkles, Award, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-saree.jpg";

const Index = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Exquisite Aari Work
              <br />
              Chudi Sarees
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Handcrafted with love, each saree tells a story of traditional
              South Indian artistry and timeless elegance.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">Explore Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Aari Work Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary">
              The Art of Aari Work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aari work is a traditional form of embroidery that originated in
              South India, particularly in Tamil Nadu. Named after the
              needle-like tool 'Aari' used to create intricate patterns, this
              centuries-old craft involves delicate hand embroidery on fabric.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each saree in our collection is meticulously crafted by skilled
              artisans who have mastered this heritage technique, ensuring every
              piece is a wearable work of art that celebrates Indian culture and
              craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center bg-white rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Handcrafted Excellence
              </h3>
              <p className="text-muted-foreground text-sm">
                Each saree is hand-embroidered by skilled artisans with years of
                experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-white rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Premium Quality
              </h3>
              <p className="text-muted-foreground text-sm">
                Only the finest fabrics and materials for lasting beauty and
                comfort.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-white rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Nationwide Delivery
              </h3>
              <p className="text-muted-foreground text-sm">
                Safe and secure delivery to your doorstep across India.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
              Featured Sarees
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked collection of the finest Aari work sarees
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
