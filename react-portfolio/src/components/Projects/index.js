import React, { useState } from 'react';
import './index.scss';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelectPDF = () => {
        // Define what happens when the button is clicked
        alert("Select PDF button clicked for " + projects[currentIndex].title);
    };


    const projects = [
        {
            id: 1,
            title: 'PDF-to-Text',
            description: 'I needed to get the text data from PDFs but was unable to just copy-paste. By utilizing Optical Character Recognition (OCR), the code I wrote can take a PDF file as an input and provide a text file containing the text data as output.',
            selectPDFBtn: 'Select PDF', // Button text for Project Two
        },
        {
            id: 2,
            title: '(QA) Playwright Practice',
            description: 'While applying for jobs, I encountered a Quality Assurance position that had a coding assessment. By utilizing Playwright, a QA software, the code I wrote navigates to Hackernews.com/articles and validates the first 120 articles are listed from oldest to newest.',
            imgSrc: 'path/to/image3.jpg' // Replace with your image path
        },
        {
            id: 3,
            title: 'Catan-Stat-Tracker',
            description: 'During my college experience at USF, I was involved in the Board Game Club as well as their Catan League. I developed a website that could track some game statistics for the League. By utilizing MySQL and PostgreSQL, the database can retain the information.',
            buttonText: 'Visit Me', // Button text for Project Two
            buttonLink: '#' // Link for the button
        }
    ];

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
                    <h2>{projects[currentIndex].title}</h2>
                    <p>{projects[currentIndex].description}</p>
                    {projects[currentIndex].imgSrc && (
                        <img src={projects[currentIndex].imgSrc} alt={projects[currentIndex].title} />
                    )}
                    {projects[currentIndex].buttonText && (
                        <a href={projects[currentIndex].buttonLink} className='project-button'>
                            {projects[currentIndex].buttonText}
                        </a>
                    )}
                    {projects[currentIndex].selectPDFBtn && (
                        <button onClick={handleSelectPDF} className='project-button'>
                            {projects[currentIndex].selectPDFBtn}
                        </button>
                    )}
                </div>
                <div style={{ textAlign: 'center', color: '#ffd700', fontSize: '24px', marginTop: '50px' }}>
                    Work in Progress... Come Back Soon
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
