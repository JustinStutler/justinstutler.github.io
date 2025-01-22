import React, { useState, useEffect } from 'react';
import Resume_pdf from '../../../assets/pdfs/resume.pdf';
import Resume_txt from '../../../assets/txts/resume.txt';
import pdfToAudioImg from '../../../assets/images/SignInPage.JPG';
import pdfToTxtVideo from './pdf_to_txt_video.mp4'; // Adjust the path if needed

const PDF_to_Txt_Project = () => {
    const [resumeContent, setResumeContent] = useState('');

    useEffect(() => {
        const fetchResumeText = async () => {
            const response = await fetch(Resume_txt);
            const text = await response.text();
            setResumeContent(text);
        };
        fetchResumeText();
    }, []);

    return (
        <div>
            <h1>PDF-Audio - Python</h1>
            <div className='image-container'>
                <img src={pdfToAudioImg} alt='failed to load img' />
                <a href='https://pdf-audio.netlify.app/'>Demo Available Here</a>
            </div>
            <h3>How to Use</h3>
            <ul>
                <li>Create an Account</li>
                <li>Upload a PDF</li>
                <li>Click the Convert Icon and wait to receive an audio playback</li>
            </ul>
            <h3>Project Overview</h3>
            <p>
                This web application transforms PDF documents into high-quality audio playback using advanced Optical Character Recognition (OCR) technology. The platform provides a secure, user-authenticated environment for document processing and audio conversion, enabling efficient consumption of written content through audio format.
            </p>

            <h3>Technologies Used</h3>
            <p>
                React.js with Redux for frontend development, Node.js/Express.js backend architecture, MongoDB for data persistence, Tesseract OCR for text extraction, Sharp for image preprocessing, and Google Text-to-Speech (gTTS) for audio synthesis. Additional tools include JWT for authentication, pdf2image and PIL for PDF processing, and Axios for API integration.
            </p>

            <h3>Technical Challenges and Solutions</h3>
            <p>
                A significant technical hurdle involved optimizing the accuracy of text extraction from diverse PDF formats. This was addressed through implementation of image preprocessing using Sharp to enhance document quality, integration of Tesseract OCR with custom configuration for improved text recognition, and development of a robust error handling system for various PDF formats.
            </p>

            <h3>Implementation Results</h3>
            <p>
                The application successfully delivers secure user authentication, efficient PDF processing, high-accuracy text extraction, and natural-sounding audio playback. Users can manage their documents through an intuitive interface, upload PDFs for processing, and access generated audio content. The system maintains exceptional accuracy in text extraction while producing clear, natural speech synthesis output.
            </p>
        </div>
    );
};

export default PDF_to_Txt_Project;
