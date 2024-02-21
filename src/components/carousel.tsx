'use client'

import { useCallback, useEffect, useState } from 'react'
import useCarousel from 'embla-carousel-react'
import pluginAutoplay from 'embla-carousel-autoplay'

import type { EmblaCarouselType, EmblaPluginType } from 'embla-carousel'
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
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

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

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)

    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div ref={emblaNode} className='overflow-hidden'>
      <div {...props}>{children}</div>
      {buttons && (
        <>
          <Button
            className='absolute top-[52%] translate-y-1/2 left-1 md:left-7 disabled:opacity-0 rounded-full bg-slate-two/50'
            disabled={prevBtnDisabled}
            onClick={handleScrollPrev}
          >
            <Left />
          </Button>
          <Button
            className='absolute top-[52%] translate-y-1/2 right-1 md:right-7 disabled:opacity-0 rounded-full bg-slate-two/50'
            disabled={nextBtnDisabled}
            onClick={handleScrollNext}
          >
            <Right />
          </Button>
        </>
      )}
    </div>
  )
}
