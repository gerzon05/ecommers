'use client'

import { navbar } from '@/utils/const'
import Link from 'next/link'
import { useState } from 'react'
import { Close, MenuHambuerger, Shop, ShopCars, User } from './icons'

export default function Navbar() {
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
    <>
      <nav className='sticky z-20 top-0 left-0 right-0 bg-white py-2 px-10 md:px-20'>
        <div className='flex justify-between'>
          <figure className='text-left w-28'>
            <Link href='/'>logo</Link>
          </figure>
          <div className='md:flex gap-2 lg:gap-5 hidden md:w-52 justify-center'>
            {navbar.map((data, index) => (
              <Link href={data.src} key={index}>
                {data.title}
              </Link>
            ))}
          </div>
          <div className='font-semibold w-52 hidden md:flex md:justify-end lg:gap-2'>
            <User />
            <Link href='/login' className='text-[#8B8E99] hover:text-[#3858D6]'>
              Login
            </Link>
            <span className='text-[#8B8E99] px-1'>|</span>
            <Link
              href='/register'
              className='text-[#8B8E99] hover:text-[#3858D6]'
            >
              Sign Up
            </Link>
            <Link href='/'>
              <ShopCars width='w-6' />
            </Link>
          </div>
          <button className='md:hidden' onClick={handleIsOpenMenuHamburger}>
            {isOpenMenuHamburg ? (
              <Close style={isClosingMenuHamburg ? 'rotate-out' : ''} />
            ) : (
              <MenuHambuerger />
            )}
          </button>
        </div>
      </nav>
      {isOpenMenuHamburg && (
        <div
          className={`fixed left-0 w-full top-11 bottom-0 z-20 bg-white ${
            isClosingMenuHamburg ? 'scale-out-tr' : 'scale-in-tr'
          }`}
        >
          <div className='flex flex-col text-2xl items-center justify-center font-semibold h-full'>
            <div className='flex flex-col items-center'>
              {navbar.map((data, index) => (
                <Link
                  href={data.src}
                  className=' text-left  m-4 text-[#8B8E99] hover:text-[#3858D6]'
                  key={index}
                  onClick={handleIsOpenMenuHamburger}
                >
                  {data.title}
                </Link>
              ))}
            </div>
            <div className='font-semibold flex justify-center gap-4 m-6'>
              <User />
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
            <Link href='/' className='block'>
              <ShopCars width='w-12' />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
