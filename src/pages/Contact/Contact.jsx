import React from "react";
import "../../components/ContactCom/Contact.css";
import ContactBanner from "../../components/ContactCom/ContactBanner";
import GetinTouch from "../../components/ContactCom/GetinTouch";
import ExploreSection from "../../components/ExploreSection/ExploreSection";

const Contact = ({ language }) => {
  return (
    <>
      <ContactBanner language={language} />
      <GetinTouch language={language} />
      <ExploreSection language={language}/>
    </>
  );
}
export default Contact;
