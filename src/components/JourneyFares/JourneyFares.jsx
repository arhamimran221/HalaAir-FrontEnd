import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, Main_URL } from "../../constents";
import JourneyCards from './JourneyCard'
// import Melbourne from "../../assets/svg/melbourne.svg";
// import Paris from "../../assets/svg/Paris.svg";
// import London from "../../assets/svg/London.svg";
// import Columbia from "../../assets/svg/Columbia.svg";

const JourneyFares = ({language}) => {
  const [BookingData, setBookingData] = useState();


  useEffect(() => {
    axios
      .get(`${BASE_URL}/booking-cards-arabics?populate=*`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setBookingData(res?.data?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className='halaContainer'>
      <div className="journey-cards-main">
      {BookingData?.map((item, ind) => {
        return (
          <>
            {
              language === "english" ?
              <>
                <JourneyCards 
                  key={ind}
                  bgimage={`${Main_URL}${item?.attributes?.card_bg_image?.data?.attributes?.url}`} 
                  heading={item?.attributes?.Title_English} 
                  headingDes={item?.attributes?.short_description_english}
                  price={item?.attributes?.price_english}
                  item={item} 
                  language={language}
                />
              </> :
              <>
                <JourneyCards 
                  key={ind}
                  bgimage={`${Main_URL}${item?.attributes?.card_bg_image?.data?.attributes?.url}`} 
                  heading={item?.attributes?.Title_Arabic} 
                  headingDes={item?.attributes?.short_description_arabic}
                  price={item?.attributes?.price_arabic} 
                  item={item}
                  language={language}
                />
              </>
            }
          </>
        )})}
      </div>
    </div>
  )
}

export default JourneyFares




