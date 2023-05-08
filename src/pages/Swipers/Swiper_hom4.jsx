import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles1.css";

import hom from './img/ma4.png';

// import required modules
import { FreeMode, Pagination } from "swiper";

import { useTranslation } from 'react-i18next'


export default function Swiper_hom4() {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            376: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
  
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
  
            1280: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper rounded-[20px] "
      >
        <SwiperSlide>
           <div className=" w-[100%] ">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="  w-[100%] " data-aos="fade-up"
     data-aos-duration="3000">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>
 
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-[100%] ">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-[100%]" data-aos="fade-up"
     data-aos-duration="3000">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  w-[100%]">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-[100%] ">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  w-[100%]" data-aos="fade-up"
     data-aos-duration="3000">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  w-[100%]">
            <div className=""> <img className="rounded-[15px]" src={hom} alt="" /></div>

           </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
