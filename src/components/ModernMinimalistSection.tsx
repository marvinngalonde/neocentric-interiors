import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/use-fade-in";

const ModernMinimalistSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  const stats = [
    { number: "500+", label: "Products" },
    { number: "20+", label: "Projects" },
    { number: "50+", label: "Satisfied Customers" },
    { number: "1st", label: "Top in Paris" }
  ];

  return (
    <section 
      ref={ref}
      className={`w-full bg-background py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Large Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/images/WhatsApp Image 2025-08-04 at 18.47.05_cf235b29.jpg" 
                alt="Modern minimalist interior" 
                className="w-full h-[400px] object-cover"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <span className="text-sm text-white/80">Minimalist Interior</span>
                </div>
                <h3 className="text-4xl font-bold text-white leading-tight">
                  Modern<br />
                  Minimalist
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-full px-4 py-2 inline-block">
                <span className="text-sm font-medium text-gray-600">Aesthetic furniture</span>
              </div>
              
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Into a gallery<br />
                of elegance
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                Aesthetic furniture offers every space into a story of style that seamlessly blends form and function.
              </p>
            </div>

            {/* Small Gallery Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <img 
                  src="/images/WhatsApp Image 2025-08-04 at 18.47.03_fa8328f2.jpg" 
                  alt="Furniture detail" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-xs font-medium text-gray-800">Best Furniture</span>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <img 
                  src="/images/WhatsApp Image 2025-08-04 at 18.47.02_4e8b27d6.jpg" 
                  alt="Gallery piece" 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-medium">Design for the next</div>
                  <div className="text-xs opacity-80">generation of people</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernMinimalistSection;