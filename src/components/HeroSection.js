import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">👋 ¡Hola! Soy <span className="text-indigo-600">Samuel Oliva</span></h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
          Desarrollador Backend especializado en PHP y Bases de Datos, creando soluciones robustas y eficientes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#work" 
            className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
          >
            Ver mis proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;