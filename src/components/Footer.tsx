import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-primary">
              Aari Work Sarees
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Authentic hand-crafted Aari work chudi sarees. Preserving
              traditional South Indian craftsmanship with every stitch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-primary">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@aarisarees.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Textile Street, Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aari Work Sarees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
