"use client"
import Link from "next/link";
import logo from "@/public/images/pictures/newMainLogo.png"
import hambergerIcon from "@/public/images/icons/icons8-menu-100.png"
import close from "@/public/images/icons/icons8-close-100.png"
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import styles from "@/app/styles/header.module.css"
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import ContextUser, { VAl } from "./Contex";



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
                    <div className="bg-[#131519] flex flex-col md:hidden">
                        <Link href={"/"} className={`${path === "/" && styles.border_link}`}>خانه</Link>
                        <Link href={"/pages/products"} className={`${path === "/pages/products" && styles.border_link}`}>محصولات</Link>
                        <Link href={"/pages/services"} className={`${path === "/pages/services" && styles.border_link}`}>خدمات</Link>
                        <Link href={"/pages/articles"} className={`${path === "/pages/articles" && styles.border_link}`}>مقالات</Link>
                        <Link href={"/pages/aboutUs"} className={`${path === "/pages/aboutUs" && styles.border_link}`}>درباره ما</Link>
                        <Link href={"/pages/contactUs"} className={`${path === "/pages/contactUs" && styles.border_link}`}>تماس با ما</Link>
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