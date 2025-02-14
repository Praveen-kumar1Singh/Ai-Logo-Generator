import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="bg-slate-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center space-x-3 md:space-x-6 mt-4 md:text-xl text-[12px]">
          <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>
        <p className="md:text-xl text-[12px] font-semibold mt-4">&copy; {new Date().getFullYear()} AI Logo Maker. All rights reserved.</p>
{/*         
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>
    </footer></>
  )
}

export default Footer