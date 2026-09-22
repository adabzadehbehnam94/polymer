"use client"
import Link from "next/link";
import hambergerIcon from "@/public/images/icons/icons8-menu-100.png"
import home from "@/public/images/icons/home.png"
import rubika from "@/public/images/pictures/rubika_gray_new.png"
import eitaa from "@/public/images/pictures/eitaa-icon-gray.png"
import bale from "@/public/images/pictures/bale_white.png"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import articles from "@/public/images/icons/articles.png"
import contactUs from "@/public/images/icons/contactUs.png"
import aboutUs from "@/public/images/icons/aboutUs.png"
import products from "@/public/images/icons/product.png"
import services from "@/public/images/icons/services.png"
import articles_green from "@/public/images/icons/articles_green.png"
import contactUs_green from "@/public/images/icons/contactUs_green.png"
import aboutUs_green from "@/public/images/icons/aboutUS_green.png"
import products_green from "@/public/images/icons/product_green.png"
import services_green from "@/public/images/icons/services_green.png"
import home_green from "@/public/images/icons/home_green.png"
import headphone from "@/public/images/icons/headphone_menu_mobile.png"
import close from "@/public/images/icons/icons8-close-100.png"
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import styles from "@/app/styles/header.module.css"
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import ContextUser, { VAl } from "./Contex";
import MobileNavigate from "./mobileNavigate";



export default function Header() {
    const { web } = useContext<VAl | any>(ContextUser)
    const [actMenu, setactMenu] = useState<string | number>("right-[-7000]")
    const [actMenuIcon, setactMenuIcon] = useState(hambergerIcon)
    const path = usePathname()
    const actMenutest = () => {
        return setactMenu(actMenu === "right-[-7000]" ? "right-0" : "right-[-7000]"),
            setactMenuIcon(actMenuIcon === hambergerIcon ? close : hambergerIcon)
    }
    return (
        <header className={`bg-[#111619] md:bg-[#08100e] md:border-b-1 border-[#1b2620] text-white main-header h-15 items-center flex sticky top-0 ${styles.mainHeader}`}>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 px-3 sm:px-5 md:px-0">
                <div className="flex justify-end items-center md:justify-center order-last md:order-first">
                    {web?.logo &&
                        <Link href={"/"} className="w-[auto]">
                            <Image alt="logo" width={110} height={40} src={web.logo} />
                        </Link>
                    }
                </div>
                <div className={`${styles.mobile_menu} ${actMenu} flex  items-center`} >
                    <div className="hidden md:flex items-center w-[100%]  justify-between">
                        <Link href={"/"} className={`${path === "/" && styles.border_link}`}>خانه</Link>
                        <Link href={"/pages/products"} className={`${path === "/pages/products" && styles.border_link}`}>محصولات</Link>
                        <Link href={"/pages/services"} className={`${path === "/pages/services" && styles.border_link}`}>خدمات</Link>
                        <Link href={"/pages/articles"} className={`${path === "/pages/articles" && styles.border_link}`}>مقالات</Link>
                        <Link href={"/pages/aboutUs"} className={`${path === "/pages/aboutUs" && styles.border_link}`}>درباره ما</Link>
                        <Link href={"/pages/contactUs"} className={`${path === "/pages/contactUs" && styles.border_link}`}>تماس با ما</Link>
                    </div>
                    <div className="bg-[#131519] flex flex-col md:hidden w-full h-150 overflow-scroll ">
                        <MobileNavigate title="خانه" link="/" image={path === "/" ? home_green : home} click={actMenutest}/>
                        <MobileNavigate title="محصولات" link="/pages/products" image={path === "/pages/products" ? products_green : products} click={actMenutest}/>
                        <MobileNavigate title="خدمات" link="/pages/services" image={path === "/pages/services" ? services_green : services} click={actMenutest}/>
                        <MobileNavigate title="مقالات" link="/pages/articles" image={path === "/pages/articles" ? articles_green : articles} click={actMenutest}/>
                        <MobileNavigate title="درباره ما" link="/pages/aboutUs" image={path === "/pages/aboutUs" ? aboutUs_green : aboutUs} click={actMenutest}/>
                        <MobileNavigate title="تماس با ما" link="/pages/contactUs" image={path === "/pages/contactUs" ? contactUs_green : contactUs} click={actMenutest}/>
                        <div className="rounded-lg border-2 border-[#202427] mt-5">
                            <div className="border-b-2 border-[#202427] flex justify-end items-center p-5">
                                <div className="mx-auto text-center">
                                    <h5>مشاوره و سفارش</h5>
                                    <p className="text-[#60ab1d] mt-2">09198282713</p>
                                </div>
                                <Image className="h-[fit-content]" src={headphone} alt="headphone" width={40} height={40}/>
                            </div>
                            <div className="grid grid-cols-3 p-5 gap-5">
                                <Link href={"/"} className="flex justify-center w-20 h-20 items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <FaWhatsapp  size={40} color="#88898f"/>
                                </Link>
                                <Link href={"/"} className="flex justify-center w-20 h-20 items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <FaInstagram  size={40}  color="#88898f"/>
                                </Link>
                                <Link href={"/"} className="flex justify-center w-20 h-20 items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <FaTelegramPlane  size={40}  color="#88898f"/>
                                </Link>
                                <Link href={"/"} className="flex justify-center w-20 h-20  items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <Image src={eitaa} width={35} height={35} alt="eitaa"/>
                                </Link>
                                <Link href={"/"} className="flex justify-center w-20 h-20 items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <Image src={bale} width={35} height={35} alt="bale"/>
                                </Link>
                                <Link href={"/"} className="flex justify-center w-20 h-20 items-center rounded-[50%] border-1 border-[#2d3f1c]">
                                    <Image src={rubika} width={35} height={35} alt="rubika"/>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    <Link className={`flex items-center bg-[#36941c] px-2 py-2 rounded-md ${styles.greenButton}`} href={"/pages/contactUs"}>
                        <IoIosCall className="ml-2" />درخواست مشاوره
                    </Link>
                </div>
                <div className="flex md:hidden items-center justify-start order-first" onClick={actMenutest}>
                    <Image src={actMenuIcon} alt="menuButton" width={30} height={30} className="pointer md:hidden" />
                </div>
            </div>

        </header>
    )
}