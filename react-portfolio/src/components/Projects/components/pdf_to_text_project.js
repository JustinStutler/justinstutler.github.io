import pdfToAudioImg from '../../../assets/images/SignInPage.JPG';

const PDF_to_Txt_Project = () => {

    return (
        <div>
            <h1>PDF-Audio - Python</h1>
            <div className='image-container'>
                <img src={pdfToAudioImg} alt='failed to load img' />
            </div>
            <h3>Demo</h3>
            <a href='https://pdf-audio.netlify.app/'>Demo Here (please wait up to 1 minute for server to start)</a>
            <h3>Figma</h3>
            <a href='https://www.figma.com/design/45UcGXCof4wME3DiSKfKM3/Convert-Mobile-App-Design?node-id=0-1&t=facF4wPkPG8YFKVW-1'>View Design File</a>
            <h3>How to Use</h3>
            <ul>
                <li>Create an Account</li>
                <li>Upload a PDF</li>
                <li>Click the Convert Icon and wait to receive an audio playback</li>
            </ul>
            <h3>Project Overview</h3>
            <p>
                A web app that converts PDFs to audio using OCR technology. Users can securely upload documents and listen to them in high-quality audio format.
            </p>

            <h3>Technologies Used</h3>
            <ul>
                <li>React.js with Redux for frontend development</li>
                <li>Node.js/Express.js backend architecture</li>
                <li>MongoDB for data persistence</li>
                <li>Tesseract OCR for text extraction</li>
                <li>Sharp for image preprocessing</li>
                <li>Google Text-to-Speech (gTTS) for audio synthesis</li>
                <li>JWT for authentication</li>
                <li>pdf2image and PIL for PDF processing</li>
                <li>Axios for API integration</li>
            </ul>

            <h3>Technical Challenges</h3>
            <p>
                Enhanced text extraction accuracy from various PDF formats through Sharp preprocessing, custom Tesseract OCR configuration, and robust error handling.
            </p>

            <h3>Key Features</h3>
            <p>
                Secure authentication, PDF processing, accurate text extraction, and natural audio playback through an intuitive user interface.
            </p>
        </div>
    );
};

export default PDF_to_Txt_Project;
