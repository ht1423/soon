import React from 'react'
import { IoMdSearch } from "react-icons/io";

function SearchBar({text}) {
  return (
    <div className='h-7 w-[40em] border border-zinc-700 rounded-lg flex text-zinc-400 items-center px-2 whitespace-nowrap tracking-wider'>
        <IoMdSearch />
        <div className='ml-5 font-semibold text-sm text-gray-500'>{text}</div>
    </div>
  )
}

export default SearchBar