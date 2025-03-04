import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import ProjectsAndPublications from './components/ProjectsAndPublications';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <section id="home"><Main/></section>
      <section id="about"><AboutMe/></section>
      <section id="publications-projects"><ProjectsAndPublications/></section>
      <section id="resume"><Resume/></section>
      <Footer/>
    </div>
  );
}

export default App;
