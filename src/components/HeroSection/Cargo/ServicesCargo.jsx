import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, Main_URL } from "../../../constents";
// import GuideTours from "../../assets/svg/tour-guide.svg";
// import FlightOption from "../../assets/svg/flight-options.svg";
// import Religious from "../../assets/svg/religious-tours.svg";
// import Medical from "../../assets/svg/medical-team.svg";
import "../ServicesSection.css";

const ServicesCargo = ({language}) => {

  const [ServicesData, setServicesData] = useState();
  const [heading,setHeading] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/service-card-cargos?populate=*`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setServicesData(res?.data?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });

      axios
      .get(`${BASE_URL}/cargo-service-headings`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setHeading(res?.data?.data[0].attributes);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

console.log(heading)

  return (
    <>
    {
      language === "english" ?
      <>
        <div className="halaContainer">
          <div className="category-heading text-[16px]">{heading?.main_service_cargo}</div>
          <div className="offer-heading">{heading?.main_service_cargo_sub}</div>
          <div className="flex w-[90%] m-auto flex-col flex-wrap mb-[30px] gap-[50px] items-center justify-center mt-[50px] md:flex-col lg:flex-row">
          {ServicesData?.map((item, ind) => {
            return (
              <div className=" md:w-[100%] lg:w-[40%]" key={ind}>
                <div className="service-card">
                  <div className={item?.attributes?.Title_English === 'Medical insurance' ? 'service-img-medical' : 'service-img'}>
                    <img src={`${Main_URL}${item?.attributes?.service_image?.data?.attributes?.url}`} alt="" />
                  </div>
                  <div className="service-heading"> {item?.attributes?.Title_English} </div>
                  <div className="sevice-description">
                      {item?.attributes?.long_des_en}
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
            <div className="category-heading text-[24px]"> {heading?.main_service_cargo_ar} </div>
            <div className="offer-heading">{heading?.main_service_cargo_sub_ar}</div>
          </div>
          <div className="flex w-[90%] m-auto flex-col flex-wrap mb-[30px] gap-[50px] items-center justify-center mt-[50px] md:flex-col lg:flex-row">

          {ServicesData?.map((item, ind) => {
            return (
              <div className=" md:w-[100%] lg:w-[40%]" key={ind}>
                <div className="service-card">
                  <div className={item?.attributes?.Title_Arabic === 'Medical insurance' ? 'service-img-medical' : 'service-img'}>
                    <img src={`${Main_URL}${item?.attributes?.service_image?.data?.attributes?.url}`} alt="" />
                  </div>
                  <div className="service-heading"> {item?.attributes?.Title_Arabic} </div>
                  <div className="sevice-description">
                      {item?.attributes?.long_des_ar}
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

export default ServicesCargo;
