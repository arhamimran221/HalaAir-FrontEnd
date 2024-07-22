import React from 'react'
import AboutBanner from '../AboutHalaCom/AboutBanner'
import AboutusSection from './AboutusSection'

const AboutUsTest = ({language,AboutBannerData}) => {
  return (
    <div>
        <AboutBanner language={language} AboutBannerData={AboutBannerData} />
        <AboutusSection/>
    </div>
  )
}

export default AboutUsTest
