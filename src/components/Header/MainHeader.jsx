import React from 'react';
import HeaderEng from './HeaderEng';
import HeaderArbi from './HeaderArbi';
import './Header.css';

const MainHeader = ({language,setLanguage}) => {

  return (
    <div className="halaContainer">
      {language === 'english' ? (
        <HeaderEng setLanguage={setLanguage} />
      ) : (
        <HeaderArbi setLanguage={setLanguage} />
      )}
    </div>
  );
};

export default MainHeader;
