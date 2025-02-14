import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import logodesign from '../../_data/LogoDesign'

const LogoDesign = ({onHandleInputChange,formData}) => {
  const [selectedOption,setSelectedOption]=useState(formData?.design?.title);
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoDesign}
      description={Lookup.LogoDesignDes}
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-5'>
        {
          logodesign.map((design,index)=>(
            <div key={index}
            onClick={()=>{setSelectedOption(design.title)
              onHandleInputChange(design)
            }
            }

            className={`p-1 hover:border-2 cursor-pointer border-pink-400 rounded-xl ${selectedOption==design.title&&'border-2 rounded-xl border-pink-500'}`}
            >
              <img src={design.image} alt={design.title} width={300} height={200}
              className='w-full rounded-xl h-[150px] object-cover'
              />
              <h1 className='mt-[8px] font-medium'>{design.title}</h1>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default LogoDesign