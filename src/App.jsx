import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Banner2 from './Component/Banner2'
import Logos from './Component/Logos'
import Services from './Component/Services'
import Footer1 from './Component/Footer1'
import ScrollButtons from './Component/ScrollButtons'


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
      <ScrollButtons />
      
      </div>
    </>
  )
}

export default App
