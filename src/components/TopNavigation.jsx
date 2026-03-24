import { useState } from "react";

export default function TopNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-blue/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <i className="fas fa-code mr-2 text-blue-600 text-2xl"></i>
            <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 md:space-x-8">
              <a href="#home" className="nav-link px-3 py-2 text-base md:text-2xl font-medium">Home</a>
              <a href="#about" className="nav-link px-3 py-2 text-base md:text-2xl font-medium">About</a>
              <a href="#services" className="nav-link px-3 py-2 text-base md:text-2xl font-medium">Services</a>
              <a href="#contact" className="nav-link px-3 py-2 text-base md:text-2xl font-medium">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(prev => !prev)}
              aria-label="Menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-100 focus:outline-none"
            >
              <i className={`fas ${isMobileOpen ? "fa-times" : "fa-bars"} text-2xl`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileOpen ? "block" : "hidden"} md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Home</a>
          <a href="#about" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">About</a>
          <a href="#services" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Services</a>
          <a href="#contact" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md">Contact</a>
        </div>
      </div>
    </nav>
  );
}
