'use client'
import {Swiper as SwiperObject} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper/modules";
import React, {useState} from "react";
import Image from "next/image";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './slideshow.css'

interface Props {
  images: string[]
  title: string
  className?: string
}

export const ProductSlideShow = ({images, title, className}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()

  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={`/products/${image}`} alt={title}
                   width={1024} height={800}
                   className={'rounded-lg object-fill'}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
