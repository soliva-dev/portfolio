import React from 'react';

const AboutSection = () => {
  const currentSkills = [
    'PHP', 'MySQL', 'HTML', 'JavaScript', 'CSS', 
    'SQL', 'jQuery', 'AJAX', 'Laravel', 'Symfony',
    'Git', 'Composer'
  ];

  const learningSkills = [
    'Node.js', 'SASS', 'React', 'MongoDB', 
    'NoSQL', 'API REST', 'NestJS'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Un poco sobre mí</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-6">
                Trabajo en Legajos Online, un sistema de gestión de recursos humanos para empresas, desde Junio 2024.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Actualmente estoy estudiando PHP para mejorar mis habilidades en el desarrollo backend y poder realizar tareas automatizadas que generen eficiencia dentro de mi campo de trabajo.
              </p>
              <p className="text-lg text-gray-600">
                Además, estoy realizando una carrera de Desarrollo Web FullStack para ampliar mis conocimientos en desarrollo, tanto front como back. Me interesa mucho colaborar en proyectos open-source enfocados en sistemas backend y desarrollo web.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tecnologías y Herramientas</h3>
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-3">Dominio actual:</h4>
                <div className="flex flex-wrap gap-3">
                  {currentSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Aprendiendo actualmente:</h4>
                <div className="flex flex-wrap gap-3">
                  {learningSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;