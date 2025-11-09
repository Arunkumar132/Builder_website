import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/team", label: "Team" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header Layout */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <div className="absolute left-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-accent p-2 rounded-lg transition-transform group-hover:scale-110">
                <HardHat className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">
                BuildPro Construction
              </span>
            </Link>
          </div>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-lg font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Right */}
          <div className="absolute right-0">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 transition-colors hover:bg-secondary rounded-lg ${
                  isActive(item.path)
                    ? "bg-secondary text-accent font-medium"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
