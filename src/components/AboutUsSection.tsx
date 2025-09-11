import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const AboutUsSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in interior design and craftsmanship"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in custom interiors"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time with efficient project management"
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Your satisfaction is our priority in every project"
    }
  ];

  return (
    <section  id="about"
      ref={ref}
      className={`w-full  py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/images/WhatsApp Image 2025-08-04 at 18.47.01_f48ded62.jpg" 
                alt="Neocentric Interiors design philosophy - precision and elegance" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-['League_Spartan'] text-orange">15+</div>
                <div className="text-sm font-['League_Spartan'] text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-orange/10 rounded-full px-4 py-2">
                <span className="text-sm font-['League_Spartan'] text-orange">About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-['League_Spartan'] text-foreground leading-tight">
                Crafting Spaces with
                <span className="text-orange font-['League_Spartan']"> Precision</span>
              </h2>
              
              <p className="text-lg text-gray-600 font-['League_Spartan'] leading-relaxed">
                At Neocentric Interiors, we believe every space tells a story. Our passion for design meets 
                exceptional craftsmanship to create interiors that not only look stunning but also enhance your 
                daily living experience.
              </p>
              
              <p className="text-gray-600 font-['League_Spartan'] leading-relaxed">
                Based in Harare, we've been transforming homes across Zimbabwe for over 15 years, bringing 
                international design standards to local homes while respecting the unique character of each space.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="font-['League_Spartan'] text-foreground">{feature.title}</h3>
                  <p className="text-sm font-['League_Spartan'] text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col font-['League_Spartan'] sm:flex-row gap-4">
              <Button variant="orange" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg" className="border-orange font-['League_Spartan'] text-orange hover:bg-orange hover:text-white">
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection; 