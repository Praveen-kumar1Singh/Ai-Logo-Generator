import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

const LogoPallet = ({onHandleInputChange,formData}) => {
    const [selectedOption,setSelectedOption]=useState(formData?.palette);
  return (
    <div className='my-10'>
        <HeadingDescription
        title={Lookup.LogoPalletTitle}
        description={Lookup.LogoPalletDescription}
        />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {
            Colors.map((palette,index)=>(
                <div className={`flex cursor-pointer ${selectedOption==palette.name&&'border-2 rounded-sm p-[2px] border-purple-950'}`} key={index}>
                    {
                        palette?.colors.map((color,index)=>(
                            <div className='h-24 w-full'
                            key={index}
                            onClick={()=>{setSelectedOption(palette.name);
                                onHandleInputChange(palette.name)
                            }}
                            style={{
                                backgroundColor:color
                            }}
                            >
                                </div>
                        ))
                    }
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default LogoPallet