"use client"

import Link from "next/link"
import Image from "next/image"
import rubika from "@/public/images/pictures/rubika_green2_new.png"
import eitaa from "@/public/images/pictures/eitaa-icon-green.png"
import bale from "@/public/images/pictures/bale_green.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import address from "@/public/images/icons/icons8-location-100.png"
import phone from "@/public/images/icons/icons8-phone-100.png"
import email from "@/public/images/icons/icons8-email-96.png"
import clock from "@/public/images/icons/icons8-clock-100.png"
import DetailCrad from "@/app/components/detailCard"
import { useActionState, useEffect } from "react"
import { messageAction } from "@/app/components/serverAction"
import { toast, ToastContainer } from "react-toastify"

interface SettingType {
    email?: string | null;
    name: string;
    phone: string;
    id: number;
    detail?: string | null;
    logo: string;
    address: string;
    workingHours?: string | null;

}

export default function FetchSetting({ settingData }: { settingData: SettingType }) {
    const initialState = {
        errName :"",
        errPhone :"",
        errMessage:"",
        success : "",
        error : ""
    }

    const [state , sendMessage] = useActionState(messageAction , initialState)

    useEffect(()=>{

        if(state?.errName){
            toast.error(state.errName)
        }

        if(state?.errPhone){
            toast.error(state.errPhone)
        }

        if(state?.errMessage){
            toast.error(state.errMessage)
        }

        if(state?.error){
            toast.error(state.error)
        }

        if(state?.success){
            toast.success(state.success)
        }

    },[state])
    return (
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-5 my-8">
                <section className="md:col-span-3 lg:col-span-3 bg-[#0b1819] border-1 border-[#172423] px-8 py-3 rounded-lg">
                    <p className="text-[#f8f4f0] text-2xl my-3">پیام های خود را برای ما ارسال کنید</p>
                    <p className="text-[#656c6c] mb-8">برای دریافت مشاوره و یا انتقاد و پیشنهاد فرم زیر را تکمیل کنید</p>
                    <form className="flex flex-col gap-5" action={sendMessage}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#9b9e9a]">
                            <input className="text-xs bg-[#111C1A] border-1 border-[#22312A] rounded-lg px-3 py-2" type="text" name="name"
                                placeholder="نام و نام خانوادگی" />
                            <input
                                className="text-xs bg-[#111C1A] border-1 border-[#22312A] rounded-lg px-3 py-2"
                                type="number" name="phone" placeholder="شماره تماس" />
                        </div>
                        <input className="text-xs text-[#9b9e9a] bg-[#111C1A] border-1 border-[#22312A] rounded-lg px-3 py-2"
                            name="email"
                            type="text" placeholder="ایمیل (اختیاری)" />
                        <select className="text-[#9b9e9a] text-xs bg-[#111C1A] border-1 border-[#22312A] rounded-lg px-3 py-2"
                            name="subject" >
                            <option value="مشاوره" key="1">مشاوره</option>
                            <option value="انتقاد" key="2">انتقاد</option>
                            <option value="پیشنهاد" key="3">پیشنهاد</option>
                        </select>
                        <textarea className="h-50 text-[#9b9e9a] text-xs bg-[#111C1A] border-1 border-[#22312A] rounded-lg px-3 py-2"
                            name="messageText"
                            placeholder="پیام شما"></textarea>
                        <button className="bg-[#3a7b19] text-white text-sm cursor-pointer md:w-50 rounded-lg px-4 py-3">ارسال پیام</button>
                    </form>
                </section>
                <section className="md:col-span-2 lg:col-span-1">
                    <div className=" bg-[#0a1819] border-1 border-[#172423] rounded-lg px-3 py-2 mb-5">
                        <h3 className="text-[#f8f9f8] text-lg text-center mb-5">اطلاعات تماس</h3>
                        
                            <div>
                                <DetailCrad image={address} title="آدرس" description={settingData.address} />

                                <DetailCrad image={phone} title="شماره تماس" description={settingData.phone} />

                                {settingData?.email &&
                                    <DetailCrad image={email} title="ایمیل" description={settingData.email} />
                                }

                                {settingData?.workingHours &&
                                    <DetailCrad image={clock} title="ساعات کاری" description={settingData.workingHours} />
                                }
                            </div>
                        
                    </div>
                    <div className=" bg-[#0a1819] border-1 border-[#172423] rounded-lg px-3 py-2 ">
                        <h3 className="text-lg text-center text-[#fafbf9] my-5 ">ما را دنبال کنید</h3>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-6 grid-cols-4 justify-center md:gap-3 gap-5 mb-5 text-[#b4d860] ">
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3 justify-center" href={"https://web.whatsapp.com/"}><FaWhatsapp size={25} /></Link>
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3" target="_blank" href={"https://web.telegram.org/k/#@mohsenyavari_m"}><FaTelegramPlane size={25} /></Link>
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3" target="_blank" href={"https://www.instagram.com/yavari_polymer/"}><FaInstagram size={25} /></Link>
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3" target="blank" href={"https://web.eitaa.com/"}><Image src={eitaa} width={25} height={20} alt="eitaa" /></Link>
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3" target="blank" href={"https://web.bale.ai/"}><Image src={bale} width={25} height={20} alt="bale" /></Link>
                            <Link className="w-[fit-content] bg-[#1e3712] rounded-[50%] px-3 py-3" target="blank" href={"https://web.rubika.ir/"}><Image src={rubika} width={25} height={20} alt="rubika" /></Link>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer/>
        </div>
    )
}