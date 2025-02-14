import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation';

const LogoTitle = ({onHandleInputChange}) => {
    const searchParam = useSearchParams();
    const [title,setTitle]=useState(searchParam?.get('title')??'')
    return (
        <div>
            <HeadingDescription
                title={Lookup?.LogoTitle}
                description={Lookup?.LogoDescription}
            />
                 <div className='flex justify-center  pt-5 md:pt-8 md:space-x-1'>  
            <input type="text"  placeholder='Enter Logo Title' className='w-full md:w-[80%] border rounded-md h-[28px] md:h-[38px] pl-[9px] text-[10px] md:text-[15px] shadow-md focus:outline-none'
                defaultValue={title}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
            </div>
        </div>
    )
}

export default LogoTitle