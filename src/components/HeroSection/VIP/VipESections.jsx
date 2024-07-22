import React from 'react'
import ExploreSection from '../../ExploreSection/ExploreSection';
import ServicesVIP from "./ServicesVIP";

const VipESections = ({language}) => {
  return (
    <>
       <div className="mt-[50px]"> 
        <ServicesVIP language={language}/>
       </div>
       <ExploreSection language={language}/>
    </>
  )
}

export default VipESections;

