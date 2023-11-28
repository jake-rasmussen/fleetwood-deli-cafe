import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { flushSync } from "react-dom";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  imagePaths: string[];
}

const CateringCarousel = (props: PropType) => {
  const { imagePaths } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500, stopOnInteraction: false })]);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  const slides: React.ReactNode[] = [];
  imagePaths.forEach((imagePath, i) => {
    slides.push(
      <div
        className={`embla__slide mx-1 h-[20rem]`}
        key={i - 1}
      >
        <Image
          src={imagePath}
          alt={"Food"}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    )});

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla h-full mx-20 relative border border-4 border-black overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container grid auto-cols-[35%] grid-flow-col">
          {slides.map((slide, index) => slide)}
        </div>
      </div>

      <button
        className="embla__prev z-30 absolute left-0 top-1/2 -translate-y-1/2 hidden transition duration-300 ease-in-out hover:scale-[200%] lg:block"
        onClick={scrollPrev}
      >
        <IconChevronLeft className="h-24 w-24 text-black" />
      </button>
      <button
        className="embla__next z-30 absolute right-0 top-1/2 -translate-y-1/2 hidden transition duration-300 ease-in-out hover:scale-[200%] lg:block"
        onClick={scrollNext}
      >
        <IconChevronRight className="h-24 w-24 text-black" />
      </button>
    </div>
  )
}

export default CateringCarousel;