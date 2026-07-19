"use client"

import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import background1 from "@/public/images/pictures/new_background_slider.png"
import background2 from "@/public/images/pictures/new_background_slider2.png"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import "@/app/globals.css"
import { title } from 'process';


interface sliderType {
    id : number,
    title: string,
    subtitle?: string | null,
    background: string,
    logo?: string | null
}



export default function Slider({ sliderData }: { sliderData:sliderType[] }) {

    return (
        <div >

            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
            >

                {sliderData.map((item: sliderType) => (
                    <SwiperSlide  key={item.id}>
                        <div 
                        className="text-white relative  h-100 overflow-hidden bg-center bg-cover bg-no-repeat "
                        style={{backgroundImage : `url(${item.background})`}}
                        >
                            <div className="absolute md:top-20 md:right-40 md:w-100 top-5 right-5 ">
                                <h1 className="md:text-3xl md:mb-5 mb-3">{item.title}</h1>
                                {item?.subtitle && <p className="md:text-sm text-[#87898f] text-xs md:mb-5 mb-3">{item.subtitle}</p>}
                                <button className="ml-5 bg-black md:px-5 md:py-3 text-[#87898f] rounded-md border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">مشاهده محصولات</button>
                                <button className=" md:px-5 bg-black md:py-3 rounded-md text-[#87898f] border-2 border-[#87898f] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">تماس با ما</button>
                            </div>
                            {item?.logo && 
                                <div>
                                    <Image className='absolute top-50 left-30' src={item.logo} loading="eager" alt="slider" width={300} height={300} />
                                </div>
                            }

                            
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}