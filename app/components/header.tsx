import Link from "next/link";
import logo from "@/public/pictures/logo menu.png"
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import styles from "@/app/styles/header.module.css"



export default function Header() {
    return (
        <header className={`bg-black text-white main-header h-15 items-center flex ${styles.mainHeader}`}>
            <div className="container mx-auto grid grid-cols-3">
                <div className="flex justify-center items-center">
                    <Link href={"/"} className="w-fit"><Image alt="logo" src={logo} width={120} height={50} /></Link>
                </div>
                <div className="flex justify-between items-center" >
                    <Link href={"/pages/home"}>خانه</Link>
                    <Link href={"/pages/products"}>محصولات</Link>
                    <Link href={"/pages/services"}>خدمات</Link>
                    <Link href={"/pages/articles"}>مقالات</Link>
                    <Link href={"/pages/aboutUs"}>درباره ما</Link>
                    <Link href={"/pages/contactUs"}>تماس با ما</Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link className={`flex items-center bg-[#36941c] px-2 py-2 rounded-md ${styles.greenButton}`} href={"/consulting"}>
                        <IoIosCall className="ml-2" />درخواست مشاوره
                    </Link>
                </div>
            </div>
        </header>
    )
}