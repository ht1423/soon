import React from 'react'
import Logomy from './Logomy.png'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'
import Menu from './Menu'
import ConnectWallet from './ConnectWallet'
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className='relative h-12 w-full bg-black items-center flex px-6 pl-24 justify-evenly space-x-6 whitespace-nowrap'>

        <img src={Logomy} className='h-6 absolute left-4'></img>

        <div className='lg:flex items-center ml-12 space-x-6 hidden whitespace-nowrap' >
            <NavLinks text='COLLECTIONS' color='text-[rgb(53,205,248)]' shadow='rgb(53, 205, 248,0.4)' arrow='no' />
            <NavLinks text='TRADE' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' subItems={["NFTS", "INSCRIPTIONS"]}/>
            <NavLinks text='PRICE LOCK' color='text-gray-400' hoverColor='text-[rgb(53,205,248)]' subItems={["YOUR LOCKS", "CALCULATOR", "LOCK FEED"]}/>
            <NavLinks text='REWARDS' color='text-[rgb(255,138,173)]' icon='yes' shadow='rgb(255,138,173, 0.4)' subItems={["TENSORIANS", "LEADERBOARD", "EARN POINTS", "REFERRALS", "GIB BACK"]}/>
        </div>

        <SearchBar text='Search collection / wallet'/>
        <Menu/>
        <ConnectWallet/>
        <div className='hidden xl:block text-white'>
           <IoIosArrowDown className='ml-[-20px]'/>
        </div>
    </div>
  )
}

export default Navbar