import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import '../../App.css'
import './Universities.css'

import main1 from './img/main1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import search  from './img/search.png'
import cet  from './img/cet.png'
import book  from './img/book.png'
import star  from './img/star.png'
import ff  from './img/ff.png'
import ff2  from './img/ff2.png'
import ff3  from './img/ff3.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Universities = () => {
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1 py-[100px]">
        <div className="contener lg:w-[90%]  2xl:w-[80%] sm:w-[60%] mx:w-[80%]">
          <h1 className='text-[#7da8ec] text-center text-[38px] pt-[80px] font-[700]'>{t("text3")}</h1>
          <div className="main_1A">
            <div className='lg:flex justify-between py-[40px]'>
              <h1 className='text-[24px] font-[500]'>{t("text18")}</h1>
              <div>
                <input className='INPUT dark:text-[#000] mx:my-[15px] lg:my-0 lg:py-0' type="text" placeholder={t("text18A2")} />
              </div>
              <div className=' text-[#7A7A7A] font-[400] gap-[10px] flex justify-between lg:w-[30%]'>
                <div className='flex gap-[10px]'>
                  <div>
                    <img src={icon2} alt="" />
                  </div>
                  <p>{t("text18A")}</p>
                </div>

                <div className='flex gap-[10px]'>
                  <div className='pt-[5px]'>
                    <img src={icon3} alt="" />
                  </div>
                  <p>{t("text18B")}</p>
                </div>

                <div className='flex gap-[10px]'>
                  <div className='pt-[5px]'>
                    <img src={icon3} alt="" />
                  </div>
                  <p>{t("text18B")}</p>
                </div>
              </div>
             
            </div>

          <div className='lg:flex justify-between'>

            <div className="left_1  lg:w-[25%] lg:flex lg:flex-col hidden flex-wrap mx:justify-center mx:items-center lg:items-start lg:justify-start">
              <div className=''>
                <img src={ff} alt="" />
              </div>

              <div className='py-[60px]'>
                <img src={ff2} alt="" />
              </div>

              <div className=''>
                <img src={ff3} alt="" />
              </div>

            </div>
            <div className="right_1 lg:w-[80%]">
              <div className='DIV lg:flex gap-[15px]  dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>

              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>

              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>

              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>


              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>

              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>


              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>


              <div className='DIV lg:flex gap-[15px] my-[45px] dark:bg-[#1f1e1e] dark:text-[#fff] bg-[#fff] p-[10px] ALL xl:w-[100%] lg:w-[95%]  '>
                <div className='lg:w-[30%]' >
                  <img className='w-[100%]' src={main1} alt="" />
                </div>
                <div className='lg:flex justify-between xl:w-[60%] mx:w-[95%] mx-auto'>
                  <div className=' w-[80%] '>
                  <h1 className='text-[20px] mx:text-center lg:text-start font-[500] text-[#7A7A7A]'>{t("text16")}</h1>
                  <div className='flex md:w-[80%] mx:w-[40%] mx:mx-auto mx:flex-col md:flex-row lg:mx-0 pt-[10px] justify-between text-[#7A7A7A]'>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px] '>
                        <img src={cet} alt="" />
                      </div>
                      <div>
                        <p>{t("text18C")}</p>
                        <p className='py-[3px]'>{t("text18D")}</p>
                      </div>
                    </div>
                    <div className='flex gap-[11px]'>
                      <div className='pt-[5px]'>
                        <img src={book} alt="" />
                      </div>
                      <div>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                      </div>
                    </div>
                    
                    <div className='px-[10px] mx:hidden md:flex flex-col'>
                        <p className=''>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px]'>{t("text18I")}</p>
                        <p className='py-[3px] text-[#416eb8]'>{t("text18I2")}</p>
                      </div>
                  </div>

                  </div>
                  <div className='pt-[10px] pr-[10px] flex flex-col mx:justify-center mx:items-center lg:justify-start lg:items-start'>
                    <div>
                      <img src={star} alt="" />
                    </div>
                    <p className='text-[#416eb8] pt-[40px] font-[500] text-[24  px]'>{t("text18F")}</p>
                    <p className='text-[#7A7A7A]  font-[400] text-[16px]'>{t("text18H")}</p>

                  </div>
                </div>
              </div>
            </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Universities