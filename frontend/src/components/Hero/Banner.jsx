import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
const Banner = () => {
  const[isCollapse,setCollapase] = useState(true);
  return (
    <div className=" overflow-hidden">

    <div className={`h-[calc(100vh/2)] w-full ${isCollapse? "block" : "hidden"} `} >
      <div className="h-full w-full">
        <img 
          className="h-full w-full object-cover " 
          src="https://res.cloudinary.com/ddsqjzrow/image/upload/v1732185219/Black_and_Pink_Neon_Modern_Gaming_Event_Banner-min_kg26z4_c_crop_ar_16_9_2_a0ze3w.png" 
          alt="Gaming Event Banner" 
        />
      </div>
    </div>
      <h1 className="font-kode  text-center text-4xl text-white animate-pulse font-extrabold mt-4 leading-4 tracking-wider">
            Solana's Leading NFT Marketplace
      </h1>

      
        <div className='flex flex-row text-white font-kode text-center items-center justify-center mt-5 gap-4'>
            <p>CARDS</p>
            <ToggleButton/>
            <p>TABLE</p>
            <button onClick={()=>{setCollapase(!isCollapse)}} className={`${isCollapse ? 'rotate-0' : 'rotate-180'}`}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" focusable="false"  aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path></svg>
            </button>
        </div>
    </div>


    
  );
};

export default Banner;