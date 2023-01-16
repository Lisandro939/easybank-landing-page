import Image from 'next/image'
import React from 'react'
import Icon from '../public/images/logo.svg'

export default function Header() {

  const aStyle = 'hover:border-b-4 border-green-300 flex items-center h-full text-gray-400 hover:text-black cursor-pointer'

  return (
    <div className='flex flex-row items-center justify-between max-w-5xl w-full h-[70px] z-20 bg-white'>
        <button>
            <Image alt='' src={Icon} width={100} height={100}/>
        </button>
        <ul className='flex flex-row gap-4 h-full items-center'>
            <a className={aStyle}><p>Home</p></a>
            <a className={aStyle}><p>About</p></a>
            <a className={aStyle}><p>Contact</p></a>
            <a className={aStyle}><p>Blog</p></a>
            <a className={aStyle}><p>Careers</p></a>
        </ul>
        <button className='font-semibold text-white px-6 py-2 rounded-3xl bg-gradient-to-r from-[#32D164] to-[#22D3EB] hover:opacity-60'>
            Request invite
        </button>
    </div>
  )
}
