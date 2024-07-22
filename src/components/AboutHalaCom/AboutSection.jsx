import React, { useState, useEffect } from "react";
// import AbputSecImage from "../../assets/svg/about-sec-eng.svg";
import { Main_URL } from "../../constents";
import {LoadingOutlined } from "@ant-design/icons";

const AboutSection = ({language, AboutConData}) => {
  const [EngAboutCon, setEngAboutCon] = useState();
  const [ArAboutCon, setArAboutCon] = useState();

  const [EngAboutImage, setEngAboutImage] = useState();
  const [ArAboutImage, setArAboutImage] = useState();

  useEffect(()=> {
      if(AboutConData) {
        setEngAboutCon(AboutConData[0])
        setArAboutCon(AboutConData[1])

        setEngAboutImage(Main_URL+AboutConData[0]?.About_Content_Image?.data?.attributes?.url)
        setArAboutImage(Main_URL+AboutConData[1]?.About_Content_Image?.data?.attributes?.url)
      }
  }, [AboutConData])
    
  return (
    <section className="halaContainer">
      { language === 'english' ?
          <div className="py-12 lg:py-20 flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              {EngAboutCon?.About_Content_Text?.map((item, ind) => {
                return (
                  <div className="flex flex-col gap-2" key={ind}>
                    <h3 className="lato text-[22px] md:text-[28px] font-bold"> {item?.Heading} </h3>
                    <p className="lato text-[16px] font-normal">
                      {item?.Text}
                    </p>
                  </div>
                )})}
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              { EngAboutImage ? 
                <img src={EngAboutImage} alt="" className="w-full h-full" /> :
                <LoadingOutlined style={{ fontSize: '72px', color: '#000'}} />
              }
            </div>
          </div>
        : 
        <div className="py-12 lg:py-20 flex flex-col-reverse lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            { ArAboutImage ? 
              <img src={ArAboutImage} alt="" className="w-full h-full" /> :
              <LoadingOutlined style={{ fontSize: '72px', color: '#000'}} />
            }
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {ArAboutCon?.About_Content_Text?.map((item, ind) => {
              return (
                <div className="flex flex-col gap-5" key={ind}>
                  <h3 className="font-arabic text-[22px] md:text-[28px] font-bold text-right"> {item?.Heading} </h3>
                  <p className="font-arabic text-[16px] font-normal text-right">
                    {item?.Text}
                  </p>
                </div>
              )})}
          </div>
        </div>
      }
    </section>
  );
};

export default AboutSection;

