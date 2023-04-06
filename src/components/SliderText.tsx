import Image from 'next/image'
import React from 'react'
interface bannerProps{
    img:string
    ismobile?:boolean
}

export default function SliderText({img,ismobile}:bannerProps) {
  return (
    <div className={`${ismobile ? "h-[64px] lg:hidden block mt-16" : "hidden lg:block h-[46px] mt-[9rem]"} w-full`}>
        <Image src={img} className='w-full h-full' alt=""/>
    </div>
  )
}
