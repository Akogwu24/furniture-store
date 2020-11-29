import React from 'react'
import Banner from '../components/home/Banner'
import Gallery from '../components/home/Gallery'
import RecentProducts from '../components/home/RecentProducts'

function Home() {
  return (
    <div>
      <Banner />
      <RecentProducts />
      <Gallery />
    </div>
  )
}

export default Home
