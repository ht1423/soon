import React from 'react'
import NavLinks from '../Navbar/NavLinks'
import { PiAtom } from "react-icons/pi";
import { BiCoin } from "react-icons/bi";
import SearchBar from '../Navbar/SearchBar';
import { MdExpand } from "react-icons/md";

function MiddlebarComp() {
  return (
    <div className='relative h-12 w-full bg-black items-center flex px-6  justify-evenly space-x-10 whitespace-nowrap'>
       
       <NavLinks text='NEW MINTS' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' arrow='no'/>
       <NavLinks text='1h 24h 7d' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' arrow='no'/>
       <PiAtom className='hidden lg:block text-gray-400 text-xl' />
       <BiCoin className='hidden lg:block text-gray-400 text-xl'/>
  
       <SearchBar text='Filter by collection'/>

       <NavLinks text='FILTERS' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' arrow='no'/>
       <NavLinks text='FAVORITES' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' arrow='no'/>
       <NavLinks text='INVENTORY' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' arrow='no' />

       <MdExpand className='text-white lg:hidden text-xl '/>

    </div>
  )
}

export default MiddlebarComp