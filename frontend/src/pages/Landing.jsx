import React from 'react'
import NavbarComp from '../components/Navbar/NavbarComp'
import Banner from '../components/Hero/Banner'
import SkeletonComp from '../components/Skeleton/SkeletonComp'
function Landing() {
  return (
    <div className="relative bg-black min-h-screen w-full">
        <NavbarComp />
        <Banner />
        <SkeletonComp />
    </div>
  )
}

export default Landing