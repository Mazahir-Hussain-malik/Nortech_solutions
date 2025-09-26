import React from 'react';
import Header from './layout/Header';
import Topheader from './layout/Topheader';
import Hero from './components/Hero';
import "./App.css";
import Proffesional from './components/Professional';
import ServicesSlider from './components/Services';
import Itsolution from './components/Itsolutions';
import ScrollToTop from './components/Scrolltop';
import TeamSection from './components/Teamsection';
import ContactSection from './components/Contact';
import CaseStudyHero from './components/CasestudyHero';
import ProjectCards from './components/ProjectCards';
import WorkProcess from './components/Workprocess';
import LatestNews from './components/LatestNews';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div>
    <Topheader />
      <Header />
      <Hero />
      <Proffesional />
      <ServicesSlider />
      <Itsolution />
      <ScrollToTop />
      <TeamSection />
      <ContactSection />
      <CaseStudyHero />
      <ProjectCards />
      <WorkProcess />
      <LatestNews />
      <Footer />
    </div>
  )
}

export default App;