import React from "react";

const SinglePageBanner = ({ language }) => {
  return (
    <>
      <div className={language==="english" ? `ha-single-banner-wrap-english py-[80px] md:py-[90px]` : `ha-single-banner-wrap py-[80px] md:py-[90px]`}>
        <div
          className={
            language === "english"
              ? "halaContainer flex justify-start"
              : "halaContainer flex justify-end"
          }
        >
          {language === "english" ? (
            <h1 className="text-white nonito-sans text-center text-[22px] md:text-[32px] font-semibold md:font-extrabold w-full md:max-w-[550px] z-40 opacity-100">
              Convenience and speed in booking plane tickets with HalaAir
            </h1>
          ) : (
            <>
              <h1 className="text-white text-[28px] md:text-[36px] font-semibold md:font-extrabold w-full md:max-w-[350px] z-40 opacity-100">
                راحتی و سرعت در رزرو بلیط هواپیما با بیلیتو
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePageBanner;
