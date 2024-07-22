import React, { useState } from "react";
import "./HeroSection.css";
import CargoEBanner from "./Cargo/CargoEBanner";
import CargoABanner from "./Cargo/CargoABanner";
import CargoESections from "./Cargo/CargoESections";
import CargoASections from "./Cargo/CargoASections";
import ComEBanner from "./Commercial/ComEBanner";
import ComABanner from "./Commercial/ComABanner";
import ComASections from "./Commercial/ComASections";
import ComESections from "./Commercial/ComESections";
import VipEBanner from "./VIP/VipEBanner";
import VipABanner from "./VIP/VipABanner";
import VipESections from "./VIP/VipESections";
import VipASections from "./VIP/VipASections";

const HeroSection = ({language}) => {
  const [activeTab, setActiveTab] = useState("Commercial");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
  <>
    <div className="herobanner">
      <div className="tabsCard">
        <div
          className={`tabMenu ${
            activeTab === "Commercial" || activeTab === "تجاري" ? "selectedTab" : ""
          }`}
          onClick={() => handleTabClick(`${language === "english" ? "Commercial"  : "تجاري"}`)}
        >
           {language === "english" ? <> Commercial </> : <> تجاري </>}
        </div>
        <div
          className={`tabMenu ${activeTab === "Cargo" || activeTab === "البضائع" ? "selectedTab" : ""}`}
          onClick={() => handleTabClick(`${language === "english" ? "Cargo"  : "البضائع"}`)}
        >
          {language === "english" ? <> Cargo </> : <> البضائع </>}
        </div>
        <div
          className={`tabMenu ${activeTab === "VIP" || activeTab === "كبار الشخصيات" ? "selectedTab" : ""}`}
          onClick={() => handleTabClick(`${language === "english" ? "VIP"  : "كبار الشخصيات"}`)}
        >
          {language === "english" ? <> VIP </> : <> كبار الشخصيات </>}
        </div>
      </div>

      { language === 'english' ?
        <> 
          {(activeTab === "Commercial" || activeTab === "تجاري") &&(
            <ComEBanner language={language} />
    
          )}
          {(activeTab === "Cargo" || activeTab === "البضائع") && (
              <CargoEBanner language={language} />
          )}
          {(activeTab === "VIP" || activeTab === "كبار الشخصيات") && (
              <VipEBanner language={language} />
          )}
        </> :
        <>
          {(activeTab === "Commercial" || activeTab === "تجاري") &&(
            <ComABanner language={language} />
          )}
          {(activeTab === "Cargo" || activeTab === "البضائع") && (
              <CargoABanner language={language} />
          )}
          {(activeTab === "VIP" || activeTab === "كبار الشخصيات") && (
              <VipABanner language={language} />
          )}
        </>
      }

      {/* Render content based on the selected tab */}
     
    </div>

    { language === 'english' ?
      <> 
        {(activeTab === "Commercial" || activeTab === "تجاري") &&(
          <> <ComESections language={language} /> </>
        )}
        {(activeTab === "Cargo" || activeTab === "البضائع") && (
          <> <CargoESections language={language} /> </>
        )}
        {(activeTab === "VIP" || activeTab === "كبار الشخصيات") && (
           <> <VipESections language={language} /> </>
        )}
      </> :
      <>
        {(activeTab === "Commercial" || activeTab === "تجاري") &&(
           <> <ComASections language={language} />  </>
        )}
        {(activeTab === "Cargo" || activeTab === "البضائع") && (
           <> <CargoASections language={language} />  </>
        )}
        {(activeTab === "VIP" || activeTab === "كبار الشخصيات") && (
            <>
            <VipASections language={language} />  
            </>
        )}
      </>
      }
  </>
  );
};

export default HeroSection;
