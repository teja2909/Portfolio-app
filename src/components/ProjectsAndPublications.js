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
              <td>Car Quest - Input Feature-Based Car Recommendation System</td>
              <td>The “Car Quest” project aims to develop a comprehensive car recommendation system that assists users in finding suitable vehicles based on their preferences and requirements.</td>
            </tr>
            <tr>
              <td>AI Driven Traffic Management System</td>
              <td>AI-driven traffic management system integrating computer vision and machine learning to enhance traffic efficiency and safety.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProjectsAndPublications;
