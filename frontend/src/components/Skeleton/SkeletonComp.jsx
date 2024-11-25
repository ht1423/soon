import React from 'react'
import CardsComp from '../Cards/CardsComp'

function SkeletonComp() {
  return (
    <div className='w-full h-screen flex flex-wrap bg-black py-10 px-8 overflow-y-auto gap-20 lg:gap-x-8  justify-evenly md:gap-8 relative items-center  whitespace-nowrap'>
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
      <CardsComp />
</div>


  )
}

export default SkeletonComp