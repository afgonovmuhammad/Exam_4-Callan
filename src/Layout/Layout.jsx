import React,{useEffect} from 'react'
import { Link,Outlet } from 'react-router-dom'
import '../App.css'

import Switcher from '.././component/Switcher'
import Temporary from '../component/navbar'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import nav from './img/navv.png'
import nav2 from './img/navv2.png'
import nav36 from './img/nav36.png'
import nav36A from './img/nav36A.png'
import icon from './img/icon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';




const Layout = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    
    const [lng, setLng] = useState("ru")
    const {t,i18n} = useTranslation()
    const changeLanguage = (language) =>{
      i18n.changeLanguage(language)
    }
  
    const handleChange = (e) => {
      const {value} = e.target
      changeLanguage(value)
      setLng(value)
    }
  return (
    <div className='dark:text-[#ffff] dark:bg-[#000]'>
        <div className=' contener dark:text-[#ffff] dark:bg-[#000] bg-[#ccddeb] mx-auto'>
            <div className="navbar lg:w-[90%] 2xl:w-[81%] mx:w-[95%] mx-auto p-[10px] flex justify-between ">
                <div className='flex gap-[15px]'>
                    <div>
                    <img src={nav} alt="" />
                    </div>
                    <div>
                    <img className='' src={nav2} alt="" />
                    </div>
                </div>

                <ul className='lg:flex hidden py-[25px] text-[#7A7A7A] text-[16px] font-[400] w-[60%] justify-between'>
                    <Link to="/">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text")}</li>
                    </Link>

                    <Link to="/About_Us">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text1")}</li>
                    </Link>

                    <Link to="/Services">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text2")}</li>
                    </Link>

                    <Link to="/Universities">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text3")}</li>
                    </Link>

                    <Link to="/Students">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text4")}</li>
                    </Link>

                    <Link to="/News">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text5")}</li>
                    </Link>

                    <Link to="/Contacts">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text6")}</li>
                    </Link>

                </ul>

                <div className='flex md:gap-[20px] lg:py-[10px] mx:gap-[5px]'> 
                    <div className=' py-[10px]'>
                        <Switcher/>
                            </div>
                    <div className=' py-[10px]'>
                    <select className='dark:text-[#010000] font-[600] rounded-[10px] p-[5px]' value={lng} onChange={handleChange}>
                         <option value={"en"}>En</option>
                         <option value={"ru"}>Ru</option>
                     </select>
                    </div>  
                    <div className=' lg:hidden mx:flex pt-[10px]'>
                        <Temporary/>
                    </div>
                    <div className='md:flex hidden'>
                        <div className='mt-[5px]'>
                        <button className=' hover:bg-[#4140ac] hover:text-[#FFF] flex gap-[5px] py-[5px] items-center pl-[5px] text-[17px] font-[700] text-[#5874a1] pr-[20px] rounded-[25px] bg-[#fff]'><img src={icon} alt="" /> {t("text7")}</button>

                        </div>
                    </div>

                </div>
            </div>




        </div>
            <Outlet/>

    <div className="main mt-[60px] dark:mt-0  lg:py-[400px] mx:py-[300px] bg-[url('./assets/bg5.png')] bg-no-repeat lg:bg-cover ">
        <div className="contener lg:w-[80%]  2xl:w-[80%] sm:w-[60%] mx:w-[70%]">

          <div className='lg:flex justify-between'>
            <div className='lg:w-[60%] lg:flex hidden'></div>

            <div className=' p-[30px] bg-[#FFF] dark:bg-[#2a2727] rounded-[20px] lg:w-[40%] flex flex-col 'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500">
              <h1 className='text-[24px]  text-center font-[400]'>{t("text13")}</h1>
              <p className=' lg:w-[70%] mx:w-[80%] py-[10px] text-[18px] font-[400] mx-auto '>{t("text13A")}</p>
              <div className='  flex flex-col justify-center'>
                <input className='input bg-[#F8FCFF] dark:bg-[#2a2727] ' type="text" placeholder='Ваше имя' />
                <input className='input bg-[#F8FCFF] dark:bg-[#2a2727] ' type="text" placeholder='+998 (___) __ - __ - __' />
                <input className='input bg-[#F8FCFF] dark:bg-[#2a2727]  pb-[80px]' type="text" placeholder='Дополнительные комментарии' />
              </div>
              <div className='py-[15px] mb-[-65px] flex justify-center '>
                <button className=' hover:bg-[#BEE7FF] hover:text-[#5376b4] flex gap-[15px] py-[7px] items-center pl-[5px] text-center text-[17px] font-[700] text-[#ffffff] xl:w-[50%] mx:w-[70%] rounded-[25px] bg-[#89c0e0]'><img src={icon} alt="" /> {t("text13B")}</button>
              </div>

            </div>

          </div>


        </div>
      </div>

      <div className="main_2 dark:text-[#ffff] dark:bg-[#000] bg-[url('./assets/bg6.jpg')] bg-no-repeat bg-cover  ">
        <div className='dark:bg-[#000] dark:text-[#fff]'>
        <div className="contener text-center lg:w-[90%] pt-[100px] 2xl:w-[80%] md:w-[90%] sm:w-[90%] mx:w-[90%]">
          <h1 className='text-[#023994] text-[36px] font-[700]'>{t("text14")}</h1>
        <p className='text-[#7A7A7A] text-[20px] py-[10px] xl:w-[40%] mx-auto font-[500]'>{t("text14A")}</p>
            <div className="main_2A py-[120px] flex justify-center">
            <div className=' p-[30px] text-start dark:bg-[#2a2727] bg-[#FFF] rounded-[20px] xl:w-[40%] sm:w-[65%] mx:w-[98%] flex flex-col ' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000">
              <div className='px-[20px]'>
                <h1 className='text-[18px] font-[500]'>{t("text17C")}</h1>
                <p className='pt-[10px]'>+998 (99) 878-63-99</p>
                <p className='py-[3px]'>+998 (99) 878-63-99</p>

                <h1 className='text-[18px] pt-[25px] font-[500]'>{t("text17D")}</h1>
                <p className='pt-[10px]'>{t("text17C")}</p>

                <h1 className='text-[18px] pt-[25px] font-[500]'>{t("text17D")}</h1>
                <p className='pt-[10px] pb-[20px]'>Пн-Пт 9:00 - 18:00</p>
 



              </div>
              <div className='py-[15px] mb-[-65px] flex justify-center '>
                <button className=' hover:bg-[#BEE7FF] hover:text-[#5376b4] flex gap-[15px] py-[7px] items-center pl-[5px] text-center text-[17px] font-[700] text-[#ffffff] lg:w-[50%] mx:w-[70%] rounded-[25px] bg-[#89c0e0]'><img src={icon} alt="" /> {t("text14B")}</button>
              </div>

            </div>

            </div>

        </div>
        </div>
      </div>

            <div className=' contener dark:text-[#ffff] dark:bg-[#000] bg-[#fff]'>
            <div className="footer py-[20px] lg:w-[90%] 2xl:w-[81%] mx:w-[95%] mx-auto  flex justify-between">
                <div>
                    <img src={nav36} alt="" />
                </div>

                <ul className='lg:flex hidden flex-wrap py-[25px] text-[#7A7A7A] text-[16px] font-[400] w-[60%] justify-between'>
                    <Link to="/">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text")}</li>
                    </Link>

                    <Link to="/About_Us">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text1")}</li>
                    </Link>

                    <Link to="/Services">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text2")}</li>
                    </Link>

                    <Link to="/Universities">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text3")}</li>
                    </Link>

                    <Link to="/Students">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text4")}</li>
                    </Link>

                    <Link to="/News">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text5")}</li>
                    </Link>

                    <Link to="/Contacts">
                        <li className=' hover:text-[#52BFFF] hover:font-[700]'>{t("text6")}</li>
                    </Link>

                </ul>

                <div className='pt-[25px]'>
                    <img className='' src={nav36A} alt="" />
                </div>
                <div className=' lg:hidden mx:flex pt-[10px]'>
                        <Temporary/>
                </div>
              
            </div>
        </div>





    </div>
  )
}

export default Layout