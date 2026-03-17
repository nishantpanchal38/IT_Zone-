import React from 'react'

function Logos() {
  return (
    <>
    <div>
      <div className='ml-5 text-2xl bg-black text-white w-40 p-2 rounded-3xl mt-10 mb-5'>
        <p >Our <span className='text-emerald-400 font-semibold'>featured</span></p>
      </div>

        <div className='flex flex-wrap gap-6 justify-evenly'>
            <div className='w-20 h-30 '
            ><img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Logo 1" 
            className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>

            <div className='w-20 h-30 '>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg" alt="" 
            className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>

            <div className='w-20 h-30 '>
                <img src="https://toppng.com/uploads/preview/dell-logo-png-11552846823awcq1jtvuw.png" alt="" 
                className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>

            {/* change logo from here to bottom  */}
            <div className='w-20 h-30 '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17_rBK25V2lLkCcSyd5fScPK6iU5vMgbriA&s" alt="" 
                className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>


            <div className='w-20 h-30 '>
                <img src="https://znzcell.com/wp-content/uploads/2025/08/LOGO-INFINIX.png" alt="" 
                className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>


            <div className='w-20 h-30 '>
                <img src="https://crystalpng.com/wp-content/uploads/2025/05/lenovo-logo.png" alt="" 
                className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div>


            {/* <div className='w-20 h-30 '>
                <img src="https://toppng.com/uploads/preview/dell-logo-png-11552846823awcq1jtvuw.png" alt="" 
                className='w-full h-full object-contain hover:scale-120 transition-transform duration-200' />
            </div> */}

        </div>
    </div>
    </>
  )
}

export default Logos
