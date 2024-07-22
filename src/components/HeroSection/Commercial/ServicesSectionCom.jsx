import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, Main_URL } from "../../../constents";
import "../ServicesSection.css";

const ServicesSection = ({language}) => {

  const [ServicesData, setServicesData] = useState();
  const [heading,setHeading] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/services-cards?populate=*`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setServicesData(res?.data?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });

      axios
      .get(`${BASE_URL}/main-category-headings`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setHeading(res?.data?.data[0].attributes);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  return (
    <>
    {
      language === "english" ?
      <>
        <div className="halaContainer">
          <div className="category-heading text-[16px]">{heading?.main_category_heading_en}</div>
          <div className="offer-heading">{heading?.main_category_subheading_en}</div>
          <div className="service-cards">
          {ServicesData?.map((item, ind) => {
            return (
              <div className="servicecard-main w-full md:w-1/4" key={ind}>
                <div className="service-card">
                  <div className={item?.attributes?.Title_English === 'Medical insurance' ? 'service-img-medical' : 'service-img'}>
                    <img src={`${Main_URL}${item?.attributes?.icon_image?.data?.attributes?.url}`} alt="" />
                  </div>
                  <div className="service-heading"> {item?.attributes?.Title_English} </div>
                  <div className="sevice-description">
                      {item?.attributes?.short_description_english}
                  </div>
                </div>
              </div>
            )})
          }
          </div>
        </div> 
      </> :
      <>
        <div className="halaContainer">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="category-heading text-[24px]"> {heading?.main_category_heading_ar} </div>
            <div className="offer-heading">{heading?.main_category_subheading_ar}</div>
          </div>
          <div className="service-cards">

          {ServicesData?.map((item, ind) => {
            return (
              <div className="servicecard-main w-full md:w-1/4" key={ind}>
                <div className="service-card">
                  <div className={item?.attributes?.Title_Arabic === 'التأمين الطبي' ? 'service-img-medical' : 'service-img'}>
                    <img src={`${Main_URL}${item?.attributes?.icon_image?.data?.attributes?.url}`} alt="" />
                  </div>
                  <div className="service-heading"> {item?.attributes?.Title_Arabic} </div>
                  <div className="sevice-description">
                      {item?.attributes?.short_description_arabic}
                  </div>
                </div>
              </div>
            )})
          }
          </div>
        </div> 
      </>
    }
    </>
  );
};

export default ServicesSection;
