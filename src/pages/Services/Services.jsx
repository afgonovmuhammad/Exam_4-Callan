import React from 'react'

import '../../App.css'
import './Services.css'

import main2 from '../About_Us/img/main2AA.png'
import main2A from '../About_Us/img/main2A.png'
import main2B from '../About_Us/img/main2B.png'
import main2C from '../About_Us/img/main2C.png'
import main2D from '../About_Us/img/main2D.png'
import main2F from '../About_Us/img/mainF.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Services = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div  className=' dark:bg-[#1c1b1b]'>
      <div className="main_2  bg-[url('./assets/About.png')] bg-no-repeat bg-cover ">
        <div className=' py-[100px] dark:bg-[#2a2727]'> 
        <div className="contener text-center lg:w-[80%]  2xl:w-[80%] sm:w-[50%] mx:w-[70%]">
        <h1 className='text-[#759ddd] text-[36px] font-[700]'>{t("text2")}</h1>

        <div className="main_2A flex dark:bg-[#2a2727] flex-wrap py-[50px] justify-between">
            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-40px]'>
                <img src={main2} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D1")}</p>
            </div>

            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2A} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D2")}</p>
            </div>

            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px] '>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2B} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D3")}</p>
            </div>
          </div>

          <div className="main_2A flex flex-wrap py-[0px] justify-between">
            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2C} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D1")}</p>
            </div>

            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2D} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D2")}</p>
            </div>

            <div className='Sert dark:bg-[#2a2727] lg:w-[30%] my-[60px] '>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2F} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D3")}</p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Services