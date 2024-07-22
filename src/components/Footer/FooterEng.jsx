import React from "react";
import fb from "../../assets/svg/fbicon.svg";
import instra from "../../assets/svg/instraicon.svg";
import twitter from "../../assets/svg/twittericon.svg";
import linkedin from "../../assets/svg/linkicon.svg";
import arrow from "../../assets/svg/angleright.svg";
import "./Footer.css";
const FooterEng = () => {
  return (
    <>
      <div className="halaContainer">
        <div className="mainfooterCard">
          <div className="socialCard">
            <img src={fb} alt="missing" className="iconCard" />
            <img src={instra} alt="missing" className="iconCard" />
            <img src={twitter} alt="missing" className="iconCard" />
            <img src={linkedin} alt="missing" className="iconCard" />
          </div>
          <div className="contactCard">
            <h3>Contact us</h3>
            <div className="contactinfo">
              <h5>info@halaair.aero Tripoli - Libya</h5>
              <h5>
                <p>Sales Office</p> + 218 91 565 3535
              </h5>
            </div>
            <div className="contactinfo">
              <h5>
                {" "}
                <p>Customer Service</p> <span className="flex flex-col">info@halaair.aero <text className="text-[#444544] font-[300] text-[14px]">+ 218 91 562 3535</text></span>
              </h5>
              <h5>
                <p>Istanbul Sales Office</p> + 90 545 206 8554
              </h5>
            </div>
          </div>
          <div className="newsCard">
            <h3>Newsletter</h3>
            <h5>Subscribe now</h5>
            <div className="inputCard">
              <input
                type="email"
                placeholder="Your Email"
                className="subscribeCard"
              />
              <img src={arrow} alt="" className="arrowCard" />
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EBEBEB] py-[20px] mt-8 md:mt-2">
        <div className="halaContainer">
          <p className="montserrat text-[14px] leading-[19.6px] font-normal text-right text-[#4F4F4F] mr-0 md:mr-14">
            © my Dream Place 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterEng;
