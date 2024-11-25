import React from 'react';
import { CiStar } from "react-icons/ci";
import { GiQueenCrown } from "react-icons/gi";
import Section from './Section'
function CardsComp() {
  return (
    <div className="h-[270px] w-[300px] bg-[rgb(24,26,29)] rounded-lg flex flex-col items-center mt-10">
      <img
        src="https://i.pinimg.com/736x/71/4a/4e/714a4e1eb79722350ed6bc1fb491e927.jpg"
        className="h-16 w-16 -mt-6"
        alt="SMB"
      />
      
      <div className="flex items-center justify-center mt-4 space-x-2">
        <CiStar className='text-gray-600 text-2xl'/> 
        <div className="text-white font-bold text-sm">SMB Gen2</div>
        <GiQueenCrown className='text-xl text-yellow-300 ml-2'/> 
      </div>

      <div className="mt-2 text-[rgb(53,205,248)] font-bold text-xs tracking-wider">
        Spread: 3.97%
      </div>
      
      <div className="mt-4 w-full px-4 flex justify-between text-sm">
        <div className='space-y-3'>
            <Section main='27.90' sub='BUY NOW' color='text-[rgb(53,205,248)]'/>
            <Section main='352' sub='LISTED #'/>
            <Section main='137.205' sub='MARKET CAP'/>
        </div>
        <div className='space-y-3'>
            <Section main='26.91' sub='SELL NOW' color='text-[rgb(255,138,173)]'/>
            <Section main='7%' sub='LISTED %'/>
            <Section main='1.245' sub='24H VOLUME'/>
        </div>
      </div>
    </div>
  );
}

export default CardsComp;
