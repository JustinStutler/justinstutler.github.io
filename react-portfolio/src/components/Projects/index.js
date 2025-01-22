import React, { useState, useRef } from 'react';
import './index.scss';
// Import project components
import Playwright_Project from './components/playwright_project';
import PDF_to_Txt_Project from './components/pdf_to_text_project';
// import Catan_Project from './components/catan_project'; // hidden until completed

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); 
  const projects = [<PDF_to_Txt_Project />, <Playwright_Project />]; {/* insert project components here */}

  const resetScroll = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      console.log("Scroll reset"); // Debugging line to ensure the function is called
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    resetScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    resetScroll();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    resetScroll();
  };

  return (
    <div className='projects__container'>
      <div className='carousel' ref={carouselRef}> {/* Attach ref here */}
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
                onClick={() => handleDotClick(index)}
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
