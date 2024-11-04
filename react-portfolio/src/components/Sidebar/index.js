import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons'; // Correct import for LinkedIn and GitHub icons

import {
    faHome,
    faEnvelope,
    faSuitcase,
    faBars
} from '@fortawesome/free-solid-svg-icons'; // Solid icons imports
import React, { useState } from 'react'; // Import useState

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState); // Toggle the open state
    };

    return (
        <div className={`nav-bar ${isOpen ? 'open' : ''}`}> {/* Conditional class for open state */}
            <button className='hamburger-button' onClick={toggleSidebar}>
                <FontAwesomeIcon
                    icon={faBars}
                    color="#4d4d4e"
                    className="anchor-icon"
                />
            </button>
            <nav>
                <NavLink exact='true' activeclassname='active' className='home-link' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                {/* About page removed from sidebar until complete
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                */}
                <NavLink exact='true' activeclassname='active' className='project-link' to='/projects'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/justin-stutler-a72b961a8/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/JustinStutler"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
