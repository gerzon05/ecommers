import { ButtonDefault } from '@/components/ui'
import principalimage from '../../public/princpalimage.png'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import { Cars, Shop } from '@/components/icons'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-black w-full -z-10 h-full sm:h-[94vh] md:flex justify-between items-center'>
        <section className='w-full md:w-1/2 p-10'>
          <h1 className='text-white mb-16 text-6xl'>Title</h1>
          <p className='text-white mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            optio natus eveniet, delectus quis cupiditate, ipsa illo eos quas et
            obcaecati totam sed, eligendi aperiam temporibus repudiandae soluta
            perspiciatis! Consequatur.
          </p>
          <div className='text-white flex justify-evenly'>
            <article className='flex flex-col items-center overflow-hidden'>
              <Cars />
              <p>Envios nacionales</p>
            </article>
            <article className='flex flex-col items-center'>
              <Shop />
              <p>Tienda 100% virtual</p>
            </article>
          </div>
        </section>
        <section className='w-full md:w-1/2'>
          <Image
            src={principalimage}
            alt='imagen principal del sitio web'
            className='w-full z-auto scale-in-ver-bottom'
          />
        </section>
      </div>
    </>
  )
}
