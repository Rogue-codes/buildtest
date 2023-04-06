import Image from 'next/image'
import React from 'react'
import {FiUserPlus,FiServer,FiTarget} from 'react-icons/fi'

interface containerProps{
    title?: string
    header1:string
    header2:string
    header3:string
    text1:string
    text2:string
    text3:string
    img:string
    icon?: any
    flexcol?:boolean
}
export default function Container({title, header1, header2, text1, text2, text3, img, header3,flexcol, icon}:containerProps) {
  return (
    <div className='w-full'>
        <div className="container mt-[5.4rem]">
            <h2 className='headers text-4xl lg:text-6xl leading-10 mb-8 lg:leading-[8rem] capitalize mt-[3.75rem]'>{title}</h2>
            <div className={`${flexcol ? "flex-col" : "flex-col lg:flex-row"} flex items-start justify-start gap-5`}>
                <div className='flex flex-col lg:flex-row item-start justify-start gap-5'>
                    <div className={`${flexcol ? "w-full lg:w-[25rem]" : "w-full lg:w-[20rem]"}`}>
                    <h2 className='text-xl font-bold capitalize'>{header1}</h2>
                    <p className=' mt-2 text-md lg:text-lg font-normal leading-[30px]'>{text1}</p>
                    <FiUserPlus className='mt-8' size={20} color='#FFCC97'/>
                    </div>

                    <div className={`${flexcol ? "w-full lg:w-[25rem]" : "w-full lg:w-[20rem]"}`}>
                        <h2 className='text-xl font-bold capitalize'>{header2}</h2>
                        <p className=' mt-2 text-lg font-normal leading-[30px]'>{text2}</p>
                        <FiServer className='mt-8' size={20} color='#FFCC97'/>
                    </div>


                </div>


                <div className={`${flexcol ? "flex-col lg:flex-row pb-5" : "flex-col pb-0"} flex justify-end w-full gap-5 items-start`}>
                    <div className={`${flexcol && "w-full lg:w-[25rem]"}`}>
                        <Image src={img} alt=""/>
                    </div>

                    <div className={`${flexcol && "w-full lg:w-[20rem]"}`}>
                        <h2 className={`${flexcol ? "mt-0" : "mt-10"}  text-xl font-bold capitalize`}>{header3}</h2>{}
                        <p className='text-start mt-2 text-md lg:text-lg font-normal leading-[30px]'>{text3}</p>
                        <FiTarget className='mt-8' size={20} color='#FFCC97'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
