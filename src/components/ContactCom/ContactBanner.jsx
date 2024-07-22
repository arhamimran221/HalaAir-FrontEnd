import React from "react";

const ContactBanner = ({ language }) => {
  return (
    <div className={language==="english" ?`ha-inner-banner-wrap py-[80px] md:py-[90px]`:`ha-inner-banner-wrap-arabic py-[80px] md:py-[90px]`}>
      <div className={language === "english" ? "halaContainer flex justify-start" : "halaContainer flex justify-end"}>
        {language === "english" ? (
          <h1 className="text-white nonito-sans text-[22px] md:text-[32px] font-semibold md:font-extrabold w-full md:max-w-[550px]">
            Convenience and speed in booking plane tickets with HalaAir
          </h1>
        ) : (
          <>
            <h1 className="text-white font-arabic text-[20px] md:text-[26px] text-right font-semibold md:font-extrabold w-full md:max-w-[350px]">
              راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactBanner;
