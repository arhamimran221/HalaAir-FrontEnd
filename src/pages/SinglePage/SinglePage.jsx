import React from "react";
import "../../components/SinglePageCom/SinglePage.css";
import SinglePageBanner from "../../components/SinglePageCom/SinglePageBanner";
import SingleContent from "../../components/SinglePageCom/SingleContent";
import ExploreSection from "../../components/ExploreSection/ExploreSection";

const SinglePage = ({language}) => {
  return (
    <>
      <SinglePageBanner language={language} />
      <SingleContent language={language}/>
      <ExploreSection language={language}/>
    </>
  );
};

export default SinglePage;
