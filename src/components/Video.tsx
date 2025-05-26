
import React from 'react';
import myVideo from '/assets/videoresume.mp4';
import myThumb from '/assets/1612163876937.png';

const VideoResume: React.FC = () => {
  return (
    <section id="video-resume" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              My <span className="text-blue-500">Video Resume</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Here is a short video that highlights my background, skills, and ambitions as an ML Engineer.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-2xl shadow-lg rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-4">
              <video
                className="w-full rounded-xl"
                controls
                poster={myThumb}
              >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default VideoResume;