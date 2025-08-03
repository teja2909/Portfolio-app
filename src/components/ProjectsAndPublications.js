import React from 'react';
import './styles/ProjectsAndPublications.scss';

const ProjectsAndPublications = () => {
  const handlePublicationClick = () => {
    window.open("https://ijerst.org/index.php/ijerst/article/view/517/472", "_blank"); 
  };

  return (
    <div>
      <section>
        <h3>Publications</h3>
        <table className="publications-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Journal/Conference</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Driven Traffic Management System using Computer Vision AND Machine Learning</td>
              <td>2025</td>
              <td>International Journal of Engineering Research and Science & Technology</td>
              <td>
                <button onClick={handlePublicationClick} className="clickme-btn">
                  Click me!
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Projects</h3>
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Olympics Data Analysis</td>
              <td>• Performed a comprehensive Data Analysis on Olympic datasets, uncovering trends in athlete performance,
                country-wise medal distributions and event statistics.</td>
            </tr>
            <tr>
              <td>Personal Portfolio Website</td>
              <td>• Designed and built a fully responsive Portfolio website using HTML, CSS, and JavaScript to showcase my
              skills, publications and projects.</td>
            </tr>
            <tr>
              <td>Personalized Travel Itinerary Planner (GenAI Powered)</td>
              <td>• Built an AI-powered travel assistant that generates custom travel plans using Generative AI based on user
              inputs.</td>
            </tr>
            <tr>
              <td>AI-Driven Traffic Management System</td>
              <td>•  Developed an AI-powered traffic monitoring system using computer vision and deep learning to optimize
              urban traffic flow.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProjectsAndPublications;
