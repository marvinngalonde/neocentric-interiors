import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

const VirtualTourSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tourSteps, setTourSteps] = useState<any[]>([]);

  // Available images from /images/ directory
  const availableImages = [
    "WhatsApp Image 2025-08-04 at 18.47.05_f0d593e1.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.05_cf235b29.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.03_fa8328f2.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.02_4e8b27d6.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.01_c6fa5305.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.01_f576119e.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.00_1e8d68f7.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.01_f48ded62.jpg",
    "WhatsApp Image 2025-08-04 at 18.47.00_bae7e5fd.jpg",
    "WhatsApp Image 2025-08-04 at 18.46.59_19062089.jpg",
    "WhatsApp Image 2025-08-04 at 18.46.59_9653b215.jpg",
    "WhatsApp Image 2025-08-04 at 18.46.58_307d4642.jpg"
  ];

  // Tour step titles and descriptions
  const tourContent = [
    { title: "Welcome to Neocentric Interiors", description: "Experience our luxury interior design studio and workshop" },
    { title: "Kitchen Design Studio", description: "Explore our premium kitchen design and installation process" },
    { title: "Living Room Transformations", description: "See how we create stunning living spaces" },
    { title: "Master Bedroom Suite", description: "Discover our luxury bedroom design expertise" },
    { title: "Custom Entertainment Centers", description: "Bespoke entertainment solutions for modern homes" },
    { title: "Premium Material Selection", description: "Explore our collection of premium materials and finishes" },
    { title: "Design Consultation Area", description: "Where your vision meets our expertise" },
    { title: "3D Visualization Station", description: "See your project come to life before construction" },
    { title: "Custom Millwork Showcase", description: "Handcrafted cabinetry and built-in solutions" },
    { title: "Luxury Finishes Gallery", description: "Premium finishes that elevate your space" }
  ];

  // Generate tour steps using half of the available images
  useEffect(() => {
    const halfCount = Math.floor(availableImages.length / 2);
    const selectedImages = availableImages.slice(0, halfCount);

    const generatedTourSteps = selectedImages.map((image, index) => ({
      title: tourContent[index]?.title || `Project ${index + 1}`,
      description: tourContent[index]?.description || `Explore our latest project showcase`,
      image: `/images/${image}`, // Corrected path
      hotspots: [
        { x: 20 + (index * 5) % 50, y: 30 + (index * 3) % 40, label: "Design Feature" },
        { x: 60 + (index * 7) % 30, y: 40 + (index * 5) % 35, label: "Premium Material" },
        { x: 40 + (index * 4) % 45, y: 70 + (index * 6) % 25, label: "Custom Detail" }
      ]
    }));

    setTourSteps(generatedTourSteps);
  }, []);

  const handleHotspotClick = (hotspot: any) => {
    console.log(`Clicked: ${hotspot.label}`);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsTourOpen(false);
      setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const closeTour = () => {
    setIsTourOpen(false);
    setCurrentStep(0);
  };

  return (
    <>
      <section id="tour"
        ref={ref}
        className={`w-full  py-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="topLeft rounded-3xl p-12 text-center  text-white">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl font-['League_Spartan'] lg:text-5xl text-black ">
                Take a Virtual Tour
              </h2>
              <p className="text-xl font-['League_Spartan'] text-gray-500">
                Experience our latest projects from the comfort of your home. Explore our stunning interior transformations in immersive detail.
              </p>
              <div className="flex flex-col font-['League_Spartan'] sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-orange font-['League_Spartan'] hover:bg-orange/90 text-white px-8 py-3"
                  onClick={() => setIsTourOpen(true)}
                >
                  Start Virtual Tour
                </Button>
                {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                  Watch Showcase Video
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Modal */}
      <Dialog open={isTourOpen} onOpenChange={closeTour}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-['League_Spartan'] font-bold text-center">
              {tourSteps[currentStep]?.title || "Virtual Tour"}
            </DialogTitle>
          </DialogHeader>

          <div className="relative">
            {/* Tour Image */}
            <div className="relative w-full h-96 bg-gray-100 font-['League_Spartan'] rounded-lg overflow-hidden">
              {tourSteps[currentStep]?.image && (
                <img
                  src={tourSteps[currentStep].image}
                  alt={tourSteps[currentStep].title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Hotspots */}
              {tourSteps[currentStep]?.hotspots?.map((hotspot: any, index: number) => (
                <button
                  key={index}
                  className="absolute w-6 h-6 bg-orange rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onClick={() => handleHotspotClick(hotspot)}
                  title={hotspot.label}
                >
                  <div className="w-full h-full bg-orange rounded-full animate-pulse"></div>
                </button>
              ))}
            </div>

            {/* Tour Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                ← Previous
              </Button>

              <div className="flex items-center gap-2">
                {tourSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentStep ? 'bg-orange' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="default"
                onClick={nextStep}
                className="flex items-center gap-2 bg-orange hover:bg-orange/90"
              >
                {currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next →'}
              </Button>
            </div>

            {/* Tour Description */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">{tourSteps[currentStep]?.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Click on the orange dots to learn more about each feature
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VirtualTourSection;