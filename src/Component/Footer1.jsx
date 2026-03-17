import React from 'react'

function Footer1() {
  return (
    <>
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
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-emerald-400">Home</a></li>
            <li><a href="/about" className="hover:text-emerald-400">About</a></li>
            <li><a href="/services" className="hover:text-emerald-400">Services</a></li>
            <li><a href="/contact" className="hover:text-emerald-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-emerald-400 mb-3">Contact</h2>
          <p>Email: support@itzone.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: India</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 
        {new Date().getFullYear()} IT Zone. All rights reserved.
         {/* IT Zone. All rights reserved. */}
      </div>
    </footer>
      </div>
    </>
  )
}

export default Footer1
