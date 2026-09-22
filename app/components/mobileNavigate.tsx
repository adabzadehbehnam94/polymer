"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"



export default function MobileNavigate({ image, title, link ,click }: { image: any, title: string, link: string , click : ()=> void}) {
    const path = usePathname()
    return (
        <div className={`flex border-b-1 border-[#202427] justify-between items-center gap-4 py-4 px-3 
                            ${path === link && "bg-[#1c1f22] rounded-lg border-none"} `}>
            <span className={`w-1 h-6  rounded-md jstify-start ${path === link ? "bg-[#60ab1d]" : "bg-[#121519]"}`}></span>
            <div className="flex items-cente gap-4">
                <Link onClick={click}  href={link} >{title}</Link>
                <Image src={image} alt="home" width={25} height={25} />
            </div>

        </div>
    )
}