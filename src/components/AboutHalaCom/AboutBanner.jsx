import React, { useEffect, useState } from "react";
import { Main_URL } from "../../constents";

const AboutBanner = ({ language, AboutBannerData }) => {
  const [EngBannerTitle, setEngBannerTitle] = useState('About Hala Air');
  const [ArBannerTitle, setArBannerTitle] = useState('About Hala Air');

  const [EngBannerBg, setEngBannerBg] = useState('');
  const [ArBannerBg, setArBannerBg] = useState('');

  useEffect(()=>{
    if(AboutBannerData ) {
      setEngBannerBg(Main_URL+AboutBannerData[0]?.BannerBg?.data?.attributes?.url)
      setArBannerBg(Main_URL+AboutBannerData[1]?.BannerBg?.data?.attributes?.url)
  
      setEngBannerTitle(AboutBannerData[0]?.BannerTitle)
      setArBannerTitle(AboutBannerData[1]?.BannerTitle)
    }
   
  }, [AboutBannerData])

  const bannerStyle = {
    backgroundImage: `url(${language === "english" ? EngBannerBg : ArBannerBg})`,
  };

  return (
    <div 
      className={language === "english" && AboutBannerData ? 
      `ha-about-banner-eng py-[80px] md:py-[110px]` : 
      `ha-about-banner-arabic py-[80px] md:py-[100px]`}
      style={bannerStyle}>
      <div className={language === "english" ? "halaContainer flex justify-start" : "halaContainer flex justify-end"}>
        {language === "english" && AboutBannerData ? (
          <h1 className="text-left text-white nonito-sans text-[22px] md:text-[32px] font-semibold md:font-extrabold">
            {EngBannerTitle}
          </h1>
        ) : (
            <>
              {AboutBannerData && (
                <h1 className="font-arabic text-right text-white text-[28px] md:text-[36px] font-semibold md:font-extrabold">
                  {ArBannerTitle}
                </h1>
              )}
            </>
          )}
      </div>
    </div>
  );
};

export default AboutBanner;
