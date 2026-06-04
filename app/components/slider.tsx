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
            modules: [Navigation, Pagination]
        });


    }, [])

    return (
        <div>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="text-white relative">
                            <div className="absolute top-0 right-5 ">
                                <h1>مواد اولیه پلیمری با کیفیت , <span>پایدار</span> و قابل اعتماد</h1>
                                <p>تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                                <button>مشاهده محصولات</button>
                                <button>تماس با ما</button>
                            </div>

                            <Image src={background1} alt="slider" style={{ width: "100%", height: "fit-content" }} />
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="text-white relative">
                            <div className="absolute top-0 right-5 ">
                                <h1>مواد اولیه پلیمری با کیفیت , <span>پایدار</span> و قابل اعتماد</h1>
                                <p>تامین کننده انواع پلیمر های صنعتی , گرانول و کامیاند های پلیمری با استاندارد های جهانی</p>
                                <button>مشاهده محصولات</button>
                                <button>تماس با ما</button>
                            </div>

                            <Image src={background2} alt="slider" style={{ width: "100%", height: "fit-content" }} />
                        </div>
                    </div>

                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </div>
    )
}