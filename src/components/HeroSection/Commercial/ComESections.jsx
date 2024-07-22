import React from 'react';
import ServicesSection from './ServicesSectionCom';
import ExploreSection from "../../ExploreSection/ExploreSection";
import JourneyFares from "../../JourneyFares/JourneyFares";

const ComESections = ({language}) => {
  return (
    <>
        <div className="mt-[50px]"> <ExploreSection className="mt-[100px]" language={language} /></div>

        <ServicesSection language={language}/>

        <JourneyFares language={language}/>
    </>
  )
}

export default ComESections