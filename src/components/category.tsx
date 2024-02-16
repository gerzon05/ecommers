'use client'

import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { Newest } from '@/utils/const'
import { Left, Right } from './icons'

export default function CaruselIphones() {
  const [emblaRef, emblaApi] = useEmblaCarousel({})
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <h2 className=' text-center text-3xl md:text-5xl  m-10 font-bold'>
        CATEGORIAS
      </h2>

      <article ref={emblaRef} className='overflow-hidden'>
        <div className='flex relative gap-4 md:gap-4 pb-4 mr-[75px]'>
          {Newest.map((data, index) => (
            <Link href={'/'} key={index}>
              <div className='flex flex-wrap items-center gap-2 w-64 p-3'>
                <div className='grid h-20 w-20 place-items-center rounded-lg bg-gray-300'>
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
        </div>
        <button
          className='absolute top-[56%] left-1 md:left-7'
          onClick={scrollPrev}
        >
          <Left />
        </button>
        <button
          className='absolute top-[56%] right-1 md:right-7'
          onClick={scrollNext}
        >
          <Right />
        </button>
      </article>
    </>
  )
}
