import React from 'react'
import CardsComp from '../Cards/CardsComp'

function SkeletonComp() {
  return (
    <div className='w-full flex flex-wrap  py-10 px-8 gap-20 lg:gap-x-8 justify-evenly md:gap-8 relative items-center  '>
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