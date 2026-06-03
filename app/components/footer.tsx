import logoFooter from "@/public/pictures/footerLogo.png"
import rubika from "@/public/pictures/rubika_gray_new.png"
import eitaa from "@/public/pictures/eitaa-icon-gray.png"
import bale from "@/public/pictures/bale_white.png"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import style from "@/app/styles/footer.module.css"

export default function Footer(){
    return(
        <footer className={`${style.main_footer}`}>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <section className=" md:pl-2">
                    <Link href={"/"} className="w-fit block"><Image src={logoFooter} alt="logoFooter"/></Link>
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
                    <h2>محصولات</h2>
                    <Link href={"/"}>پلی اتیلن (PE)</Link>
                    <Link href={"/"}>پلی پرو بیلن (PP)</Link>
                    <Link href={"/"}>PVC</Link>
                    <Link href={"/"}>ABS</Link>
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
                    <p className="flex"><FaMobileAlt />0919-828-2713</p>
                    <p className="flex"><IoLocationOutline />تهران</p>
                </section>
            </div>
            <div className="container mx-auto flex justify-center items-center gap-2 ">
               <p>تمامی حقوق این وب سایت متعلق به شرکت پلیمر یاوری می باشد . </p>
               <p className="flex gap-2"><FaRegCopyright />1405</p>
            </div>
        </footer>
    )
}