import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function NavLinks({ text, color, shadow, arrow, icon, hoverColor, subItems }) {
  return (
    <div 
      className={`relative ${color} text-[13.6px] font-bold lg:flex items-center hover:${hoverColor} hidden group`} 
      style={{
        wordSpacing: '0.4em',
        textShadow: `
          10px 4px 20px ${shadow}, 
          -10px 4px 20px ${shadow}, 
          10px -4px 20px ${shadow}, 
          -10px -4px 20px ${shadow}`
      }}  
    >
      {/* Main NavLink */}
      <div className="flex items-center">
        {icon === 'yes' && <FaStar className='mr-2' />}
        {text}
        {arrow !== 'no' && <IoIosArrowDown className='ml-3' />}
      </div>

      {/* Dropdown Box */}
      {subItems && (
        <div 
          className="absolute left-0 top-10 w-48 bg-[rgb(31,33,36)] text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition-all duration-300 z-10"
        >
          {subItems.map((item, index) => (
            <div
              key={index}
              className="py-1 px-2 text-xs text-gray-300 hover:text-[rgb(53,205,248)] hover:bg-[rgb(31,33,36)] rounded-md transition-all duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavLinks
