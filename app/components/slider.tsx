"use client"
import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from "react";
import background1 from "@/public/pictures/new_background_slider.png"
import background2 from "@/public/pictures/new_background_slider2.png"
import backgroundLogo from "@/public/pictures/logo.png"
import Image from "next/image";




export default function Slider() {

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            loop : true,
            autoplay:{
                delay : 2000
            }
        });


    }, [])

    return (
        <div>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="text-white relative">
                            <div className="absolute top-20 right-40 w-100 ">
                                <h1 className="text-3xl mb-5">مواد اولیه پلیمری با کیفیت , <span className="text-[#44a719]">پایدار</span> و قابل اعتماد</h1>
                                <p className="text-sm text-[#87898f] mb-5">تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                                <button className="ml-5 bg-black px-5 py-3 text-[#87898f] rounded-md border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer ">مشاهده محصولات</button>
                                <button className=" px-5 bg-black py-3 rounded-md text-[#87898f] border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer">تماس با ما</button>
                            </div>  

                            <Image src={background1} loading="eager" alt="slider" style={{ width: "100%", height: "fit-content" }} />
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="text-white relative">
                            <div className="absolute top-20 right-40 w-100 ">
                                <h1 className="text-3xl mb-5">مواد اولیه پلیمری با کیفیت , <span className="text-[#44a719]">پایدار</span> و قابل اعتماد</h1>
                                <p className="text-sm text-[#87898f] mb-5">تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                                <button className="ml-5 bg-black px-5 py-3 text-[#87898f] rounded-md border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer">مشاهده محصولات</button>
                                <button className=" px-5 bg-black py-3 rounded-md text-[#87898f] border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer">تماس با ما</button>
                            </div> 

                            <Image src={background2} loading="eager" alt="slider" style={{ width: "100%", height: "fit-content" }} />
                        </div>
                    </div>

                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}