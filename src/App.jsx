import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Banner2 from './Component/Banner2'
import Logos from './Component/Logos'
import Services from './Component/Services'
import Footer1 from './Component/Footer1'

function App() {
  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <Banner2 />
      <Banner />
      <Logos />
      <Services />
      <Footer1 />
      </div>
    </>
  )
}

export default App
