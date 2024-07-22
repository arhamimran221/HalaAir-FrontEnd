import React from "react";
import fb from "../../assets/svg/fbicon.svg";
import instra from "../../assets/svg/instraicon.svg";
import twitter from "../../assets/svg/twittericon.svg";
import linkedin from "../../assets/svg/linkicon.svg";
import "./Footer.css";
import { LeftOutlined } from "@ant-design/icons";
const FooterArabic = () => {
  return (
    <>
      <div className="halaContainer">
        <div className="mainfooterCardArabic">
          <div className="arabicsocialCard">
            <img src={fb} alt="missing" className="iconCard" />
            <img src={instra} alt="missing" className="iconCard" />
            <img src={twitter} alt="missing" className="iconCard" />
            <img src={linkedin} alt="missing" className="iconCard" />
          </div>
          <div className="arabiccontactCard">
            <h3>تواصل معنا</h3>
            <div className="arabiccontactinfo">
              <h4>info@halaair.aero طرابلس - ليبيا</h4>
              <h5>
                <p>مكتب المبيعات</p> + 218 91 565 3535
              </h5>
            </div>
            <div className="arabiccontactinfo">
            <h5>
                {" "}
                <p>خدمة الزبائن</p> <span className="flex flex-col text-right">info@halaair.aero <text className="text-[#444544] font-[300] text-[14px]">+ 218 91 562 3535</text></span>
              </h5>
              <h5>
                <p>مكتب مبيعات اسطنبول</p>+ 90 545 206 8554
              </h5>
            </div>
          </div>
          <div className="arabicnewsCard">
            <h3>النشرة الإخبارية</h3>
            <h5>اشترك الآن</h5>
            <div className="inputCard">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="arabicsubscribeCard"
                dir="rtl"
              />
              <LeftOutlined className="arabicarrowCard" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EBEBEB] py-[20px] mt-8 md:mt-2">
        <div className="halaContainer">
          <p className="montserrat text-[14px] leading-[19.6px] font-normal text-right text-[#4F4F4F] mr-0 md:mr-14">
          © مكان حلمي 2022
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterArabic;
