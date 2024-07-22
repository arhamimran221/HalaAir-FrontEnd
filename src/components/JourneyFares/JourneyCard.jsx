import React from "react";
import "./JourneyFares.css";
import { useNavigate } from "react-router-dom";

const JourneyCards = (props) => {
  const cardStyle = {
    backgroundImage: `url(${props.bgimage})`,
  };
  const navigate = useNavigate();
  const sendDataSingle = (itemData) => {
    navigate(`/single`, { state: itemData });
  };
  return (
      <div className="journey-card" style={cardStyle}>
        <div className="flex flex-col gap-2">
          <div className="journey-heading">{props.heading}</div>
          <div className="journey-sub">
            <p> {props.headingDes} </p>
            <p> 
              <span className={props?.language === "english" ? 'text-[24px]' : 'text-[16px]'}>
                {
                  props?.language === "english" ? 
                  <> $ {props.price} </> :
                  <> {props.price} $ </>
                }
              </span> 
            </p>
          </div>
        </div>
        <div className="book-button">
          {
            props?.language === "english" ?
              <button className="my-2" onClick={() => sendDataSingle(props.item?.attributes)} >Book a Hotel</button> :
              <button className="my-2" onClick={() => sendDataSingle(props.item?.attributes)}> حجز فندق </button>
          }
        </div>
      </div>
  );
};

export default JourneyCards;
