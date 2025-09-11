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
      className={`w-full topLeft h-[40rem]  transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      <div className="max-w-8xl h-[40rem] mx-auto ">
        <div className="flex justify-center">
          <div className="w-5/6 h-[40rem] mx-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/WhatsApp Image 2025-08-04 at 18.47.05_cf235b29.jpg')" }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernMinimalistSection;