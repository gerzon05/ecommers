'use client'

import principalimage from '../../public/princpalimage.png'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Cars, Shop } from '@/components/icons'
import CarouselCategory from '@/components/category'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-slate-one w-full -z-10 h-full text-center lg:text-left lg:h-[94vh] lg:flex justify-between items-center'>
        <section className='w-full lg:w-1/2 p-10'>
          <h1 className='text-white mb-16 text-6xl'>Title</h1>
          <p className='text-white mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            optio natus eveniet, delectus quis cupiditate, ipsa illo eos quas et
            obcaecati totam sed, eligendi aperiam temporibus repudiandae soluta
            perspiciatis! Consequatur.
          </p>
          <div className='text-white flex justify-evenly'>
            <article className='flex flex-col items-center overflow-hidden text-center'>
              <Cars />
              <p>Envios nacionales</p>
            </article>
            <article className='flex flex-col items-center text-center'>
              <Shop />
              <p>Tienda 100% virtual</p>
            </article>
          </div>
        </section>
        <section className='w-full lg:w-1/2'>
          <Image
            src={principalimage}
            alt='imagen principal del sitio web'
            className='w-full z-auto scale-in-ver-bottom'
          />
        </section>
      </div>
      <div className='px-10 md:px-20 pt-10 pb-16 relative overflow-hidden bg-slate-two'>
        <CarouselCategory />
      </div>
    </>
  )
}
