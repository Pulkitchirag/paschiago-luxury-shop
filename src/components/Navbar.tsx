import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/paschiago-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="transition-luxury hover:opacity-80">
            <img src={logo} alt="Paschiago - Luxury Clothing Brand" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-wider transition-luxury relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-luxury hover:after:w-full ${
                  isActive(link.path) ? "text-foreground after:w-full" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm uppercase tracking-wider transition-luxury ${
                    isActive(link.path) ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="ghost" size="sm" className="justify-start">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
