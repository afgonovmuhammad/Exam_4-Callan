import React from 'react'

import '../../App.css'
import './students.css'

import main1 from './img/main1.png'
import icon from './img/icon.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Students = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div className='dark:bg-[#000] dark:text-[#fff]'>
      <div className="main_1 dark:bg-[#000] dark:text-[#fff] bg-[#f5f3f3] py-[100px]">
        <div className="contener text-center lg:w-[80%]  2xl:w-[80%] sm:w-[60%] mx:w-[80%]">
        <h1 className='text-[#7da8ec] text-[38px] font-[700]'>{t("text4")}</h1>

        <div className="main_1A py-[50px]  text-start">


          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>

          <div className='xl:flex justify-between my-[40px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[65%] lg:w-[55%] mx-auto '>
            <div className='xl:w-[35%]'>
              <img className='w-[100%]' src={main1} alt="" />
            </div>
            <div className='xl:w-[60%] mx:w-[95%] mx-auto'>
              <div className='flex justify-between mx:pt-[20px] xl:pt-0'>
                <h1 className='text-[#7A7A7A]  font-[700] text-[20px]'>{t("text11A")}</h1>
                <div className='lg:flex hidden gap-[10px] pt-[5px] px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>
              </div>

              <p className='pt-[10px] text-[#7A7A7A] leading-[28px]'>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua!
              </p>
              <div className='mx:flex lg:hidden gap-[10px] lg:pt-[5px] mx:py-[10px] lg:px-[15px]'>
                  <div className='pt-[5px]'>
                    <img src={icon} alt="" />
                  </div>
                  <p>{t("text16")}</p>
                </div>

              
         

            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Students