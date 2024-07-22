import React from 'react';
import ExploreSection from "../../ExploreSection/ExploreSection";
import ServicesSection from "./ServicesSectionCom";

const ComASections = ({language}) => {
  return (
    <>
       <div className="mt-[50px]"> <ExploreSection className="mt-[100px]" language={language} /></div>
        <ServicesSection language={language}/>
    </>
  )
}

export default ComASections