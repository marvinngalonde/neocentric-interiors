const Footer = () => {
  return (
    <footer className="w-full centeredbg py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <span className="text-xl font-['League_Spartan'] text-white">Neocentric Interiors</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-800 font-['League_Spartan'] text-sm">
            <a href="https://verdsoft.co.zw" className="hover:text-orange transition-colors">
            © 2025 Verdsoft Private Limited. All rights reserved.
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
           
            <a href="#" className="text-gray-500 hover:text-orange transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H8.08v-2.89h2.36V9.84c0-2.34 1.39-3.64 3.52-3.64.72 0 1.66.13 1.66.13v1.82h-.94c-.93 0-1.22.58-1.22 1.18v1.42h2.08l-.33 2.89h-1.75v6.99C18.34 21.13 22 16.99 22 12z"/>
</svg>

            </a>
            <a href="#" className="text-gray-500 hover:text-orange transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;