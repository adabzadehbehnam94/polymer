"use client"
import logoFooter from "@/public/images/pictures/newMainLogo.png"
import rubika from "@/public/images/pictures/rubika_gray_new.png"
import eitaa from "@/public/images/pictures/eitaa-icon-gray.png"
import bale from "@/public/images/pictures/bale_white.png"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import style from "@/app/styles/footer.module.css"
import ContextUser, { VAl } from "./Contex"
import { useContext } from "react"

export default function Footer(){
    const {web ,categoryFooter} = useContext<VAl | any>(ContextUser)
    return(
        <footer className={`${style.main_footer}`}>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <section className=" md:pl-2">
                    
                    {web?.logo &&
                        <Link href={"/"} className="w-[auto] block">
                            <Image alt="logo" width={120} height={50} src={web.logo} />
                        </Link>
                    }
                    <p>تامین کننده انواع مواد پلیمری با کیفیت , پایدار و قابل اعتماد</p>
                    <div className={`flex justify-between ${style.social_media}`}>
                        <Link href={"@mohsenyavary.com"}><FaWhatsapp /></Link>
                        <Link href={"@mohsenyavary.com"}><FaTelegramPlane /></Link>
                        <Link href={"@mohsenyavary.com"}><FaInstagram /></Link>
                        <Link href={"@mohsenyavary.com"}><Image src={eitaa} width={20} height={20} alt="eitaa"/></Link>
                        <Link href={"@mohsenyavary.com"}><Image src={bale} width={20} height={20} alt="bale"/></Link>
                        <Link href={"@mohsenyavary.com"}><Image src={rubika} width={20} height={20} alt="rubika"/></Link>
                    </div>
                </section>
                <section className="flex flex-col lg:mr-5 ">
                    <h2>دسترسی سریع</h2>
                    <Link href={"/"}>خانه</Link>
                    <Link href={"/pages/products"}>محصولات</Link>
                    <Link href={"/pages/services"}>خدمات</Link>
                    <Link href={"/pages/articles"}>مقالات</Link>
                    <Link href={"/pages/aboutUs"}>درباره ما</Link>
                    <Link href={"/pages/contactUs"}>تماس با ما</Link>
                </section>
                <section className="flex flex-col">
                    <h2>دسته بندی ها</h2>
                    
                    {categoryFooter?.map((item : {name : string , id:number})=>(
                        <Link key={item.id} href={`/pages/products?category=${item.id}`}>{item.name}</Link>
                    ))}
                </section>
                <section>
                    <h2>خدمات</h2>
                    <p>مشاوره فنی</p>
                    <p>تامین مواد اولیه</p>
                    <p>ارسال</p>
                    <p>کنترل کیفیت</p>
                </section>
                <section className={`${style.address}`}>
                    <h2>اطلاعات تماس</h2>
                    <p className="flex"><FaMobileAlt />{web?.phone}</p>
                    <p className="flex"><IoLocationOutline />{web?.address}</p>
                </section>
            </div>
            <div className="container mx-auto flex justify-center items-center gap-2 ">
               <p>تمامی حقوق این وب سایت متعلق به شرکت پلیمر یاوری می باشد . </p>
               <p className="flex gap-2"><FaRegCopyright />1405</p>
            </div>
        </footer>
    )
}