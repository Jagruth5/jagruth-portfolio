import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My <span className="text-blue-500">Skills</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Java", "React", "SQL", "Excel", "Tableau", "Power BI",  "Python", "GitHub Actions", 
              "Kubernetes", "TensorFlow", "Scikit-Learn" ," Pandas", "NumPy","Flask","Beautiful soupe","Selinium","Bootstrap","css"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;