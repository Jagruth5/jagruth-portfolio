import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2021 - Present",
    description: [
      "Lead a team of 5 developers in building and maintaining enterprise-level React applications",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Architected microservices backend infrastructure using Node.js and GraphQL",
      "Reduced application load time by 60% through code optimization and lazy loading techniques"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    duration: "Mar 2018 - Dec 2020",
    description: [
      "Developed and maintained multiple client-facing web applications using React, TypeScript, and Node.js",
      "Built RESTful APIs and integrated with third-party services",
      "Implemented responsive designs ensuring cross-browser compatibility",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces"
    ]
  },
  {
    title: "Frontend Developer",
    company: "WebCraft Studios",
    duration: "Jun 2016 - Feb 2018",
    description: [
      "Created interactive user interfaces using JavaScript, HTML, and CSS",
      "Worked with the design team to implement responsive web designs",
      "Integrated web applications with backend services",
      "Participated in code reviews and pair programming sessions"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Vision",
    duration: "Sep 2014 - May 2016",
    description: [
      "Developed and maintained company website using HTML, CSS, and JavaScript",
      "Implemented responsive design principles ensuring mobile compatibility",
      "Assisted senior developers with bug fixes and feature implementations",
      "Participated in daily scrum meetings and sprint planning"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Work <span className="text-blue-500">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="ml-16 md:ml-0 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center mt-1 mb-3">
                      <span className="text-blue-500 font-medium">
                        {exp.company}
                      </span>
                      <span className="hidden sm:block mx-2 text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;