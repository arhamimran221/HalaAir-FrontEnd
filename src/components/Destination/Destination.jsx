import React from 'react'
import DestinationsCards from './DestinationsCards'
import cardBg from "../../assets/svg/DubaiBG.svg"
import istambul from "../../assets/svg/istambul.jpeg"
import tunis from "../../assets/svg/tunis.jpeg"
import egypt from "../../assets/svg/egypt.jpeg"

const Destination = ({language}) => {
  return (
    <>
    <div className={language==="english" ?`ha-inner-banner-destination py-[80px] md:py-[90px]`:`ha-inner-banner-destination-arabic py-[80px] md:py-[90px]`}>
      <div className={language === "english" ? "halaContainer flex justify-start" : "halaContainer flex justify-end"}>
        {language === "english" ? (
          <h1 className="text-white nonito-sans text-[22px] md:text-[32px] font-semibold md:font-extrabold w-full md:max-w-[550px]">
            Destinations 
          </h1>
        ) : (
          <>
            <h1 className="text-white font-arabic text-[20px] md:text-[26px] text-right font-semibold md:font-extrabold w-full md:max-w-[350px]">
            الأماكن
            </h1>
          </>
        )}
      </div>
    </div>
    <div className='halaContainer'>
      <div className="destinations-cards-main my-[15%] flex flex-wrap gap-[20px] items-center justify-center">
        <DestinationsCards heading="Explore Dubai" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={cardBg} width="35%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف دبي" />
        <DestinationsCards heading="Istanbul" des_destinat="Live like a local near areas you love." backgroundImage={istambul} width="25%" language={language} des_destinat_ar="عش مثل السكان المحليين بالقرب من المناطق التي تحبها" heading_ar="اسطنبول"/>
        <DestinationsCards heading="Explore Tunis" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={tunis} width="35%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف تونس"/>
        <DestinationsCards heading="Explore Egypt" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={egypt} width="35%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف مصر"/>
        <DestinationsCards heading="Explore Dubai" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={cardBg} width="25%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف دبي"/>
        <DestinationsCards heading="Istanbul" des_destinat="Live like a local near areas you love." backgroundImage={istambul} width="35%" language={language} des_destinat_ar="عش مثل السكان المحليين بالقرب من المناطق التي تحبها" heading_ar="اسطنبول"/>
        <DestinationsCards heading="Explore Tunis" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={tunis} width="35%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف تونس"/>
        <DestinationsCards heading="Explore Egypt" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={egypt} width="25%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف مصر"/>
        <DestinationsCards heading="Explore Dubai" des_destinat="200 hotels, 345 local flights and 234 bus providers" backgroundImage={istambul} width="35%" language={language} des_destinat_ar="200 فندق و345 رحلة طيران محلية و234 مزودًا للحافلات
" heading_ar="اكتشف دبي"/>
      </div>
    </div>
    </>

  )
}

export default Destination
