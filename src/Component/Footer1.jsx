import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";

function Footer1() {
  return (
    <>
    <section id="about" className='scroll-mt-24'>
      <div>
        <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">IT Zone</h2>
          <p className="text-sm leading-relaxed">
            Your trusted laptop & desktop repair center. Fast, reliable and affordable services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">Quick Links</h2>
          <ul className="space-y-2 ">
            {/* <li><a href="/" className="hover:text-emerald-400">Home</a></li>
            <li><a href="/about" className="hover:text-emerald-400">About</a></li>
            <li><a href="/services" className="hover:text-emerald-400">Services</a></li>
            <li><a href="/contact" className="hover:text-emerald-400">Contact</a></li> */}
            <li><a href="" className="flex items-center gap-2 hover:text-emerald-400"><SiInstagram /> Instagram</a></li>
            <li><a href="" className="flex items-center gap-2 hover:text-emerald-400"><FaFacebook /> Facebook</a></li>
            {/* <li><a href="/about" className="hover:text-emerald-400"><SiInstagram /></a></li>
            <li><a href="/about" className="hover:text-emerald-400"><SiInstagram /></a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">Contact</h2>
          <p>Email: support@itzone.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
          <div className="w-full h-54 rounded-lg overflow-hidden">
            {/* for google map */}
            <iframe
            src="https://www.google.com/maps?q=Delhi&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
           </div>
        </div>
        

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 
        {new Date().getFullYear()} Developed by Apexpath pvt. Ltd. All rights reserved.
         {/* IT Zone. All rights reserved. */}


         
      </div>
    </footer>
      </div>
      </section>
    </>
  )
}

export default Footer1
