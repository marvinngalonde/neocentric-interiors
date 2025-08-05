import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <span className="text-xl font-bold text-foreground">
              Neocentric
              <span className="font-thin italic text-orange ml-1">Interiors</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-gray-600 hover:text-orange transition-colors font-medium cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-orange transition-colors font-medium cursor-pointer"
            >
              About Us
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-orange transition-colors font-medium cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#tour" 
              className="text-gray-600 hover:text-orange transition-colors font-medium cursor-pointer"
            >
              Tour
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-orange transition-colors font-medium cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold">
          <a href="https://wa.me/263776582131">
            WhatsApp Us
          </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;