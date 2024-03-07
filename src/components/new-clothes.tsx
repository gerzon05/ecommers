import Link from 'next/link'
import Image from 'next/image'
import Carousel from './carousel'
import { Button } from './ui'
import { ShopCars } from './icons'
import { Newest } from '@/utils/const'

export default function NewClothes() {
  return (
    <>
      <h2 className=" text-center text-3xl md:text-5xl  m-10 font-bold">
        LO MAS NUEVO
      </h2>
      <Carousel
        className="flex relative gap-4 md:gap-4 py-4 mr-[10px] pl-2"
        buttons
        autoplay
      >
        {Newest.map((data, index) => (
          <Link href="/" key={index} className="group/item hover:scale-105">
            <div className="flex flex-col items-center gap-2 w-80 p-3 md:group-hover/item:bg-slate-five rounded-md">
              <div className="w-72 relative place-items-center rounded-lg bg-slate-five">
                <Image
                  src={data.src}
                  alt={`Imagen de ${data.name}`}
                  className="w-full z-auto scale-in-ver-bottom"
                />
                <span className="absolute top-1 left-1 text-slate-three font-semibold px-2 rounded-md">
                  Nuevo
                </span>
              </div>
              <div className="w-full text-center flex flex-col gap-2">
                <h3 className="text-sm font-bold">{data.name}</h3>
                <p className="text-xs font-semibold">{data.price}</p>
                <Button className="flex justify-center group-hover/item:bg-slate-six rounded-md py-1 font-semibold text-slate-three">
                  Añadir al carrito
                  {' '}
                  <ShopCars width="w-6" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  )
}
