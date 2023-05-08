import React, {useEffect} from 'react'

import '../../App.css'
import './Contacts.css'

// import main1 from './img/main1.png'
import icon from './img/icon.png'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const [lng, setLng] = useState("ru")
  const {t,i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <div className="main_1  py-[120px] bg-[url('./assets/contact2.png')] bg-no-repeat bg-cover ">
        <div>
          <div className="contener text-center lg:w-[90%]  2xl:w-[80%] sm:w-[60%] mx:w-[80%]">
            <h1 className='text-[#7da8ec] text-[38px] pt-[80px] font-[700]'>{t("text6")}</h1>
            <p className='text-[#7A7A7A] text-[20px] xl:w-[40%] mx-auto font-[500]'>{t("text17")}</p>

            <div className="main_1A pt-[100px] lg:flex">
              <div className="left_1 xl:w-[30%]  py-[30px] px-[45px] bg-[#fff]">
                <div className='flex gap-[15px] py-[10px] text-start'>
                  <div>
                  <div className='bg-[#52BFFF] py-[5px] px-[12px] rounded-[50%]'>
                    <h1 className='text-[15px] font-[500] text-[#fff]'>1</h1>
                  </div>
                  </div>

                  <div>
                    <p className='text-[17px] font-[500]'>{t("text17A")}</p>
                    <p className='text-[14px] py-[7px] font-[500]'>{t("text17B")}</p>
                  </div>
                </div>

                <div className='flex gap-[15px] py-[10px] text-start' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <div>
                  <div className='bg-[#52BFFF] py-[5px] px-[10px] rounded-[50%]'>
                    <h1 className='text-[15px] font-[500] text-[#fff]'>2</h1>
                  </div>
                  </div>

                  <div>
                    <p className='text-[17px] font-[500]'>{t("text17A")}</p>
                    <p className='text-[14px] py-[7px] font-[500]'>{t("text17B")}</p>
                  </div>
                </div>

                <div className='flex gap-[15px] py-[10px] text-start'>
                  <div>
                  <div className='bg-[#52BFFF] py-[5px] px-[10px] rounded-[50%]'>
                    <h1 className='text-[15px] font-[500] text-[#fff]'>3</h1>
                  </div>
                  </div>

                  <div>
                    <p className='text-[17px] font-[500]'>{t("text17A")}</p>
                    <p className='text-[14px] py-[7px] font-[500]'>{t("text17B")}</p>
                  </div>
                </div>

                <div className='flex gap-[15px] py-[10px] text-start' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                  <div>
                  <div className='bg-[#52BFFF] py-[5px] px-[10px] rounded-[50%]'>
                    <h1 className='text-[15px] font-[500] text-[#fff]'>4</h1>
                  </div>
                  </div>

                  <div>
                    <p className='text-[17px] font-[500]'>{t("text17A")}</p>
                    <p className='text-[14px] py-[7px] font-[500]'>{t("text17B")}</p>
                  </div>
                </div>

                <div className='flex gap-[15px] py-[10px] text-start'>
                  <div>
                  <div className='bg-[#52BFFF] py-[5px] px-[10px] rounded-[50%]'>
                    <h1 className='text-[15px] font-[500] text-[#fff]'>5</h1>
                  </div>
                  </div>

                  <div>
                    <p className='text-[17px] font-[500]'>{t("text17A")}</p>
                    <p className='text-[14px] py-[7px] font-[500]'>{t("text17B")}</p>
                  </div>
                </div>
              </div>
              <div className="right_1 lg:w-[30%]"></div>
            </div>



          </div>
        </div>

        <div className="main_2 pb-[50px]">
        <div>
        <div className="contener text-center lg:w-[90%] pt-[100px] 2xl:w-[80%] md:w-[90%] sm:w-[90%] mx:w-[90%]">
            <div className="main_2A  flex justify-center">
            <div className=' p-[30px] text-start dark:bg-[#2a2727] bg-[#FFF] rounded-[20px] lg:w-[40%] md:w-[50%] flex flex-col '>
              <div className='px-[20px]'>
                <h1 className='text-[18px] font-[500]'>{t("text17C")}</h1>
                <p className='pt-[10px]'>+998 (99) 878-63-99</p>
                <p className='py-[3px]'>+998 (99) 878-63-99</p>

                <h1 className='text-[18px] pt-[25px] font-[500]'>{t("text17D")}</h1>
                <p className='pt-[10px]'>{t("text17B")}</p>

              </div>
              <div className='py-[15px] mb-[-65px] flex justify-center '>
                <button className=' hover:bg-[#BEE7FF] hover:text-[#5376b4] flex gap-[15px] py-[7px] items-center pl-[5px] text-center text-[17px] font-[700] text-[#ffffff] lg:w-[45%] mx:w-[90%] md:w-[70%] rounded-[25px] bg-[#89c0e0]'><img src={icon} alt="" /> {t("text14B")}</button>
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

export default Contacts