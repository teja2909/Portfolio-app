import React from 'react';
import './styles/AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faBrain, faChartLine, faChartBar, faChartPie, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJava, faReact, faHtml5, faCss3, faBootstrap, faNodeJs, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';


const AboutMe = () => {
    return (
        <section className="about" id="about">
            <h2 className="title">About <span>Me</span></h2>
            
            {/* Education Section */}
            <h3>Education</h3>
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Institution</th>
                        <th>Degree</th>
                        <th>Year</th>
                        <th>CGPA/Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CVR College Of Engineering</td>
                        <td id='#btech'>B.Tech, <br/>CSE(AI & ML)</td>
                        <td>2022 - 2026</td>
                        <td>CGPA: 8.65/10.0</td>
                    </tr>
                    <tr>
                        <td>Gouthami Junior College, Telangana</td>
                        <td>Class XII - PCM</td>
                        <td>2020 - 2022</td>
                        <td>Percentage: 97.3%</td>
                    </tr>
                    <tr>
                        <td>Narayana High School, Telangana</td>
                        <td>Class X - PCM</td>
                        <td>Until 2020</td>
                        <td>GPA: 10.0/10.0</td>
                    </tr>
                </tbody>
            </table>
            
            {/* Skills Section */}
            <h3>Skills</h3>
            <div className="skills-container">
            <div className="skill-item"><FontAwesomeIcon icon={faPython} /> Python</div>
            <div className="skill-item"><FontAwesomeIcon icon={faJava} /> Java</div>
            <div className="skill-item"><FontAwesomeIcon icon={faDatabase} /> Oracle SQL</div>
            <div className="skill-item"><FontAwesomeIcon icon={faDatabase} /> MongoDB</div>
            <div className="skill-item"><FontAwesomeIcon icon={faHtml5} /> HTML</div>
            <div className="skill-item"><FontAwesomeIcon icon={faCss3} /> CSS</div>
            <div className="skill-item"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</div>
            <div className="skill-item"><FontAwesomeIcon icon={faReact} /> React.js</div>
            <div className="skill-item"><FontAwesomeIcon icon={faNodeJs} /> Node.js</div>
            <div className="skill-item"><FontAwesomeIcon icon={faJs} /> Express.js</div>
            <div className="skill-item"><FontAwesomeIcon icon={faBrain} /> Pandas</div>
            <div className="skill-item"><FontAwesomeIcon icon={faChartLine} /> Numpy</div>
            <div className="skill-item"><FontAwesomeIcon icon={faChartBar} /> Matplotlib</div>
            <div className="skill-item"><FontAwesomeIcon icon={faChartPie} /> Seaborn</div>
            <div className="skill-item"><FontAwesomeIcon icon={faRobot} /> Scikit-learn</div>
            <div className="skill-item"><FontAwesomeIcon icon={faGithub} /> GitHub</div>
            </div>
        </section>
    );
};

export default AboutMe;