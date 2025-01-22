import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
//import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'
import Portrait from '../../assets/images/portrait.jpg'
import { useMediaQuery } from 'react-responsive';
import Resume from '../../assets/pdfs/resume.pdf';


const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isDesktop = useMediaQuery({ minWidth: 601 });


    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ', 'J', 'u', 's', 't', 'i', 'n', ' ', 'S', 't', 'u', 't', 'l', 'e', 'r']
    const jobArray = [
        'W',
        'e',
        'b',
        ' ',
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            {isMobile && (
                <div className="mobile-layout">
                    <div className="container home-page">
                        <div className='top'>
                            <div className='img-zone'>
                                <img className='portrait' src={Portrait}></img>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className="text-zone">
                                <h1>
                                    <span className={letterClass}>H</span>
                                    <span className={`${letterClass} _12`}>i</span>
                                    <span className={`${letterClass} _13`}>,</span>
                                    <br />
                                    <span className={`${letterClass} _14`}>I</span>
                                    <span className={`${letterClass} _15`}>'</span>
                                    <span className={`${letterClass} _16`}>m</span>
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={17}
                                    />
                                    <br />
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={jobArray}
                                        idx={31}
                                    />
                                </h1>
                                <h2>Full-Stack Development | Data Science | AI</h2>
                                <a href="/path-to-resume.pdf" download="My_Resume.pdf">
                                    <button className='flat-button'>Download Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isDesktop && (
                <div className="desktop-layout">
                    <div className="container home-page">
                        <div className='left'>
                            <div className="text-zone">
                                <h1>
                                    <span className={letterClass}>H</span>
                                    <span className={`${letterClass} _12`}>i</span>
                                    <span className={`${letterClass} _13`}>,</span>
                                    <br />
                                    <span className={`${letterClass} _14`}>I</span>
                                    <span className={`${letterClass} _15`}>'</span>
                                    <span className={`${letterClass} _16`}>m</span>
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={17}
                                    />
                                    <br />
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={jobArray}
                                        idx={31}
                                    />
                                </h1>
                                <h2>Full-Stack Development | Data Science | AI</h2>
                                <a href={Resume} download="Resume.pdf">
                                    <button className='flat-button'>Download Resume</button>
                                </a>
                            </div>
                        </div>
                        <div className='right'>
                            <div className='img-zone'>
                                <img className='portrait' src={Portrait}></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Home