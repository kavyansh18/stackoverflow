import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar'

const Home = () => {
  return (
    <div className='home-container'>
      <LeftSidebar />
      <div className="home-conatiner-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
      
    </div>
  )
}

export default Home
