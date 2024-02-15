'use client'

import { navbar } from '@/utils/const'
import Link from 'next/link'
import { useState } from 'react'
import { Close, MenuHambuerger } from './icons'

export default function NavbarCopy() {
  const [isOpenMenuHamburg, setIsOpenMenuHamburg] = useState(false)
  const [isClosingMenuHamburg, setIsClosingMenuHamburg] = useState(false)
  const handleIsOpenMenuHamburger = () => {
    if (isOpenMenuHamburg) {
      setIsClosingMenuHamburg(true)
      setTimeout(() => {
        setIsOpenMenuHamburg(false)
        setIsClosingMenuHamburg(false)
      }, 200)
    } else {
      setIsOpenMenuHamburg(true)
    }
  }
  return (
    <nav className='sticky top-0 left-0 right-0 bg-white py-2 px-10 md:px-20'>
      <div className='flex justify-between'>
        <figure className='text-left w-28'>
          <Link href='/'>logo</Link>
        </figure>
        <div className='md:flex gap-5 hidden md:w-52 justify-center'>
          {navbar.map((data, index) => (
            <Link href={data.src} key={index}>
              {data.title}
            </Link>
          ))}
        </div>
        <div className='font-semibold w-40 hidden md:flex md:justify-end gap-2'>
          <Link href='/login' className='text-[#8B8E99] hover:text-[#3858D6]'>
            Login
          </Link>
          <span className='text-[#8B8E99]'>|</span>
          <Link
            href='/register'
            className='text-[#8B8E99] hover:text-[#3858D6]'
          >
            Sign Up
          </Link>
        </div>
        <button className='md:hidden' onClick={handleIsOpenMenuHamburger}>
          <MenuHambuerger />
        </button>
      </div>
      {isOpenMenuHamburg && (
        <div
          className={`fixed z-10 top-0 left-0 right-0 bottom-0 md:hidden bg-black bg-opacity-20 bg-blend-darken ${
            isClosingMenuHamburg ? 'scale-out-tr' : 'scale-in-tr'
          }`}
        >
          <div className=' flex flex-col text-2xl items-center justify-center font-semibold  bg-white bg- w-full h-[100vh]'>
            <Link
              href='/'
              className='flex gap-2 items-center absolute left-2 top-4'
            >
              <span className='text-[#8B8E99] text-lg'>Lynx</span>
            </Link>
            <button
              onClick={handleIsOpenMenuHamburger}
              className={` p-1 icon icon-tabler icon-tabler-x absolute right-3 top-6 cursor-pointer text-[#8B8E99] ${
                isClosingMenuHamburg ? 'rotate-out' : ''
              }`}
            >
              <Close />
            </button>
            {navbar.map((data, index) => (
              <Link
                href={data.src}
                className=' text-left  m-6 text-[#8B8E99] hover:text-[#3858D6]'
                key={index}
                onClick={handleIsOpenMenuHamburger}
              >
                {data.title}
              </Link>
            ))}
            <div className='font-semibold flex gap-4 m-6'>
              <Link
                href='/login'
                className='text-[#8B8E99] hover:text-[#3858D6]'
                onClick={handleIsOpenMenuHamburger}
              >
                Login
              </Link>
              <span className='text-[#8B8E99]'>|</span>
              <Link
                href='/register'
                className='text-[#8B8E99] hover:text-[#3858D6]'
                onClick={handleIsOpenMenuHamburger}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
