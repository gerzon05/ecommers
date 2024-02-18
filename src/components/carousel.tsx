'use client'

import { useCallback } from 'react'
import useCarousel from 'embla-carousel-react'
import pluginAutoplay from 'embla-carousel-autoplay'

import type { EmblaPluginType } from 'embla-carousel'
import { type ReactNode, HTMLAttributes } from 'react'
import { Button } from './ui'
import { Left, Right } from './icons'

interface CarouselProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  autoplay?: boolean
  buttons?: boolean
  loop?: boolean
}

export default function Carousel({
  children,
  autoplay,
  buttons,
  loop = false,
  ...props
}: CarouselProps) {
  const plugins: EmblaPluginType[] = []

  if (autoplay) {
    plugins.push(pluginAutoplay({ delay: 3000 }))
  }

  const [emblaNode, emblaApi] = useCarousel({ loop: loop }, plugins)

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div ref={emblaNode} className='overflow-hidden'>
      <div {...props}>{children}</div>
      {buttons && (
        <>
          <Button
            className='absolute top-[58%] left-1 md:left-7'
            onClick={handleScrollPrev}
          >
            <Left />
          </Button>
          <Button
            className='absolute top-[58%] right-1 md:right-7'
            onClick={handleScrollNext}
          >
            <Right />
          </Button>
        </>
      )}
    </div>
  )
}
