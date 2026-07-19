"use client"
import "@/app/globals.css"
import Image from "next/image"
import background from "@/public/images/pictures/newBackgroundHeaderPage.png"
import { url } from "inspector"
import { usePathname } from "next/navigation"

interface HeaderType {
    title: string,
    subtitle: string,
    icon?: any,
    summary? : string
}

export default function HeaderPages({ title, subtitle, icon , summary }: HeaderType) {
    const path = usePathname()
    
    return (
        <div>
            <header className="bg-cover bg-center h-50 relative overflow-hidden" style={
                { backgroundImage: path === "/pages/aboutUs" ? "url('/images/pictures/aboutPageHeader.png')" : "url('/images/pictures/background_header_page.png')" }
            }>
                
                <div className="relative mr-40 mt-15">
                    <div className="flex  items-center gap-3 mb-5">
                        {icon && <Image src={icon} width={40} height={40} alt="icon" />}
                        <h1 className=" text-[#f5f5f4]  text-4xl">{title}</h1>
                    </div>
                    <p className=" text-[#969a97] text-sm">{subtitle}</p>
                    {summary && <p className=" text-white">{summary}</p>}
                </div>
            </header>
        </div>
    )
}