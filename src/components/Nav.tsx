/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React, { useState } from 'react'
import { nxodetor } from '../../public/Assets'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaTimes} from "react-icons/fa"
import Link from 'next/link'
export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className='w-full h-[3rem] z-20 bg-[#0E0E0E] fixed top-0 left-0 flex justify-between items-center px-2 lg:px-8'>
      <div className='flex w-[80%] relative z-20 transition-all justify-start items-center gap-4'>
        <div>
          <Image src={nxodetor} alt=''/>
        </div>
        <p className='text-white-100 text-md'>{showMenu ? "Menu" : `We're on a Mission`}</p>
      </div>

      <p className='hidden lg:block text-white-100 text-md'>LOGO</p>

      {showMenu ? <FaTimes className='lg:hidden block relative z-20' size={20} onClick={()=>setShowMenu(!showMenu)}/> : <HiOutlineMenuAlt4 className='lg:hidden block relative z-20' size={20} onClick={()=>setShowMenu(!showMenu)}/>}
      
      <div className={`${showMenu ? "translate-x-0" : "translate-x-[-100%]"} w-full fixed flex bg-[#0E0E0E] justify-start items-center top-0 left-0 h-full transition-transform`}>
        <ul className='text-white capitalize w-full'>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Genesispass'>GENESIS PASS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Services'>SERVICES</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Project'>PROJECTS</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Nft'>NFT</Link></li>
          <li className='mt-6 text-lg leading-[18px] font-bold pl-5'><Link href='/Faq'>FAQ</Link></li>
          <li className='mt-6 flex w-full justify-between items'>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40'>PLATFORM</p>
          <p className='text-lg leading-[18px] font-bold pl-5 opacity-40 mr-2'>COMING SOON</p>
        </li>
        </ul>
      </div>
    </div>
  )
}
