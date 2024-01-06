import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type PropType = {
  imagePaths: string[];
};

const CateringCarousel = (props: PropType) => {
  const { imagePaths } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  const slides: React.ReactNode[] = [];
  if (imagePaths) {
    imagePaths.forEach((imagePath, i) => {
      slides.push(
        <div
          className={`embla__slide mx-1 h-[20rem]`}
          key={`cateringSlide${i - 1}`}
        >
          <Image
            src={imagePath}
            alt={"Food"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>,
      );
    });
  }

  return (
    <div className="embla h-full mx-20 relative border border-4 border-black overflow-hidden rounded-xl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container grid auto-cols-[35%] grid-flow-col">
          {slides.map((slide) => slide)}
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
  );
};

export default CateringCarousel;
