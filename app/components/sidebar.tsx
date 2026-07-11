"use client"
import Image from "next/image";
import Link from "next/link";
import Overview from "@/public/images/icons/analysis.png"
import Users from "@/public/images/icons/team.png"
import Products from "@/public/images/icons/products.png"
import Setting from "@/public/images/icons/settings.png"
import AddProduct from "@/public/images/icons/add.png"
import AddUser from "@/public/images/icons/plus.png"
import category from "@/public/images/icons/icons8-category-48.png"
import { usePathname } from "next/navigation";



export default function Sidebar(props : {click?: ()=> void}) {
    
    const path = usePathname()
    return (
        <section className="flex gap-2 flex-col w-50 text-white sm:text-black sm:border-l-2 sm:border-gray-300">
            <Link onClick={props.click} className="flex flex-row mb-5 tex-left w-[fit-content]" href={"/dashboard/categories"}><Image className="ml-3" src={category} alt="icon" width={20} height={20} />دسته بندی ها</Link>
            <Link onClick={props.click} className="flex flex-row mb-5 w-[fit-content]" href={"/dashboard/overview"}><Image className="ml-3" src={Overview} alt="icon" width={20} height={20} />نمای کلی</Link>
            <Link onClick={props.click} className="flex flex-row mb-5 w-[fit-content]" href={"/dashboard/products"}><Image className="ml-3" src={Products} alt="icon" width={20} height={20} />محصولات</Link>
            <Link onClick={props.click} className="flex flex-row mb-5 w-[fit-content]" href={"/dashboard/customers"}><Image className="ml-3" src={Users} alt="icon" width={20} height={20} />مشتریان</Link>
            <Link onClick={props.click} className="flex flex-row mb-5 w-[fit-content]" href={"/dashboard/setting"}><Image className="ml-3" src={Setting} alt="icon" width={20} height={20} />تنضیمات</Link>
            <Link onClick={props.click} className="flex flex-row mb-5 w-[fit-content]" href={"/dashboard/products/importProduct"}><Image className="ml-3" src={AddProduct} width={20} height={20} alt="image" /> ایجاد محصول جدید</Link>
            <Link onClick={props.click} className="flex mb-5 w-[fit-content]" href={"/dashboard/customers/addCustomer"}><Image  className="ml-3" src={AddUser} width={20} height={20} alt="image"/>ایجاد مشتری جدید</Link>
        </section>)
}