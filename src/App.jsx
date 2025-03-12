import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import About from './Components/About/About.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Projects from './Components/Projects/Projects.jsx';
import ContactMe from './Components/ContactMe/ContactMe.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <div className='App'>
        <NavBar toggleTheme={toggleTheme} theme={theme} />
        <section id="profile">
          <Profile />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects theme={theme} />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;