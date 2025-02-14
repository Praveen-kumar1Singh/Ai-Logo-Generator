import Footer from './_components/Footer'
import Navbar from './_components/Navbar'
import React from 'react'

const Provider = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>
            {children}
        </div>
        <Footer/>
        </div>
  )
}

export default Provider