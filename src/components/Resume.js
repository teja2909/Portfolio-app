import React from 'react';
import './styles/Resume.scss'

const Resume = () => {
  return (
    <div>
        <section class="resume" id="resume">
        <h2 class="title">My <span>Resume</span></h2>
        <div class="resume-container">
            {/* <Embed Resume Locally> */}
            <embed src="Vorsu_Teja_Vigneshwar_Resume.pdf" title="Vorsu Teja Vigneshwar Resume" width="100%" height="500" />
        </div>
        <div className="download-btn">
          <a href="Vorsu_Teja_Vigneshwar_Resume.pdf" download>
            Download Resume
          </a>
        </div>
    </section>
    </div>
  )
}

export default Resume
