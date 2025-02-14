"use client"
import * as React from "react"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import HeadingDescription from "./HeadingDescription"
import Lookup from "@/app/_data/Lookup"
import { SignInButton, useUser } from "@clerk/nextjs"


const PriceModel = ({formData}) => {
  const {user} = useUser();
  useEffect(()=>{
    if(formData?.title && typeof window !== 'undefined')
    {
      localStorage.setItem('formData',JSON.stringify(formData))
    }
  },[formData])
  return (
    <>
      <div className="my-10">
        <HeadingDescription
          title={Lookup.AIPlanTitle}
          description={Lookup.AiPlaneDesc}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">

        {
          Lookup.pricingOption.map((price, index) => (
            <div key={index} className="flex flex-col items-center p-5 border rounded-2xl">
              <img src={price.icon} alt={price.title}
                width={60}
                height={60}
              />
              <h2 className="font-medium text-2xl">{price.title}</h2>
              <div>
                {price.features.map((feature,index)=>(
                  <h2 className="text-lg text-start mt-3" key={index}>{feature}</h2>
                ))}
              </div>
              {
                user?  <Button className='mt-9'>{price.button}</Button>:
                <SignInButton mode='modal' forceRedirectUrl={"/generate-logo?type"+price.title}><Button className='mt-9'>{price.button}</Button></SignInButton>

              }
            </div>

          ))
        }
      </div>
    </>
  )
}

export default PriceModel
