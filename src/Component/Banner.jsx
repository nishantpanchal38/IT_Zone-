import React from 'react'

function Banner() {
  return (
    <>
    <marquee className='bg-slate-900 text-white py-2 text-md font-semibold'
    scrollamount="10" direction="left">IT Zone - Laptop Repair | Desktop Service | Printer Fixing | Data Recovery | Low Cost | Sale Old Laptop | Buy New Laptop </marquee>
    {/* for propeerty grid */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

        {/* card 1 start.................... */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
        <div className="space-y-4">
        <p className='text-2xl md:text-3xl text-white'><span className='text-emerald-400'>Sale Your Laptop</span> </p>
        <p className='text-gray-300 leading-relaxed'>
            Sell your old laptop at the best price with IT Zone. We provide a quick, safe, and hassle-free way to turn your unused or outdated laptop into instant cash.
             Whether your device is new, used, or even slightly damaged, we offer fair market value based on its condition.
         </p>
        </div>

        <div className='flex gap-3 mt-4'>
            {/* Buttons start............... */}
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded gap-2'>
            Call Now
          </button>
          <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
            WhatsApp
        </button>
        {/* buttons end.................. */}
      </div>
      </div>
      {/* card 1 End.................... */}


    {/* Card 2 start....................... */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
        <div className="space-y-4">
        <p className='text-2xl md:text-3xl text-white'><span className='text-emerald-400'>Buy New Laptop</span> </p>
        <p className='text-gray-300 leading-relaxed'>“Explore a wide range of brand-new laptops from top brands with the latest technology, 
  high performance, and full warranty. Whether you need a laptop for work, study, gaming, 
  or business, we provide the best options at competitive prices. </p>
        </div>
        <div className='flex gap-3 mt-4'>
            {/* Buttons start............... */}
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded gap-2'>
            Call Now
          </button>
          <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
            WhatsApp
        </button>
        {/* buttons end.................. */}

        
      </div>
      </div>
      {/* Card 2 End....................... */}


    {/* Card 3 start....................... */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
        <div className="space-y-4">
        <p className='text-2xl md:text-3xl text-white'><span className='text-emerald-400'>Refurbished Laptop</span> </p>
        <p className='text-gray-300 leading-relaxed'>Get high-quality refurbished laptops at affordable prices. All devices are fully tested, 
        repaired, and optimized for performance. A perfect choice for students and professionals 
        looking for reliable laptops at a lower cost. </p>
        </div>
        <div className='flex gap-3 mt-4'>
            {/* Buttons start............... */}
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded gap-2'>
            Call Now
          </button>
          <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
            WhatsApp
        </button>
        {/* buttons end.................. */}

        
            

      </div>
      </div>
    {/* Card 3 End....................... */}


    {/* Card 4 start....................... */}
      <div className="bg-slate-900 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
        <div className="space-y-4">
        <p className='text-2xl md:text-3xl text-white'><span className='text-emerald-400'>Budget-Friendly IT Solutions</span> </p>
        <p className='text-gray-300 leading-relaxed'>We offer cost-effective repair and upgrade solutions to extend the life of your devices. 
  From hardware fixes to software optimization, our services are designed to give you the 
  best performance without spending too much. </p>
        </div>
        <div className='flex gap-3 mt-4'>
            {/* Buttons start............... */}
          <button className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded gap-2'>
            Call Now
          </button>
          <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-400 transition">
            WhatsApp
        </button>
        {/* buttons end.................. */}
      </div>
      
      </div>
    {/* Card 4 End....................... */}


    </div>
    </>
  )
}

export default Banner
