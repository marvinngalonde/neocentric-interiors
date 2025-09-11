import { useFadeIn } from "@/hooks/use-fade-in";

const ModernMinimalistSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  const images = [
    "/images/WhatsApp Image 2025-08-04 at 18.47.05_f0d593e1.jpg",
    "/images/WhatsApp Image 2025-08-04 at 18.47.05_cf235b29.jpg",
    "/images/WhatsApp Image 2025-08-04 at 18.47.03_fa8328f2.jpg",
    "/images/WhatsApp Image 2025-08-04 at 18.47.02_4e8b27d6.jpg",
    "/images/WhatsApp Image 2025-08-04 at 18.47.01_c6fa5305.jpg",
  ];

  return (
    <>
    <section
      ref={ref}
      className={`w-full h-[30rem] topLeft overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
 <div className="h-full mx-4 sm:mx-10 md:mx-20 lg:mx-40 overflow-hidden">


      <div className="flex animate-slide-left h-[40rem] w-[60rem]">
        {/* First set of images */}
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Third duplicate set for ultra-smooth infinite effect */}
        {images.map((image, index) => (
          <div
            key={`third-${index}`}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      </div>
   

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 15s linear infinite;
        }
        
        /* Pause animation on hover 
        section:hover .animate-slide-left {
          animation-play-state: paused;
        }*/
      `}</style>
    </section>
    </>
  );
};

export default ModernMinimalistSection;