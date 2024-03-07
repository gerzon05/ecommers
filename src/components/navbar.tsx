'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Close, Down, MenuHambuerger, ShopCars, Top, User } from './icons'
import { Button } from './ui'
import { navbar } from '@/utils/const'

interface NavbarProps {
  NINAS: boolean | string
  NINOS: boolean | string
  BEBES: boolean | string
  OFERTAS: boolean | string
}

export default function Navbar() {
  const [isOpenMenuHamburg, setIsOpenMenuHamburg] = useState(false)
  const [isClosingMenuHamburg, setIsClosingMenuHamburg] = useState(false)
  const [navSelect, setNavSelect] = useState<NavbarProps>({
    NINAS: false,
    NINOS: false,
    BEBES: false,
    OFERTAS: false,
  })

  const handleNavSelect = (optionsnav: string) => {
    setNavSelect(prev => ({
      ...prev,
      NINAS: optionsnav === 'NIÑAS' && prev.NINAS === false,
      NINOS: optionsnav === 'NIÑOS' && prev.NINOS === false,
      BEBES: optionsnav === 'BEBÉS' && prev.BEBES === false,
      OFERTAS: optionsnav === 'OFERTAS' && prev.OFERTAS === false,

    }))
  }

  const handleIsOpenMenuHamburger = () => {
    if (isOpenMenuHamburg) {
      setIsClosingMenuHamburg(true)
      setTimeout(() => {
        setIsOpenMenuHamburg(false)
        setIsClosingMenuHamburg(false)
      }, 200)
    }
    else {
      setIsOpenMenuHamburg(true)
    }
  }
  return (
    <>
      <nav className="sticky z-50 top-0 left-0 right-0 bg-slate-six py-2 px-10 md:px-20">
        <div className="flex justify-between">
          <figure className="text-left w-28">
            <Link href="/">logo</Link>
          </figure>
          <div className="md:flex gap-2 lg:gap-5 text-slate-one hidden md:w-52 justify-center">
            {navbar.map((options, index) => (
              <div key={index} className="relative">
                <article>
                  <Button onClick={() => handleNavSelect(options.title)} className="hover:text-slate-two">{options.title}</Button>
                </article>
                <div className={`absolute top-8 left-0 p-3 bg-white w-48 rounded-md text-slate-one text-lg ${navSelect[options.most as keyof NavbarProps] ? 'block' : 'hidden'}`}>
                  <div className="absolute w-fit -top-3">
                    <Top />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {options.sub?.map((data, index) => (
                      <Link
                        onClick={() => handleNavSelect(options.title)}
                        className="p-2 rounded-md hover:bg-slate-four"
                        href={data.src}
                        key={index}
                      >
                        {data.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="font-semibold w-52 text-slate-one hidden md:flex md:justify-end lg:gap-2">
            <User />
            <Link href="/Login" className="hover:text-slate-two">
              Login
            </Link>
            <span className="px-1">|</span>
            <Link href="/Register" className="hover:text-slate-two">
              Sign Up
            </Link>
            <Link href="/">
              <ShopCars width="w-6" />
            </Link>
          </div>
          <button className="md:hidden" onClick={handleIsOpenMenuHamburger}>
            {isOpenMenuHamburg
              ? (
                <Close style={isClosingMenuHamburg ? 'rotate-out' : ''} />
                )
              : (
                <MenuHambuerger />
                )}
          </button>
        </div>
      </nav>
      {isOpenMenuHamburg && (
        <div
          className={`fixed left-0 w-full top-11 bottom-0 z-20 bg-white ${isClosingMenuHamburg ? 'scale-out-tr' : 'scale-in-tr'
          }`}
        >
          <div className="fixed w-full flex flex-col gap-5 text-2xl items-center justify-evenly font-semibold h-full p-9">
            {navbar.map((options, index) => (
              <div key={index} className="w-9/12">
                <Button onClick={() => handleNavSelect(options.title)} className="hover:text-slate-two flex w-full justify-between">
                  {options.title}
                  {' '}
                  <Down />
                </Button>
                <div className={`p-3 bg-white rounded-md text-slate-one text-lg ${navSelect[options.most as keyof NavbarProps] ? 'block' : 'hidden'}`}>
                  <div className="flex flex-col gap-2 w-full">
                    {options.sub?.map((data, index) => (
                      <Link
                        onClick={() => handleNavSelect(options.title)}
                        className="p-2 rounded-md hover:bg-slate-four"
                        href={data.src}
                        key={index}
                      >
                        {data.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="font-semibold flex justify-center gap-4 m-6">
              <User />
              <Link
                href="/login"
                className="text-[#8B8E99] hover:text-[#3858D6]"
                onClick={handleIsOpenMenuHamburger}
              >
                Login
              </Link>
              <span className="text-[#8B8E99]">|</span>
              <Link
                href="/register"
                className="text-[#8B8E99] hover:text-[#3858D6]"
                onClick={handleIsOpenMenuHamburger}
              >
                Sign Up
              </Link>
            </div>
            <Link href="/" className="block">
              <ShopCars width="w-12" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
