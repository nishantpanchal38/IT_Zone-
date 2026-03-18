import React from 'react'

function Services() {
  return (
    <>
    <section id="services" className='scroll-mt-24'>
      <div>
        <div className=' text-2xl text-center bg-black  text-emerald-400 w-full p-2 mt-15 mb-5'>
        <p >Our Store Services provide a wide range of solutions to meet your needs.</p>
      </div>

    {/* Services Cards mother board reapair */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 ml-5 gap-6">
        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/motherboard-icon.png"
        alt="Motherboard Repair"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Motherboard Repair
        </p>

        </div>
      {/* Services Cards 2 */}

        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/screen-replacement.png"
        alt="Motherboard Repair"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Screen Repair
        </p>
        </div>

    {/* Services Cards 3 */}
        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/ssd-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        SSD Upgrade
        </p>
        </div>


    {/* Services Cards 4 */}

    <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/trackpad-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Touchpad Replacement
        </p>
        </div>

        {/* Services Cards 5 */}

        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/keyboard-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Keyboard Repair
        </p>
        </div>

        {/* Services Cards 6 */}
        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/battery-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Battery Replacement
        </p>
        </div>


    {/* Services Cards 7 */}
        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/screen-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Screen Replacement
        </p>
        </div>

    {/* Services Cards 8 */}
        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/motherboard-icon.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Motherboard Replacement
        </p>
        </div>


        {/* Services Cards 9 */}

        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/speaker-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Speaker Replacement
        </p>
        </div>


        {/* Services Cards 10 */}

        <div className="w-40 bg-slate-900 text-emerald-400 p-4 rounded-lg shadow-md text-center space-y-2 hover:scale-113 tarnsition-transform duration-200">
    
        <img
        src="https://www.lappymaker.com/assets/img/services/charging-port-replacement.png"
        alt="...Loading"
        className="w-16 h-16 mx-auto object-contain"
        />

        <p className="text-sm font-medium">
        Charging Port Replacement
        </p>
        </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Services
