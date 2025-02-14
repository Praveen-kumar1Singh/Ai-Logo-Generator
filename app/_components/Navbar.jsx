import React from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-2 flex justify-between items-center shadow-sm'>
            <Link href={'/'}><img src={'/Logo.svg'} alt='logo_' height={100} width={100} className='w-[60%] md:w-full md:h-[65px]'/></Link>
            <Button className='w-[30%] md:w-[15%] text-[10px] md:text-[15px] h-[30px] md:h-[36px]'>Get Started</Button>
        </div>
    </>
  )
}

export default Navbar