import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDescription = ({onHandleInputChange,formData}) => {
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoDesc}
        description={Lookup.LogoDesDescription}

        />
         <div className='flex justify-center  pt-5 md:pt-8 md:space-x-1'>  
            <input type="text" name="text" id="" placeholder='Describe The Vision Of Logo.' className='w-full md:w-[80%] border rounded-md h-[28px] md:h-[45px] pl-[9px] text-[10px] md:text-[15px] shadow-md focus:outline-none'
            defaultValue={formData?.desc}
            // value={formData?.desc}
                onChange={(e) => onHandleInputChange(e.target.value)}
            />
            </div>
    </div>
  )
}

export default LogoDescription