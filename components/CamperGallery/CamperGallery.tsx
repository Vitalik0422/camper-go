'use client';
import css from './CamperGallery.module.css';
import { Gallery } from '@/types/camper';
import Image from 'next/image';
import { useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import clsx from 'clsx';

interface CamperGalleryProps {
  photos: Gallery[];
}

const CamperGallery = ({ photos }: CamperGalleryProps) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!photos.length) {
    return <div className={css.camperGalleryWrapper}>No photos available.</div>;
  }

  return (
    <div className={css.camperGalleryWrapper}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbSwiper }}
        modules={[FreeMode, Thumbs]}
        className={css.mainSwiperWrapper}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Image
              src={photo.original}
              alt="Camper photo"
              width={638}
              height={505}
              className={css.mainPhoto}
              loading="eager"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbSwiper}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={css.swiper}
      >
        {photos.map((photo, index) => (
          <SwiperSlide
            key={photo.id}
            className={css.swiperSlide}
            onClick={() => mainSwiper?.slideToLoop(index)}
          >
            <div
              className={clsx(
                css.thumbSwiperItemWrapper,
                index === activeIndex && css.active,
              )}
            >
              <Image
                width={136}
                height={144}
                className={clsx(css.slidePhoto)}
                src={photo.thumb}
                alt={'Camper photo'}
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
