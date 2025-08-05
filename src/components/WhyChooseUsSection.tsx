import { useFadeIn } from "@/hooks/use-fade-in";

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  const reasons = [
    {
      title: "Local Expertise",
      description: "Deep understanding of Zimbabwean homes and lifestyle needs with international design standards"
    },
    {
      title: "Skilled Craftsmen", 
      description: "Expert installation teams with years of experience in custom fittings"
    },
    {
      title: "Quality Materials",
      description: "Premium materials sourced locally and internationally for lasting quality"
    },
    {
      title: "Complete Service",
      description: "From design consultation to final installation - we handle everything"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`w-full bg-gray-50 py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Neocentric Interiors?
          </h2>
          <p className="text-xl text-gray-600">
            Quality craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;