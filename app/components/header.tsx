"use client"
import Link from "next/link";
import logo from "@/public/images/pictures/newMainLogo.png"
import hambergerIcon from "@/public/images/pictures/hamberger_menu.png"
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import styles from "@/app/styles/header.module.css"
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import ContextUser, { VAl } from "./Contex";



export default function Header() {
    const { web } = useContext<VAl | any>(ContextUser)
    const [actMenu, setactMenu] = useState<string | number>("left-[-7000]")
    const path = usePathname()
    return (
        <header className={`bg-black text-white main-header h-15 items-center flex sticky ${styles.mainHeader}`}>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 px-3 sm:px-5 md:px-0">
                <div className="flex justify-sart items-center md:justify-center">
                    {web?.logo &&
                        <Link href={"/"} className="w-[auto]">
                            <Image alt="logo" width={110} height={40} src={web.logo} />
                        </Link>
                    }
                </div>
                <div className={`flex items-center  justify-between ${styles.mobile_menu}  ${actMenu}`} >
                    <IoMdClose className="md:hidden absolute left-5" onClick={() => setactMenu("left-[-7000]")} />
                    <Link href={"/"} className={`${path === "/" && styles.border_link}`}>خانه</Link>
                    <Link href={"/pages/products"} className={`${path === "/pages/products" && styles.border_link}`}>محصولات</Link>
                    <Link href={"/pages/services"} className={`${path === "/pages/services" && styles.border_link}`}>خدمات</Link>
                    <Link href={"/pages/articles"} className={`${path === "/pages/articles" && styles.border_link}`}>مقالات</Link>
                    <Link href={"/pages/aboutUs"} className={`${path === "/pages/aboutUs" && styles.border_link}`}>درباره ما</Link>
                    <Link href={"/pages/contactUs"} className={`${path === "/pages/contactUs" && styles.border_link}`}>تماس با ما</Link>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    <Link className={`flex items-center bg-[#36941c] px-2 py-2 rounded-md ${styles.greenButton}`} href={"/pages/contactUs"}>
                        <IoIosCall className="ml-2" />درخواست مشاوره
                    </Link>
                </div>
                <div className="flex items-center justify-end" onClick={() => setactMenu("left-0")}>
                    <Image src={hambergerIcon} alt="menuButton" className="pointer md:hidden" />
                </div>
            </div>

        </header>
    )
}