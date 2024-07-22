import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
// import ExploreSection from '../../components/ExploreSection/ExploreSection'
// import JourneyFares from '../../components/JourneyFares/JourneyFares'
import '../../index.css';

const Home = ({language}) => {
  return (
    <div>
      <HeroSection language={language} />
      {/* <ExploreSection language={language} /> */}
      {/* <ServicesSection language={language} /> */}
      {/* <JourneyFares language={language} /> */}
    </div>
  )
}

export default Home;