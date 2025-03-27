import './Navbar.css'
import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home'); // Default active link

    const [isClicked, setIsClicked] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link); // Update active link on click
    };

    const handleDownloadLinkClick = () => {
        setIsClicked(true)
    }

    return (

        <div className="header">
            <nav className="navbar navbar-expand-lg" id="navbar-scroll">
                <div className="container">
                    <a className="navbar-brand" href="#Home">
                        TS
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            {['Home', 'About', 'Skills', 'Experience', 'Work', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    className={`nav-link ${activeLink === link ? 'active' : ''}`}
                                    onClick={() => handleLinkClick(link)}
                                    href={`#${link}`}
                                >
                                    {link}
                                </a>
                            ))}
                            <a href='/assets/pdf/Thamaraiselvan python developer.pdf' className={`btn cv-btn ${isClicked ? 'down-btn-clicked' : ''}`} onClick={handleDownloadLinkClick} download="Thamaraiselvan_python_developer.pdf">
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;


// function Navbar() {
//     return (
//         <div className="header">
//             <nav className="navbar navbar-expand-lg ">
//                 <div className="container">
//                     <a class="navbar-brand" href="#">
//                         TS
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNavAltMarkup"
//                         aria-controls="navbarNavAltMarkup"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
//                         <div className="navbar-nav ms-auto">
//                             <a className="nav-link" aria-current="page" href="#home">
//                                 Home
//                             </a>
//                             <a className="nav-link" href="#">
//                                 About
//                             </a>
//                             <a className="nav-link" href="#">
//                                 Skills
//                             </a>
//                             <a className="nav-link" href="#">
//                                 Experience
//                             </a>
//                             <a className="nav-link" href="#">
//                                 Work
//                             </a>
//                             <a className="nav-link" href="#">
//                                 Contact
//                             </a>
//                             <a className="nav-link btn cv-btn" href="#">
//                                 Download CV
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar