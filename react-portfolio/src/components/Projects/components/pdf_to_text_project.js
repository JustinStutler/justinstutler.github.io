import React, { useState, useEffect } from 'react';
import Resume_pdf from '../../../assets/pdfs/resume.pdf';
import Resume_txt from '../../../assets/txts/resume.txt';

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
            <h1>PDF-to-Text - Python</h1>
            <h3>Project Overview</h3>
            <p>
                I needed to get the text data from PDFs but was unable to just copy-paste.
                By utilizing Optical Character Recognition (OCR), the code I wrote can take a PDF file
                as an input and provide a text file containing the text data as output.
            </p>
            <h3>Technologies Used</h3>
            <p>
                Python, Tesseract OCR, pdf2image, PIL (Python Imaging Library).
            </p>
            <h3>Challenges and Solutions</h3>
            <p>
                One major challenge was ensuring the OCR could handle various PDF formats and text layouts.
                I needed to store the images in an array in the correct order to ensure the text data was processed accurately.
                Additionally, I implemented preprocessing steps to enhance image quality before the OCR processing.
            </p>
            <h3>Results</h3>
            <p>
                The project successfully extracts text from the provdied pdf document with high accuracy,
                enabling easier data retrieval and manipulation even in cases where access to the text data is not provided.
            </p>
            <h3>Code (available on GitHub)</h3>
            <pre>
                <code>{`
# import modules
from pdf2image import convert_from_path
from PIL import Image
import pytesseract

name = ''

# images [] stores images from pdf
images = convert_from_path(name + '.pdf')

# create list [] to store text
textList = []

for image in images:
    # grab text from images using Tesseract's OCR
    text = pytesseract.image_to_string(image)

    # add text to list []
    textList.append(text)

# Create and save text to a text file
with open(name + '.txt', 'w', encoding='utf-8') as file:
    for text in textList:
        file.write(text + '\n\n')  # Add extra newline for separation between pages
`}</code>
            </pre>
            <h3>PDF</h3>
            <div className="pdfDisplay">
                <iframe id="pdfViewer" src={Resume_pdf} frameBorder="0" title="Resume"></iframe>
            </div>
            <h3>PDF Text Content</h3>
            <pre>{resumeContent}</pre>
            <h3>Reflection</h3>
            <p>
                This project enhanced my understanding of OCR technology and its application in real-world
                scenarios. I learned about the challenges of text recognition and the importance of data
                preprocessing.
            </p>
        </div>
    );
};

export default PDF_to_Txt_Project;
