import React from 'react';
import ServicesCargo from "./ServicesCargo";
// import ExploreSection from "../../ExploreSection/ExploreSection";
// import international from "../../assets/svg/Internat-banner.svg";
import tickMark from "../../../assets/svg/tickMark.svg";

const CargoESections = ({language}) => {
  return (
    <>
    <div className="mt-[50px]"> 
        <ServicesCargo language={language}/>
    </div>
       <div className="flex max-w-[1440px] w-full mx-auto mt-[50px] flex-col lg:flex-row mb-[40px] ">
        <div className="w-[100%] lg:w-[50%] bg-[#FC9744] py-8 px-8 flex flex-col gap-2">
          <div className="montserrat font-[700] text-[20px] lg:text-[40px] text-[#ffff]">International network</div>
          <div className="flex gap-[10px] items-center font-[600] text-[14px] montserrat text-[#ffff] my-[10px] ml-[20px]">
           <div className="bg-[#F59223] rounded-full p-3 "><img src={tickMark} alt="" /></div> 
            <span> Turkey office 1 </span> 
          </div>
          <div className="flex gap-[10px] items-center font-[600] text-[14px] montserrat text-[#ffff] my-[10px] ml-[20px]">
           <div className="bg-[#F59223] rounded-full p-3 "><img src={tickMark} alt="" /></div> 
            <span> Turkey office 2 </span> 
          </div>
          <div className="flex gap-[10px] items-center font-[600] text-[14px] montserrat text-[#ffff] my-[10px] ml-[20px]">
           <div className="bg-[#F59223] rounded-full p-3 "><img src={tickMark} alt="" /></div> 
            <span> Turkey office 3 </span> 
          </div>
          
        </div>
        <div className="w-[100%] lg:w-[50%] cargo-international h-[200px] lg:h-[312px]">
          {/* <img src={international} alt="" /> */}
        </div>
       </div>
    
    </>
  )
}

export default CargoESections