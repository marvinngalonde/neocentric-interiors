import { Button } from "@/components/ui/button";
import { useFadeIn } from "@/hooks/use-fade-in";

const EngagementSection = () => {
  const { ref, isVisible } = useFadeIn(0.2);

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`w-full centeredbg py-16 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-['League_Spartan'] text-white leading-tight">
              Ready to Transform Your Home?
            </h2>
            <p className="text-gray-500 text-lg font-['League_Spartan'] leading-relaxed">
              Contact us today for a free consultation and quote for your custom interior project
            </p>
            <div className="flex flex-col font-['League_Spartan'] sm:flex-row gap-4">
              <Button variant="orange" size="xl">
                Get Free Quote
              </Button>
              <Button variant="orange-outline" size="xl">
                Call +263 77 658 2131
              </Button>
            </div>
            <p className="text-gray-500  font-['League_Spartan'] text-sm">
              Serving Harare and surrounding areas • Licensed & Insured
            </p>
          </div>

          {/* Right Content - Contact Info or Image */}
          <div className="topLeft rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-['League_Spartan'] text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600 font-['League_Spartan']">Phone</div>
                  <div className="text-gray-500 font-['League_Spartan']">+263 77 658 2131</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600 font-['League_Spartan']">Email</div>
                  <div className="text-gray-500 font-['League_Spartan']">neocentricinteriors@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600 font-['League_Spartan']">Location</div>
                  <div className="text-gray-500 font-['League_Spartan']">NRZ Complex, Seke Road, Harare, Zimbabwe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;