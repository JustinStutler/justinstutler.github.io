import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Resume from '../../assets/pdfs/resume.pdf'

// import env vars
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        console.log(userId, templateId, serviceId);  // Check if these values are correct

        emailjs
            .sendForm(serviceId, templateId, form.current, userId)
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className='left'>
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            Feel free to reach out using the form below whether it's just to say hello or you're interested in working with me.
                        </p>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                        <input placeholder="Name" type="text" name="name" required />
                                    </li>
                                    <li className="half">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            name="subject"
                                            required
                                        />
                                    </li>
                                    <li>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className="flat-button" value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div class="pdfDisplay">
                        <iframe id="pdfViewer" src={Resume} frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact