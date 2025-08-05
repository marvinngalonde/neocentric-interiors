import { useFadeIn } from "@/hooks/use-fade-in";

const ServicesSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  const services = [
    {
      title: "Custom Kitchen Fittings",
      description: "Bespoke kitchen designs with premium finishes, integrated appliances, and smart storage solutions"
    },
    {
      title: "Home Bar Installations", 
      description: "Sophisticated entertainment areas with custom millwork, wine storage, and premium finishes"
    },
    {
      title: "Built-in Wardrobes & Closets",
      description: "Maximized storage solutions with custom organization systems and elegant finishes"
    },
    {
      title: "Interior Design Consultation",
      description: "Professional design guidance from concept to completion with 3D visualization"
    },
    {
      title: "Full Home Renovation Fittings",
      description: "Complete home transformations with coordinated design and premium installations"
    },
    {
      title: "Custom Furniture & Cabinetry",
      description: "Bespoke furniture pieces and cabinetry designed specifically for your space and needs"
    }
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className={`w-full bg-white py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our Specialized Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert craftsmanship and custom solutions for every aspect of your home interior needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;