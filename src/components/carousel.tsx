import Image from "next/image";
import React from 'react'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { twMerge } from "tailwind-merge";

const Carousel = () => {
  const slides = [];
  for (let i = 1; i <= 8; i++) {
    slides.push(
      <SplideSlide className="w-96" key={`slide${i}`}>
        <Image
          src={`/images/food/${i}.jpeg`}
          alt={"Food"}
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
        />
      </SplideSlide>
    )
  }

  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        arrows: false,
        perPage: 4,
        gap: "0.5rem",
        pagination: false,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1,
        },
        
      }}
      extensions={{ AutoScroll }}
      className={twMerge("w-screen border-y-8 border-double border-black my-0", slides.length === 0 ? "border-none" : "")}
    >
      {slides.map((slide) => slide)}
    </Splide >
  );
}

export default Carousel;