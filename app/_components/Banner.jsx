"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const Banner = () => {
  const [logoTitle,setLogoTitle]=useState();
  return (
    <>
    <div className='text-center space-y-3 mt-[90px] md:mt-[140px] h-[350px] md:h-[500px]'>
        <h2 className='text-blue-500 text-3xl md:text-5xl font-bold'>AI Logo Maker</h2>
        <h2 className='text-[14px] md:text-4xl font-medium'>Perfect Logos for Businesses,Projects and Apps</h2>
        <p className='text-[10px] md:text-xl'>Create stunning, professional logos effortlessly with our AI-powered tool—ideal for businesses, apps, and more!</p>
        <div className='pt-5 md:pt-8 md:space-x-1'>
            <input type="text" name="text" id="" placeholder='Enter your Logo Name' className='w-full md:w-[50%] border rounded-md h-[28px] md:h-[36px] pl-[9px] text-[10px] md:text-[15px] shadow-md focus:outline-none' 
            onChange={(event)=>setLogoTitle(event?.target.value)}
            />
            <Link href={'/create?logotitle='+logoTitle}>
            <Button className='mt-4 h-[30px] md:h-[36px]'>Get Started</Button>
            </Link>
        </div>
    </div>
    
    </>
  )
}

export default Banner