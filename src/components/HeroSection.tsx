import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";
import { ArrowUpRight } from "lucide-react";
import SplashCursor from "./SplashCursor";
import TextType from "./TextType";
import { useFadeIn } from "@/hooks/use-fade-in";

const HeroSection = () => {
  const { ref, isVisible } = useFadeIn(0.3);

  return (
    <section 
      ref={ref}
      id="home" 
      className={`w-full  relative transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* <div className="absolute inset-0 z-10">
        <SplashCursor />
      </div> */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <TextType
                    as="h1"
                    className="text-5xl lg:text-6xl font-['League_Spartan'] text-foreground leading-tight"
                    text={[
                      "Elevate Your Home",
                      "Transform Your Space"
                    ]}
                    showCursor={false}
                    typingSpeed={100}
                    pauseDuration={2000}
                    loop={true}
                  />
                  {/* Orange circle dot */}
                  <div className="absolute -bottom-2 -right-6 w-16 h-16 bg-orange rounded-full flex items-center justify-center transform rotate-12">
                    <div className="w-8 h-8 bg-orange-light rounded-full"></div>
                  </div>
                </div>
                <TextType
                  as="h2"
                  className="text-5xl lg:text-6xl  font-['League_Spartan'] text-foreground leading-tight"
                  text="with Elegant, Personalized Interior Design"
                  showCursor={false}
                  typingSpeed={80}
                  pauseDuration={2000}
                />
              </div>
              
              <p className="text-lg font-['League_Spartan'] text-gray-600 max-w-md leading-relaxed">
                Transform your space with custom interiors that blend sophistication, comfort, and style. Designed for modern living, curated for timeless appeal.
              </p>
            </div>

            <div className="flex font-['League_Spartan'] items-center space-x-6">
              <Button variant="orange" size="xl">
                <a href="#contact"></a>
                Get Started Today
              </Button>
              {/* Award Badge */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">✦</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-['League_Spartan'] text-foreground">AWARD WINNING INTERIOR</div>
                  <div className="text-gray-600 font-['League_Spartan']">SINCE 2008</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/images/WhatsApp Image 2025-08-04 at 18.47.05_f0d593e1.jpg" 
                alt="Modern interior design showcase" 
                className="w-full h-[600px] object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <img 
                  src="/images/WhatsApp Image 2025-08-04 at 18.47.01_f576119e.jpg" 
                  alt="Living Room" 
                  className="w-16 h-12 object-cover rounded-lg mb-2"
                />
                <div className="text-xs font-['League_Spartan'] text-gray-600">Living Room</div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <img 
                  src="/images/WhatsApp Image 2025-08-04 at 18.47.00_1e8d68f7.jpg" 
                  alt="Modern Style" 
                  className="w-20 h-12 object-cover rounded-lg mb-2"
                />
                <div className="text-xs font-['League_Spartan'] text-gray-600">Modern Style</div>
              </div>
            </div>
            
            {/* Floating Action Button */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-tl-[50%] rounded-tr-none rounded-br-none rounded-bl-none flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-orange  rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;