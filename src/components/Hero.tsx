import React from 'react';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-500">Jagruth Reddy</span>
              <span className="block mt-2">Aspiring ML Engineer</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={handleContactClick}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Contact Me
              </button>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-500">
              <img
                src=""
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;