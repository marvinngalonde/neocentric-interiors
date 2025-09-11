import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative top-0 left-0 right-0 z-50 w-full border-b border-gray-400 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <span className="text-xl text-foreground font-['League_Spartan']">
              Neocentric
              <span className="font-thin italic text-orange ml-1 font-['League_Spartan']">
                Interiors
              </span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "About Us", "Projects", "Tour", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-600 hover:text-orange transition-colors font-['League_Spartan'] font-medium cursor-pointer"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* CTA Button (always visible) */}
          <Button
            variant="default"
            size="lg"
            className="topLeft text-gray-500 font-['League_Spartan'] border border-gray-300 hover:bg-orange/90 rounded-full hidden md:inline-flex"
          >
            <a href="https://wa.me/263776582131">WhatsApp Us</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-start space-y-4 px-6 py-4">
            {["Home", "Services", "About Us", "Projects", "Tour", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-gray-600 hover:text-orange transition-colors font-['League_Spartan'] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <Button
              variant="default"
              size="lg"
              className="w-full text-gray-500 font-['League_Spartan'] border border-gray-300 hover:bg-orange/90 rounded-full"
            >
              <a href="https://wa.me/263776582131">WhatsApp Us</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
