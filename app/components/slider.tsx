"use client"

import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import background1 from "@/public/pictures/new_background_slider.png"
import background2 from "@/public/pictures/new_background_slider2.png"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import "@/app/globals.css"






export default function Slider() {

    return (
        <div >
            
            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="text-white relative">
                        <div className="absolute md:top-20 md:right-40 md:w-100 top-5 right-5 ">
                            <h1 className="md:text-3xl md:mb-5 mb-3">مواد اولیه پلیمری با کیفیت , <span className="text-[#44a719]">پایدار</span> و قابل اعتماد</h1>
                            <p className="md:text-sm text-[#87898f] text-xs md:mb-5 mb-3">تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                            <button className="ml-5 bg-black md:px-5 md:py-3 text-[#87898f] rounded-md border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">مشاهده محصولات</button>
                            <button className=" md:px-5 bg-black md:py-3 rounded-md text-[#87898f] border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">تماس با ما</button>
                        </div>

                        <Image src={background1} loading="eager" alt="slider" style={{ width: "100%", height: "fit-content" }} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="text-white relative">
                        <div className="absolute md:top-20 md:right-40 md:w-100 top-5 right-5 ">
                            <h1 className="md:text-3xl md:mb-5 mb-3">مواد اولیه پلیمری با کیفیت , <span className="text-[#44a719]">پایدار</span> و قابل اعتماد</h1>
                            <p className="md:text-sm text-[#87898f] text-xs md:mb-5 mb-3">تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                            <button className="ml-5 bg-black md:px-5 md:py-3 text-[#87898f] rounded-md border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">مشاهده محصولات</button>
                            <button className=" md:px-5 bg-black md:py-3 rounded-md text-[#87898f] border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">تماس با ما</button>
                        </div>

                        <Image src={background2} loading="eager" alt="slider" style={{ width: "100%", height: "fit-content" }} />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    )
}