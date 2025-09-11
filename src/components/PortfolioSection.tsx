import CircularGallery from "./CircularGallery";
import { useFadeIn } from "@/hooks/use-fade-in";

const PortfolioSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

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

  const portfolioItems = [
    {
      image: `/images/${availableImages[0]}`,
      text: "Custom Entertainment & Bar Unit"
    },
    {
      image: `/images/${availableImages[1]}`,
      text: "Contemporary Black Kitchen"
    },
    {
      image: `/images/${availableImages[2]}`,
      text: "Navy & White Kitchen"
    },
    {
      image: `/images/${availableImages[3]}`,
      text: "Custom Wardrobe Solutions"
    },
    {
      image: `/images/${availableImages[4]}`,
      text: "Luxury Master Suite"
    },
    {
      image: `/images/${availableImages[5]}`,
      text: "Full Home Renovation"
    },
    {
      image: `/images/${availableImages[6]}`,
      text: "Premium Kitchen Design"
    },
    {
      image: `/images/${availableImages[7]}`,
      text: "Modern Living Spaces"
    },
    {
      image: `/images/${availableImages[8]}`,
      text: "Custom Millwork"
    },
    {
      image: `/images/${availableImages[9]}`,
      text: "Luxury Finishes"
    },
    {
      image: `/images/${availableImages[10]}`,
      text: "Design Consultation"
    },
    {
      image: `/images/${availableImages[11]}`,
      text: "3D Visualization"
    }
  ];

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`w-full  py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-block bg-orange/10 rounded-full px-4 py-2">
              <span className="text-sm font-medium text-orange">Recent Projects</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-['League_Spartan']d text-foreground">
              Latest Custom Installations
            </h2>
            <p className="text-gray-600 font-['League_Spartan'] max-w-2xl mx-auto">
              Showcasing our latest custom installations and interior transformations across Harare
            </p>
          </div>

          {/* Portfolio Grid - Made bigger */}
          <div className="h-[350px] w-full  rounded-full">
            <CircularGallery 
              items={portfolioItems} 
              bend={4} 
              textColor="#000" 
              borderRadius={0.1} 
              font="bold 40px Figtree" 
              scrollSpeed={2} 
              scrollEase={0.05}  
            />
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            {/* <button className="inline-flex items-center bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              View Complete Portfolio
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;