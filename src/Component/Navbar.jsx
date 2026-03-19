import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {/* Navbar Container Start............................ */}
    <header className="sticky top-0 z-50 bg-slate-900 text-slate-100  shadow-md">
        <div className="mx-auto flex w-full items-center justify-between px-4 py-3 md:px-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-emerald-400 text-slate-900 flex items-center justify-center font-bold">
            IT
            </div>
            <div>
                <p className="text-lg font-semibold leading-none">IT Zone</p>
                <p className="text-xs text-slate-300">Your Tech Hub</p>
            </div>
            </a>

            {/* Nav Links */}
    <nav>
        <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
                <a href="#home" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">Home</a>
            </li>

            <li>
                <a href="#services" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">Services</a>
            </li>

            <li>
                <a href="#feature" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">Feature</a>
            </li>

            <li>
                <a href="#about" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">About</a>
            </li>
        </ul>
    </nav>

        {/* CTA Button */}
        <button onClick={
            ()=> 
                // for whatsapp link....................
                window.open(
                "https://wa.me/918708413226?text=Hello%20I%20am%20interested%20in%20your%20services",
                "_blank"
            )
        }
        className="hidden md:flex items-center gap-2 rounded-md border border-emerald-400 bg-emerald-400 px-3 py-2 text-md font-semibold text-slate-900 transition hover:bg-emerald-300 hover:scale-110 duration-200 cursor-pointer">
            <FaWhatsapp size={20} /> WhatsApp

        </button>

    {/* Mobile Menu Icon */}
    <button 
          className="md:hidden text-2xl cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
    </div>
        {/* Mobile Menu */}
        {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-4 space-y-4 text-center">

          <a href="#home" onClick={()=>setIsOpen(false)} className="block text-lg hover:text-emerald-300">Home</a>
          <a href="#services" onClick={()=>setIsOpen(false)} className="block text-lg hover:text-emerald-300">Services</a>
          <a href="#feature" onClick={()=>setIsOpen(false)} className="block text-lg hover:text-emerald-300">Feature</a>
          <a href="#about" onClick={()=>setIsOpen(false)} className="block text-lg hover:text-emerald-300">About</a>

          {/* Mobile WhatsApp Button */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/91?text=Hello%20I%20am%20interested%20in%20your%20services",
                "_blank"
              )
            }
            className="flex items-center justify-center gap-2 w-full rounded-md bg-emerald-400 px-3 py-2 text-slate-900 font-semibold cursor-pointer"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </button>

        </div>
        )}
</header>
    
        
    
    {/* Navbar Container End............................ */}
    
    </>
    
  )
}

export default Navbar
