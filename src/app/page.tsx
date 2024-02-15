import { ButtonDefault } from '@/Components/ui'
import principalimage from '../../public/princpalimage.png'
import Image from 'next/image'
import Navbar from '@/Components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-black w-full h-[94vh] flex justify-between items-center'>
        <section className='md:w-1/2'></section>
        <section className='md:w-1/2'>
          <Image
            src={principalimage}
            alt='imagen principal del sitio web'
            className='w-full'
          />
        </section>
      </div>
      <ButtonDefault name='mi boton' />
    </>
  )
}
