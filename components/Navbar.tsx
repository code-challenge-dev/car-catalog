'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Auto Hub Logo"
            width={118}
            height={18}
            className="object-contain hover:scale-105 duration-150"
          />
        </Link>

        <CustomButton
          btnType="button"
          containerStyles="text-primary-blue hover:bg-primary-blue hover:text-white hover:shadow-md duration-500 rounded-full bg-white min-w-[130px]"
          title="Sign In"
        />
      </nav>
    </header>
  )
}

export default Navbar
