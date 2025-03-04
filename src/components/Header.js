import React, { useState, useEffect } from "react";
import './styles/Header.scss';
import { Close, MenuBookOutlined } from "@mui/icons-material";

const Header = () => {
    const [active, setActive] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const showMenu = () => {
        setActive(!active);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.4 }); // Ensures section is at least 40% visible before changing highlight

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <div className="header">
            <div className="header__logo">
                <h1>Vorsu Teja Vigneshwar</h1>
            </div>

            <nav className={active ? "nav active" : "nav"}>
                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu} />
                    </div>

                    <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={showMenu}><b>Home</b></a></li>
                    <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={showMenu}><b>About Me</b></a></li>
                    <li><a href="#publications-projects" className={activeSection === "publications-projects" ? "active" : ""} onClick={showMenu}><b>Publications & Projects</b></a></li>
                    <li><a href="#resume" className={activeSection === "resume" ? "active" : ""} onClick={showMenu}><b>Resume</b></a></li>
                </ul>
            </nav>

            <div className="changer">
                <MenuBookOutlined className="menu" onClick={showMenu} />
            </div>
        </div>
    );
};

export default Header;
