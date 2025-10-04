import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A journey through tradition, craftsmanship, and timeless beauty
              </p>
            </div>
          </div>
        </section>

        {/* History of Aari Work */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                The Heritage of Aari Work
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aari work, also known as 'maggam work' in some regions, is an
                  ancient embroidery technique that has been passed down through
                  generations of skilled artisans in South India. The name
                  'Aari' comes from the needle-like tool resembling a cobbler's
                  awl, which is used to create intricate designs on fabric.
                </p>
                <p>
                  This exquisite craft dates back centuries and was originally
                  patronized by royalty and nobility. The technique involves
                  creating chain stitches using a hooked needle, allowing
                  artisans to work from the reverse side of the fabric. This
                  unique method enables the creation of elaborate patterns,
                  floral motifs, and detailed designs that are characteristic of
                  Aari embroidery.
                </p>
                <p>
                  Traditional Aari work often incorporates additional
                  embellishments such as zari (metallic thread), sequins, beads,
                  and stones, creating stunning three-dimensional effects that
                  catch and reflect light beautifully. Each piece can take
                  weeks or even months to complete, depending on the complexity
                  of the design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Our Shop */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                About Our Shop
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
                <p>
                  For over three generations, our family has been dedicated to
                  preserving and promoting the art of Aari work embroidery. What
                  started as a small workshop in the heart of Chennai has grown
                  into a trusted name in traditional South Indian sarees.
                </p>
                <p>
                  We work directly with master craftsmen and artisans who have
                  spent decades perfecting their skills. Every saree in our
                  collection is the result of countless hours of meticulous
                  handwork, where each stitch is placed with precision and care.
                </p>
                <p>
                  Our commitment goes beyond just selling sarees – we are
                  custodians of a cultural heritage. By supporting traditional
                  artisans and their families, we help keep this ancient craft
                  alive for future generations while ensuring that every customer
                  receives a piece of wearable art that embodies centuries of
                  tradition.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Passion
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deep love for traditional crafts and cultural preservation
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Community
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting artisan families and their craft traditions
                  </p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Quality
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Uncompromising standards in materials and craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Uniqueness */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
                What Makes Us Unique
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Authentic Craftsmanship
                  </h3>
                  <p className="text-muted-foreground">
                    Each saree is created using traditional Aari techniques,
                    ensuring authenticity and preserving centuries-old methods.
                    No two pieces are exactly alike, making each saree truly
                    one-of-a-kind.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Premium Materials
                  </h3>
                  <p className="text-muted-foreground">
                    We source only the finest silk, cotton, and embellishments
                    for our sarees. Every material is carefully selected to
                    ensure durability, comfort, and lasting beauty.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Direct from Artisans
                  </h3>
                  <p className="text-muted-foreground">
                    By working directly with craftspeople, we ensure fair wages
                    and maintain the highest quality standards while keeping
                    prices reasonable for our customers.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    Modern Convenience
                  </h3>
                  <p className="text-muted-foreground">
                    While we honor tradition, we embrace modern shopping
                    convenience with easy online ordering, secure payments, and
                    nationwide delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
