'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {

    const router=useRouter()
  return (
  <Image 
  alt="logo"
  className='hidden md:block cursor-pointer py-4 mx-2'
  height="110"
  width="110"
 src="/images/logotravel.png"
  />
  )
}

export default Logo
