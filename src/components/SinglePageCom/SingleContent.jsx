import React, { useEffect, useState } from "react";
// import Thumb from "../../assets/svg/lagos.svg";
import CloudSun from "../../assets/svg/Cloudy-Skies-Icon.svg";
import { useLocation } from "react-router-dom";
import { Main_URL } from "../../constents";
import {LoadingOutlined } from "@ant-design/icons";

const SingleContent = ({language}) => {
  const [singleData, setSingleData] = useState();
  const location = useLocation();

  const singledata = location?.state;
  // console.log("singledata", singledata);
  useEffect(() => {
    setSingleData(singledata);
  }, [singledata]);
  const createdAt = new Date(singleData?.createdAt);
  const formattedDate = createdAt.toLocaleString(); 
    console.log(singleData)

  return (
    <>
      <div className="halaContainer">

       {language === "english" ? 
       <div className="flex items-center justify-between flex-col md:flex-row gap-8 md:gap-16 pt-[60px] md:pt-[90px]">
          <div className="single-con-wrap flex flex-col gap-3 md:gap-6 w-full md:w-1/2">
            <h2 className="lato text-[28px] md:text-[35px] font-bold">
              {singleData?.Title_English}
            </h2>
            <p className="lato tracking-[7px] text-[10px] uppercase font-normal">
              {singleData?.country_english}
            </p>
            <pre className="lato text-[18px] mdtext-[21px] leading-[24px] text-balance font-[300]">
              {singleData?.long_description_english}
            </pre>
            <p className="montserrat text-[14px] leading-[22px] font-normal">
              {singleData?.day_english}, {formattedDate}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row items-center gap-2">
                <img src={CloudSun} alt="icon" />
                <h3 className="montserrat text-[24px] leading-[28px] font-semibold">
                  {singleData?.temperature_english}
                </h3>
              </div>
              <p className="montserrat text-[18px] leading-[28px] font-light ml-4">
                {singleData?.temp_status_english}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            {
              singleData?.single_page_image?.data?.attributes?.url ?
              <img 
                src={`${Main_URL}${singleData?.single_page_image?.data?.attributes?.url}`} 
                alt="map" 
                className="w-full h-full" 
              /> 
              :
              <LoadingOutlined style={{ fontSize: '72px', color: '#000'}} />
            } 
          </div>
        </div> 
        : 
        <div className="flex items-center justify-between flex-col md:flex-row-reverse gap-8 md:gap-16 pt-[60px] md:pt-[90px]">
          <div className="single-con-wrap flex flex-col gap-3 md:gap-6 w-full md:w-1/2 text-right">
            <h2 className="lato text-[28px] md:text-[35px] font-bold ">
              {singleData?.Title_Arabic}
            </h2>
            <p className="lato tracking-[7px] text-[10px] uppercase font-normal ">
              {singleData?.country_arabic}
            </p>
            <pre className="lato text-[18px] mdtext-[21px] leading-[29px] font-normal text-balance font-[300]">
              {singleData?.long_description_arabic}
            </pre>
            <p className="montserrat text-[14px] leading-[22px] font-normal ">
              {singleData?.day_arabic}, {formattedDate}
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row-reverse items-center gap-2">
                <img src={CloudSun} alt="icon" />
                <h3 className="montserrat text-[24px] leading-[28px] font-semibold ">
                  {singleData?.temperature_arabic}°
                </h3>
              </div>
              <p className="montserrat text-[18px] leading-[28px] font-light ml-4">
                {singleData?.temp_status_arabic}
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            {
              singleData?.single_page_image?.data?.attributes?.url ?
              <img 
                src={`${Main_URL}${singleData?.single_page_image?.data?.attributes?.url}`} 
                alt="map" 
                className="w-full h-full" 
              /> :
              <LoadingOutlined style={{ fontSize: '72px', color: '#000'}} />
            } 
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default SingleContent;
