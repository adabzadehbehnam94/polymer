"use client"
import "@/app/globals.css"
import Image from "next/image"
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
            <header className="bg-cover bg-center min-h-50 relative overflow-hidden border-[#232a2b] border-b-1 border-t-1" style={
                { backgroundImage: path === "/pages/aboutUs" ? "url('/images/pictures/aboutPageHeader.png')" : "url('/images/pictures/background_header_page.png')" }
            }>
                
                <div className="relative mx-5 md:mr-20 lg:mr-40 mt-15">
                    <div className="flex  items-center gap-3 mb-3">
                        {icon && <Image src={icon} width={40} height={40} alt="icon" />}
                        <h1 className=" text-[#f5f5f4]  text-4xl">{title}</h1>
                    </div>
                    <p className={`${path === '/pages/aboutUs' ? 'text-white' : 'text-[#969a97]'} text-md mb-5`}>{subtitle}</p>
                    {summary && <p className=" text-[#969a97] mb-12 md:w-150">{summary}</p>}
                </div>
            </header>
        </div>
    )
}