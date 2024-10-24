import React, { useState } from 'react';
import './index.scss';
// Import your project components
import Playwright_Project from './components/playwright_project';
import PDF_to_Txt_Project from './components/pdf_to_text_project';
import Catan_Project from './components/catan_project';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [<Playwright_Project />, <PDF_to_Txt_Project />, <Catan_Project />];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='projects__container'>
      <div className='carousel'>
        <div className='carousel-content'>
          {projects[currentIndex]}
        </div>

        <div className='carousel-nav'>
          <button className='arrow left-arrow' onClick={handlePrev}>
            &lt;
          </button>
          <div className='carousel-dots'>
            {projects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <button className='arrow right-arrow' onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
