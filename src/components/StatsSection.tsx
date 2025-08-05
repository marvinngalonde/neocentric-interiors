import { Button } from "@/components/ui/button";

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "1st", label: "Award Winner" }
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Large Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/images/WhatsApp Image 2025-08-04 at 18.47.01_c6fa5305.jpg" 
                alt="Modern timeless interior design" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-sm font-medium text-gray-600 tracking-wider">
                Elegance • Timeless
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Modern Style<br />
                Timeless Charm
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                Discover Platform 2024 preview, featuring sofas, chairs, and armchairs embodying diverse lifestyle concepts, alongside striking tables, coffee tables, and sideboards.
              </p>
              
              <Button variant="default" className="bg-foreground hover:bg-foreground/90 text-white px-8 py-3">
                <a href="#contact">
                Contact Us
                </a>
              </Button>
            </div>
            
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;