import React from 'react'

const HeadingDescription = ({title,description}) => {
  return (
    <div className='space-y-3 '>
        <h2 className='text-blue-500 text-3xl md:text-5xl font-bold'>{title}</h2>
        <p className='text-[10px] md:text-xl'>{description}</p>
    </div>
  )
}

export default HeadingDescription