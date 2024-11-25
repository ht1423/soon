import React from 'react'
import Navbar from './components/Navbar/NavbarComp'
import MiddlebarComp from './components/Middlebar/MiddlebarComp'
import SkeletonComp from './components/Skeleton/SkeletonComp'
import Banner from './components/Hero/Banner'

function App() {
  return (
    <div className='relative bg-black'>
      <Navbar/>
      <Banner/>
      <MiddlebarComp/>
      <SkeletonComp/>
    </div>
  )
}

export default App