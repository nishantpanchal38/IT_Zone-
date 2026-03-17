import React from 'react'

function Navbar() {
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
                <a href="#about" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">About</a>
            </li>

            <li>
                <a href="#contact" className="transition hover:text-emerald-300 focus:text-emerald-300 text-lg">Contact</a>
            </li>
        </ul>
    </nav>

        {/* CTA Button */}
        <button className="hidden md:block rounded-md border border-emerald-400 bg-emerald-400 px-4 py-2 text-md font-semibold text-slate-900 transition hover:bg-emerald-300 hover:scale-110 transition-transform-200 cursor-pointer">
            Contact Us
        </button>

    {/* Mobile Menu Icon */}
    <button className="md:hidden text-2xl">
      ☰
    </button>

  </div>
</header>
    
    
    {/* Navbar Container End............................ */}
    
    </>
    
  )
}

export default Navbar
