import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jagruth Reddy. All rights reserved.
          </p>
          
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;