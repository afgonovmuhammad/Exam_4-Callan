import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles1.css";

import hom from './img/ma1A.png';

// import required modules
import { FreeMode, Pagination } from "swiper";

import { useTranslation } from 'react-i18next'


export default function Swiper_hom() {
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
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
  
            1280: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper rounded-[20px] "
      >
        <SwiperSlide>
           <div className="DIV  dark:bg-[#1f1e1e] dark:text-[#fff] p-[20px]  w-[100%] ">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] dark:text-[#fff] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="DIV  dark:bg-[#1f1e1e] dark:text-[#fff] p-[20px]  w-[100%] ">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] dark:text-[#fff] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV  dark:bg-[#1f1e1e]  p-[20px]  w-[100%] ">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] dark:text-[#fff] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV p-[20px]  w-[100%]">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV p-[20px]  w-[100%]">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV p-[20px]  w-[100%] ">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV p-[20px]  w-[100%]">
            <div className="p-[12px]"> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="DIV p-[20px]  w-[100%]">
            <div className="p-[12px] "> <img className="rounded-[15px]" src={hom} alt="" /></div>
            <div className="flex p-[12px] justify-between">
              <p className="text-[#1f1e1e] text-[18px] font-[500]">{t("text10")}</p>
              <p className="text-[#D9D9D9] text-[16px] font-[400]">{t("text10A")}</p>
            </div>
           </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
