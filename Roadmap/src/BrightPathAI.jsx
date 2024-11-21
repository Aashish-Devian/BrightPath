import React from 'react';
import Header from './components/Header';
import MainContent from './MainContent';
import RoleBasedRoadmaps from './RoleBasedRoadmaps';
import SkillsBasedRoadmaps from './SkillsBasedRoadmaps';
import Videos from './extra';
import PracticeForFree from './PracticeForFree';
import Footer from './components/Footer';


function BrightPathAI() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-6 pb-24 pl-4 bg-neutral-950">
      <Header />
      <MainContent />
      <RoleBasedRoadmaps />
      <SkillsBasedRoadmaps />
      <Videos/>
      <PracticeForFree/>
      <Footer/>
    </div>
  );
}

export default BrightPathAI;