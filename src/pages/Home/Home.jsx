import React,{useEffect} from 'react'
import '../../App.css'
import './home.css'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import Swiper_hom from '../Swipers/Swiper_hom1'
import Swiper_hom4 from '../Swipers/Swiper_hom4'

import CustomizedAccordions from './Accordion/Accordion'

import main1 from './img/main1.png'
import main1A from './img/main1A.png'
import icon from './img/icon.png'

import main2 from './img/main2.png'
import main2A from './img/main2A.png'
import main2B from './img/main2B.png'

import main21 from './img/main3.png'
import main2A1 from './img/main3A.png'


import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    const [lng, setLng] = useState("ru")
    const {t,i18n} = useTranslation()
    const changeLanguage = (language) =>{
      i18n.changeLanguage(language)
    }
  return (
    <div  className='dark:text-[#ffff] dark:bg-[#000]'>
      <div className="main_1  w-[100%] dark:bg-opacity-[1] bg-[url('./assets/bg.png')] bg-no-repeat bg-cover ">
        <div className="contener lg:w-[90%] 2xl:w-[80%] mx:w-[95%] mx-auto">
          <div className="main_1A lg:flex mx:py-[90px] lg:py-0 lg:relative ">
          <div className="left_1 lg:w-[65%]  lg:absolute 2xl:top-[100px] z-10 "  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="mx:text-center lg:text-start">
            <h1 className='text-[#52BFFF] mx:text-[34px] 2xl:pt-0 mx:pt-[50px]  xl:text-[56px] font-[700]'>{t("text8")}</h1>
            <p className='lg:text-[25px] mx:text-[18px] font-[400] xl:w-[85%] py-[10px] text-[#7A7A7A] leading-[36px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
              <div className='py-[15px] flex mx:justify-center lg:justify-start'>
                <button className=' hover:bg-[#BEE7FF] hover:text-[#5376b4] flex gap-[15px] py-[5px] items-center pl-[5px] text-[17px] font-[700] text-[#ffffff] pr-[50px] rounded-[25px] bg-[#9dc4da]'><img src={icon} alt="" /> {t("text8A")}</button>
              </div>
            </div>

          </div>
            <div className=' absolute 3xl:flex hidden 3xl:top-[273px] left-[-190px]'>
              <img src={main1A} alt="" />
            </div>
          <div className="right_1 lg:relative 3xl:left-[820px] 2xl:left-[570px]  xl:left-[310px]">
            <img className='w-[100%]' src={main1} alt="" />
          </div>
          </div>
        </div>
      </div>

      <div className="main_2 py-[100px]">
        <div className="contener text-center lg:w-[90%]  2xl:w-[80%] sm:w-[50%] mx:w-[70%]">
          <p className='text-[#7A7A7A] text-[20px] xl:w-[30%] mx-auto font-[500]'>{t("text8B")}</p>
          <h1 className='text-[#023994] text-[36px] font-[700]'>{t("text8C")}</h1>

          <div className="main_2A flex flex-wrap py-[50px] justify-between">
            <div className='Sert  dark:bg-[#1f1e1e] dark:text-[#fff] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D1")}</p>
            </div>

            <div className='Sert  dark:bg-[#1f1e1e] dark:text-[#fff] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2A} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D2")}</p>
            </div>

            <div className='Sert  dark:bg-[#1f1e1e] dark:text-[#fff] lg:w-[30%] my-[60px] '>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2B} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D3")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main_3 dark:pt-0 pt-[100px] w-[100%] pb-[80px]   bg-[url('./assets/AAA.png')] bg-no-repeat bg-cover">
        <div className="contener text-center lg:w-[90%]  2xl:w-[80%] sm:w-[50%] mx:w-[70%]">
          <h1 className='text-[#023994] text-[36px] pt-[50px] font-[700]'>{t("text9")}</h1>
        <p className='text-[#7A7A7A] text-[20px] xl:w-[30%] mx-auto font-[500]'>{t("text9A")}</p>

        <div className='py-[80px]'>
          <Swiper_hom/>

        </div>

        </div>

        <div className="main_3B w-[100%] py-[100px] z-[3]  ">
          <div className="contener text-center lg:w-[90%]  2xl:w-[80%] sm:w-[50%] mx:w-[80%]">
          <h1 className='text-[#7098d9] text-[38px] lg:pt-[230px] mx:pt-[30px] font-[700]'>{t("text11")}</h1>


          <div className="main_3A flex flex-wrap lg:pb-[90px] mx:pb-[30px] pt-[150px] justify-between">
            <div className='Sert  dark:bg-[#1f1e1e] dark:text-[#fff] lg:w-[30%] py-[15px] px-[12px] my-[90px]'>
              <div className='flex justify-center mt-[-110px]'>
                <img src={main21} alt="" />
              </div>
              <p className='pt-[15px]  font-[700]'>{t("text11A")}</p>
              <p className='py-[10px] text-[16px] w-[90%] text-start mx-auto'>{t("text11B")}</p>
            </div>

            <div className='Sert  dark:bg-[#1f1e1e] dark:text-[#fff] lg:w-[30%]  py-[15px] my-[90px]'>
              <div className='flex justify-center mt-[-110px]'>
                <img src={main2A1} alt="" />
              </div>
              <p className='pt-[15px]  font-[700]'>{t("text11A")}</p>
              <p className='py-[10px] text-[16px] w-[90%] text-start mx-auto'>{t("text11B")}</p>
            </div>

            <div className='Sert lg:w-[30%]  dark:bg-[#1f1e1e] dark:text-[#fff]  py-[15px] my-[90px] '>
              <div className='flex justify-center mt-[-110px]'>
                <img src={main21} alt="" />
              </div>
              <p className='pt-[15px]  font-[700]'>{t("text11A")}</p>
              <p className='py-[10px] text-[16px] w-[90%] text-start mx-auto'>{t("text11B")}</p>
            </div>
          </div>

          </div>
        </div>

        <div className="main_4 pt-[80px]">
          <div className="contener text-center lg:w-[90%]  2xl:w-[80%] md:w-[80%] mx:w-[70%]">
          <h1 className='text-[#7098d9] md:text-[38px] mx:text-[30px] lg:pt-[130px] mx:pt-[30px] font-[700]'>{t("text12")}</h1>
          <div className='py-[80px]'>
            <Swiper_hom4/>
          </div>


          </div>
        </div>

        <div className="main_4A pt-[30px]">
          <div className="contener w-[80%] mx-auto">
          <h1 className='text-[#7098d9] text-center text-[38px]  pt-[30px] font-[700]'>{t("text12A")}</h1>

            <div className='pt-[90px] pb-[100px]'>
              <CustomizedAccordions/>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home