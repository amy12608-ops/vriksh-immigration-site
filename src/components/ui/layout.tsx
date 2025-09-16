import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const services = [
  { name: "Study Permits", href: "/services/study-permits" },
  { name: "Work Permits", href: "/services/work-permits" },
  { name: "Express Entry", href: "/services/express-entry" },
  { name: "Visitor Visas", href: "/services/visitor-visas" },
  { name: "Family Sponsorship", href: "/services/family-sponsorship" },
  { name: "Provincial Nominee Program", href: "/services/pnp" },
  { name: "LMIA Applications", href: "/services/lmia" },
  { name: "Permanent Residency", href: "/services/permanent-residency" },
  { name: "Citizenship Applications", href: "/services/citizenship" },
  { name: "Business Immigration", href: "/services/business-immigration" },
  { name: "Refugee & Asylum", href: "/services/refugee-asylum" },
  { name: "PR Card Renewal", href: "/services/pr-card-renewal" },
];

const BookConsultationButton = ({ className = "" }: { className?: string }) => (
  <Button 
    asChild
    className={cn("bg-hero-gradient hover:opacity-90 shadow-medium transition-smooth", className)}
  >
    <a href="mailto:amy12608@gmail.com?subject=Immigration Consultation Request">
      Book a Consultation
    </a>
  </Button>
);

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-background border-b border-border shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/vriksh-logo.png" 
                alt="VrikshImmigration Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-professional-navy">VrikshImmigration</h1>
                <p className="text-sm text-muted-foreground">CICC Licensed Consultants</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  <NavigationMenuItem>
                    <Link 
                      to="/"
                      className={cn(
                        "font-medium transition-smooth hover:text-primary",
                        location.pathname === "/" ? "text-primary" : "text-foreground"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link 
                      to="/about"
                      className={cn(
                        "font-medium transition-smooth hover:text-primary",
                        location.pathname === "/about" ? "text-primary" : "text-foreground"
                      )}
                    >
                      About Us
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[600px] p-4">
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <NavigationMenuLink key={service.href} asChild>
                              <Link
                                to={service.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link 
                      to="/testimonials"
                      className={cn(
                        "font-medium transition-smooth hover:text-primary",
                        location.pathname === "/testimonials" ? "text-primary" : "text-foreground"
                      )}
                    >
                      Testimonials
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link 
                      to="/contact"
                      className={cn(
                        "font-medium transition-smooth hover:text-primary",
                        location.pathname === "/contact" ? "text-primary" : "text-foreground"
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <BookConsultationButton />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 border-t border-border pt-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="font-medium hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="font-medium hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className="font-medium hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/testimonials" 
                  className="font-medium hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  to="/contact" 
                  className="font-medium hover:text-primary transition-smooth"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <BookConsultationButton className="w-full" />
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-professional-navy text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/vriksh-logo.png" 
                  alt="VrikshImmigration Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-lg font-bold">VrikshImmigration</h3>
                  <p className="text-sm text-white/80">CICC Licensed Consultants</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Professional immigration services helping you achieve your Canadian dreams with expert guidance and personalized support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-white/80 hover:text-white transition-smooth text-sm">Home</Link>
                <Link to="/about" className="text-white/80 hover:text-white transition-smooth text-sm">About Us</Link>
                <Link to="/services" className="text-white/80 hover:text-white transition-smooth text-sm">Services</Link>
                <Link to="/testimonials" className="text-white/80 hover:text-white transition-smooth text-sm">Testimonials</Link>
                <Link to="/contact" className="text-white/80 hover:text-white transition-smooth text-sm">Contact</Link>
              </nav>
            </div>

            {/* CICC Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Professional Credentials</h4>
              <div className="space-y-2">
                <p className="text-white/80 text-sm">CICC Licensed Immigration Consultants</p>
                <a 
                  href="https://iccrc-crcic.ca/find-a-professional/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-smooth text-sm underline"
                >
                  Verify CICC Membership
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} VrikshImmigration. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { BookConsultationButton };