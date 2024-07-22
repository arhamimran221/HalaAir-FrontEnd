import React from 'react'
import FooterEng from './FooterEng'
import FooterArabic from './FooterArabic'

const MainFooter = ({language}) => {
  // console.log("languageff",language)
  return (
    <div>

      {language ==='english' ? 
      <FooterEng />:
      <FooterArabic />}
    </div>
  )
}

export default MainFooter