import React from 'react'

import '../../App.css'
import './About_Us.css'

import main1 from './img/main1.png'

import main2 from './img/main2AA.png'
import main2A from './img/main2A.png'
import main2B from './img/main2B.png'
import main2C from './img/main2C.png'
import main2D from './img/main2D.png'
import main2F from './img/mainF.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const About_Us = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className=' dark:bg-[#2a2727]'>

      <div className="main_1 py-[120px] dark:text-[#ffff] dark:bg-[#000] bg-[#fff]">
        <div className="contener text-center lg:w-[90%]  2xl:w-[80%] sm:w-[50%] mx:w-[70%]">
        <h1 className='text-[#7da8ec] text-[36px] font-[700]'>{t("text1")}</h1>
        <div className="main_1A py-[100px] lg:flex justify-evenly">
          <div className="left_1 text-start lg:w-[50%]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            <p className='py-[20px] '>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. 
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>

          </div>
          <div className="right_1">
            <img className='w-[100%]' src={main1} alt="" />

          </div>
        </div>


        </div>
      </div>

      <div className="main_2  dark:text-[#ffff] dark:bg-[#000] bg-[url('./assets/About.png')] bg-no-repeat bg-cover ">
        <div className='py-[100px] dark:text-[#ffff] dark:bg-[#000]'>
        <div className="contener text-center lg:w-[80%]  2xl:w-[80%] sm:w-[50%] mx:w-[70%]">
        <h1 className='text-[#759ddd] text-[36px] font-[700]'>{t("text2")}</h1>
        <p className='text-[#7A7A7A] text-[20px] py-[10px] xl:w-[50%] mx-auto font-[500]'>{t("text15")}</p>


        <div className="main_2A flex flex-wrap py-[50px] justify-between">
            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-40px]'>
                <img src={main2} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D1")}</p>
            </div>

            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2A} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D2")}</p>
            </div>

            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px] '>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2B} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D3")}</p>
            </div>
          </div>

          <div className="main_2A flex flex-wrap py-[0px] justify-between">
            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2C} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D1")}</p>
            </div>

            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px]'>
              <div className='flex justify-center mt-[-60px]'>
                <img src={main2D} alt="" />
              </div>
              <p className='py-[20px] w-[70%] mx-auto'>{t("text8D2")}</p>
            </div>

            <div className='Sert dark:text-[#ffff] dark:bg-[#000] lg:w-[30%] my-[60px] '>
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

export default About_Us