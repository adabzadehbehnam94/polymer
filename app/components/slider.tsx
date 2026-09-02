"use client"

import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"
import "@/app/globals.css"
import { useRouter } from 'next/navigation';


interface sliderType {
    id: number,
    title: string,
    subtitle?: string | null,
    background: string,
    logo?: string | null
}



export default function Slider({ sliderData }: { sliderData: sliderType[] }) {

    const router = useRouter()

    return (
        <div >

            <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
            >

                {sliderData.map((item: sliderType) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="rounded-lg text-white flex flex-col md:flex-row justify-center items-center h-80  md:h-100 overflow-hidden bg-center bg-cover bg-no-repeat "
                            style={{ backgroundImage: `url(${item.background})` }}
                        >
                            <div className=" md:w-100 order-last md:order-first mx-auto bg-black/45 backdrop-blur-[3px] rounded-xl p-5">
                                <h1 className="md:text-3xl md:mb-5 mb-3 text-center md:text-start text-shadow-lg/30 ">{item.title}</h1>
                                {item?.subtitle && <p className="md:text-sm text-[#b9bab8] text-xs md:mb-5 mb-3 text-center md:text-start text-shadow-lg/30">{item.subtitle}</p>}
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={() => router.push("/pages/products")} className="ml-5 bg-black md:px-5 md:py-3 text-[#b9bab8] rounded-md border-2 border-[#b9bab8] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1 ">مشاهده محصولات</button>
                                    <button onClick={() => router.push("/pages/contactUs")} className=" md:px-5 bg-black md:py-3 rounded-md text-[#b9bab8] border-2 border-[#b9bab8] text-sm hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white transition duration-300 delay-100 cursor-pointer px-2 py-1">تماس با ما</button>
                                </div>
                            </div>
                            {item?.logo &&
                                <div className='mx-auto'>
                                    <Image className='w-[auto] lg:h-[200px] h-[100px] order-first md:order-last' src={item.logo} loading="eager" alt="slider" width={200} height={200} />
                                </div>
                            }

                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}