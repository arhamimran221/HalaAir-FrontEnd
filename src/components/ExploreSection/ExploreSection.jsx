import React, 
{ useEffect, useState } 
from "react";
import "./ExploreSection.css";
// import ExploreCard from "./ExploreCard";
import axios from "axios";
import { BASE_URL, Main_URL } from "../../constents";
import { useNavigate } from "react-router-dom";
// import ExploreApiData from "./ExploreApiData";\
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { 
  Autoplay,
  // Pagination, Navigation 
} from 'swiper/modules';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const ExploreSection = ({language}) => {

  const [ExploreData, setExploreData] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/explore-places?populate=*`)
      .then((res) => {
        // console.log("res.data", res?.data);
        setExploreData(res?.data?.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);


  const navigate = useNavigate();
  const sendDataSingle = (itemData) => {
    navigate(`/single`, { state: itemData });
  };
  
  return (
    <div className="halaContainer">
      <div className="mainExCard">
        {/* <ExploreCard />*/}

        <Swiper
          slidesPerView={4}
          // navigation={true}
          // modules={[Pagination, Navigation]}
          modules={[Autoplay]}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="Explore Slider"
        >

          {ExploreData?.map((item, ind) => {
            const backgroundImageUrl = `${Main_URL}${item?.attributes?.card_bg_image?.data[0]?.attributes?.url}`;
            const divStyle = {
              backgroundImage: `url(${backgroundImageUrl})`,
            };
            return (
              <SwiperSlide key={ind}>
              <div 
                className='CardExplore'
                style={divStyle}
              >
                {language === "english" ? 
                  <>
                    <h3 className="titleEx z-10"> {item?.attributes?.Title_English} </h3>
                    <div className="desbtn z-10 flex flex-row justify-between gap-2">
                      <p className="z-10"> {item?.attributes?.short_description_english} </p>
                      <a onClick={() => sendDataSingle(item?.attributes)} className="z-10">Explore</a>
                    </div>
                  
                  </>:
                  <>
                    <h3 className="titleEx z-10" dir="rtl"> {item?.attributes?.Title_Arabic} </h3>
                    <div className="desbtn z-10 flex flex-row-reverse justify-between gap-2">
                      <p className="z-10"> {item?.attributes?.short_description_arabic} </p>
                      <a onClick={() => sendDataSingle(item?.attributes)} className="z-10">يستكشف</a>
                    </div>
                  </>
                }
              </div>   
              </SwiperSlide>
            )})
          }
          
      </Swiper>
      </div>
    </div>
  );
};

export default ExploreSection;

