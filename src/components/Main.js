import React from "react";
import './styles/Main.scss';
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import leetdp from './assets/leetdp.jpg'

const Main =() => {
    return(
        <div className="main">
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <h1> I'm Vorsu Teja Vigneshwar </h1>

                        <div class="role">
                            <h2 data-text="Software Engineer">Software Engineer</h2>
                        </div>
                        <div className="content">
                            <p>Currently pursuing B.Tech in Computer Science(Artificial Intelligence & Machine Learning) from CVR College Of Engineering. Passionate about Machine Learning, Web Development and solving real-world problems with innovative solutions.</p><br/>  
                        </div>
                        
                        {/* Social Icons with Links */}

                        <div className="icons">
                            <a href="mailto:tejavorsu2909@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mail className="icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/teja-vorsu/" target="_blank" rel="noopener noreferrer">
                                <LinkedIn className="icon"/>
                            </a>
                            <a href="https://github.com/teja2909" target="_blank" rel="noopener noreferrer">
                                <GitHub className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="main__img">
                     <img src={leetdp} alt="Profile" />
                </div>

            </div>
        </div>
    )
}

export default Main;