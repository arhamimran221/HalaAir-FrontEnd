import React from 'react'
import "./Destination.css"

const DestinationsCards = ({language ,...props}) => {
  
  const bgDestinationImage = () => {
    return {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 31.6%, rgba(0, 0, 0, 0.52) 73.45%),url(${props?.backgroundImage})`,
        backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 31.6%, rgba(0, 0, 0, 0.52) 73.45%)', 
        backgroundSize: 'cover',
        width: props?.width,
        maxHeight: '347px',
        overflow:'auto',
    };
};
    
  return (
    <>
   {language==="english" ?
   <div className='destination-card bg-no-repeat rounded-lg pb-[2%] px-6 flex  pt-[25%] items-end justify-between' style={bgDestinationImage()}>
      <div className="text-[#fff] lato w-[55%]"><p className='title-destination'>{props?.heading}<span className='text-[#FC9744]'>.</span></p>

      <p className='destination-des lato py-3'>{props?.des_destinat}</p>
      </div>
      <div className="destination-button w-[45%] text-[#fff] flex justify-end">
        <a className='w-[80%]'>Explore</a>
     </div>
    </div>
    :
    <div className='destination-card bg-no-repeat rounded-lg pb-[2%] px-6 flex  pt-[25%] items-end justify-between flex-row-reverse	' style={bgDestinationImage()}>
    <div className="text-[#fff] lato w-[55%]"><p className='title-destination-ar'><span className='text-[#FC9744]'>.</span>{props?.heading_ar}</p>

    <p className='destination-des-ar lato py-3'>{props?.des_destinat_ar}</p>
    </div>
    <div className="destination-button w-[45%] text-[#fff] flex justify-end">
      <a className='w-[80%]'>يستكشف</a>
   </div>
  </div>}
    </>
  )
}

export default DestinationsCards
