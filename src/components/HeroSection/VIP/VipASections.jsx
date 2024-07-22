import React from 'react'
import ServicesVIP from "./ServicesVIP";
import tickMark from "../../../assets/svg/tickMark.svg";

const VipASections = ({language}) => {
  return (
    <>
       <div className="mt-[50px]"> 
        <ServicesVIP language={language}/>
       </div>
       <div className="flex max-w-[1440px] w-full mx-auto mt-[50px] flex-col lg:flex-row mb-[40px] ">
            <div className="w-[100%] lg:w-[50%] vip-bottom-sec h-[200px] lg:h-[312px]">
            </div>
            <div className="w-[100%] lg:w-[50%] bg-[#FC9744] px-16 py-8 flex flex-col items-end gap-7">
                <div className="font-arabic font-[700] text-[20px] lg:text-[36px] text-[#ffff]">
                    شبكة دولية
                </div>
                <div className="flex gap-[10px] items-center">
                    <p className="font-[600] text-[16px] font-arabic text-[#ffff]">
                    {" "}
                    مكتب تركيا 1
                    </p>
                    <div className="bg-[#F59223] rounded-full p-3 ">
                    <img src={tickMark} alt="" />
                    </div>
                </div>
                <div className="flex gap-[10px] items-center">
                    <p className="font-[600] text-[16px] font-arabic text-[#ffff]">
                    {" "}
                    مكتب تركيا 2{" "}
                    </p>
                    <div className="bg-[#F59223] rounded-full p-3 ">
                    <img src={tickMark} alt="" />
                    </div>
                </div>
                <div className="flex gap-[10px] items-center">
                    <p className="font-[600] text-[16px] font-arabic text-[#ffff]">
                    {" "}
                    مكتب تركيا 3{" "}
                    </p>
                    <div className="bg-[#F59223] rounded-full p-3 ">
                    <img src={tickMark} alt="" />
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default VipASections