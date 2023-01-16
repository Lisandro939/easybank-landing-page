import React from 'react'
import Image from 'next/image'
import Mockups from '../public/images/image-mockups.png'

export default function FirstInfo() {
  return (
    <div className="flex flex-row items-center justify-end w-screen h-full">
        <div className='flex flex-col items-start gap-10 w-[45%]'>
            <h1 className='text-6xl text-[rgb(45,49,77)]'>
                Next generation digital banking
            </h1>
            <p className='max-w-sm text-gray-400'>
                Take your financial life online. Your Easybank account will be one-stop-shop for spending,
                saving, budgeting, investing and much more.
            </p>
            <button className='font-semibold text-white px-6 py-2 rounded-3xl bg-gradient-to-r from-[#32D164] to-[#22D3EB] hover:opacity-60'>
                Request invite
            </button>
        </div>
        <div className="flex justify-end w-1/2 bg-[url('../public/images/bg-intro-desktop.svg')] bg-contain bg-no-repeat bg-left-top mr-[-100px] mt-[-100px] z-0">
            <Image alt='' src={Mockups} width={600} height={600} priority/>
        </div>
    </div>
  )
}
