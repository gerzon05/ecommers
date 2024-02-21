'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Newest } from '@/utils/const'
import Carousel from './carousel'

export default function CarouselCategory() {
  return (
    <>
      <h2 className=' text-center text-3xl md:text-5xl  m-10 font-bold'>
        CATEGORIAS
      </h2>
      <Carousel
        className='flex relative gap-4 md:gap-4 py-4 mr-[85px] pl-2'
        buttons
      >
        {Newest.map((data, index) => (
          <Link href={'/'} key={index} className='group/item hover:scale-105'>
            <div className='flex flex-wrap items-center gap-2 w-64 p-3 md:group-hover/item:bg-slate-five rounded-md'>
              <div className='grid h-20 w-20 place-items-center rounded-lg bg-slate-five'>
                <Image
                  src={data.src}
                  alt={`Imagen de ${data.name}`}
                  className='w-full z-auto scale-in-ver-bottom'
                />
              </div>
              <div className='w-36 flex flex-col gap-2'>
                <h3 className='text-sm font-bold'>{data.name}</h3>
                <p className='text-xs font-semibold'>{data.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  )
}
