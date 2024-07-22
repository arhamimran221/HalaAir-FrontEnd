import React, { useState, useEffect } from 'react';
import "../../components/AboutHalaCom/AboutHalaAir.css"
import AboutBanner from '../../components/AboutHalaCom/AboutBanner'
import AboutSection from '../../components/AboutHalaCom/AboutSection';
import axios from "axios";
import { BASE_URL } from "../../constents";


const AboutHalaAir = ({language}) => {
    const [AboutBannerData, setAboutBannerData] = useState();
    const [AboutConData, setAboutConData] = useState();

    useEffect(() => {
        axios
          .get(`${BASE_URL}/about-page-contents`)
          .then((res) => {
            
            let about_en_banner = res?.data?.data[0]?.attributes?.About_Banner;
            let about_en_con_data = res?.data?.data[0]?.attributes?.About_Content_Data;

            let about_ar_banner = res?.data?.data[0]?.attributes?.localizations?.data[0]?.attributes?.About_Banner;
            let about_ar_con_data = res?.data?.data[0]?.attributes?.localizations?.data[0]?.attributes?.About_Content_Data;

            setAboutBannerData([about_en_banner, about_ar_banner])
            setAboutConData([about_en_con_data, about_ar_con_data])
          })
          .catch((error) => {
            // console.error("Error", error);
          });
    }, []);

  return (
    <>
        <AboutBanner language={language} AboutBannerData={AboutBannerData} />
        <AboutSection language={language} AboutConData={AboutConData} />
    </>
  )
}

export default AboutHalaAir