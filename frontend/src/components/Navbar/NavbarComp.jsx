import React from 'react'
import ConnectWallet from './ConnectWallet'
import { Link } from 'react-router-dom'

function NavbarComp() {
  return (
    <div className=' h-14 w-full bg-black items-center flex px-6 md:px-12 lg:px-16 justify-between space-x-6 sticky z-50 top-0 whitespace-nowrap'>

        <a href='/'><img src='https://res.cloudinary.com/ddsqjzrow/image/upload/v1732554557/Logomy_l38zac.png' className='h-8 '></img></a>

        <div className='flex items-center space-x-8 md:space-x-12 font-bold  cursor-pointer'>
          <Link to='/create' className='text-white hover:text-[rgb(72,202,251)] '>Create NFT</Link>
          <ConnectWallet/>
        </div>
    </div>
  )
}

export default NavbarComp