import React from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import CreativeStack from '../Components/CreativeStack';
import SelectedProjects from '../Components/SelectedProjects';
import Footer from '../Components/Footer';


const HomePage = () => {
  return (
    <div className="bg-[#0a0f1a] min-h-screen font-sans selection:bg-blue-500/30">
      {/* <NavBar /> */}
      <main>
        <Hero />
        <CreativeStack />
        <SelectedProjects />
      </main>
    </div>
  );
};

export default HomePage;