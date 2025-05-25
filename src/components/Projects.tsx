import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Snake Game",
    category: "Python",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Built an interactive snake game using Python classes and tkinter whith highest score",
    technologies: ["Tkinter","Files","Class"],
    link: "#"
  },
  {
    id: 2,
    title: "Animal invasion alerter",
    category: "Computer Vision",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Detect the animal that has invaded the farm and play suitable frequency of sound that scares the type of animal and also alert the farmer about the animal",
    technologies: ["YOLO","Twilio"],
    link: "#"
  },
  {
    id: 3,
    title: "Flight Deal Tracker",
    category: "Python ",
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Created a Python-based tool that scrapes flight data and notifies users of the best deals via email.",
    technologies: ["Beautiful soup","SMTP","Api"],
    link: "#"
  },
  {
    id: 4,
    title: "Lecture Summariser",
    category: "NLP",
    image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "record lecture audio and transcribe the audio and then summarise the lecture",
    technologies: ["Sounddevice", "openai whisper", "Transformers", "BART"],
    link: "#"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    category: "Data Visualization",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A dashboard for visualizing social media performance metrics with custom reporting and AI-driven insights.",
    technologies: ["React", "D3.js", "Python", "TensorFlow"],
    link: "#"
  },
  {
    id: 6,
    title: "Kidney Cancer detection",
    category: "Machine learning",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Developed a ML model using Random Forests to detect if there is a chance of kidney cancer or not",
    technologies: ["Numpy", "Pandas", "scikit-learn","Matplotlib", "Decesion Tree"],
    link: "#"
  }
];

const categories = ["All", ...Array.from(new Set(projectsData.map(project => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-500/80 text-white text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;