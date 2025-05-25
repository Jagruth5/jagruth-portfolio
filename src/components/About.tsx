import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Aspiring Data Scientist and have good coding skills , and ML Algorithms. Passionate about
building scalable and efficient solutions. Very fast and self learner and carry high confidence
            </p>
  
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me reading about new technologies, or contributing to 
              open-source projects. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-700 dark:text-gray-300">Bachelor's of Techonogy in Computer Science and Data Science<br />B V Raju Institute of Techonology</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">Hyderabad,India<br />Available for remote and hybrid work</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-700 dark:text-gray-300"><br /></p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interests</h3>
                <p className="text-gray-700 dark:text-gray-300">Interested AI and machine learning advancements, as well as developing innovative tech
solutions. Enthusiastic about continuous learning and solving complex technical challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;