import { Link } from "react-router-dom";
import { HardHat, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-lg">
                <HardHat className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-lg font-bold">BuildPro</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Building excellence, one project at a time. Your trusted construction partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  123 Construction Ave, Building City, BC 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">info@buildpro.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="font-semibold mb-4">Business Hours</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} BuildPro Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
