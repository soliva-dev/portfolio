import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">Samuel Oliva</span>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">Sobre mí</a>
            <a href="#work" className="text-gray-600 hover:text-black transition-colors">Proyectos</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contacto</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;

// DONE