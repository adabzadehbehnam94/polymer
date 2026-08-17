"use client"
import localFont from "next/font/local"
import Image from "next/image"

interface AboutType {

    number: string,
    text: string,
    text2: string,
    logo: any

}

const farsiNumber = localFont({
    src: "../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function AboutUsCard({ number, text, text2, logo }: AboutType) {
    return (
        <div className={`flex flex-col gap-1 justify-center items-center h-50 rounded-lg border-1 border-[#10201E] ${farsiNumber.className}`}>

            <div className="flex gap-2">
                <div >
                    <h2 className="text-[#54a81a] text-3xl">{`${number}`}</h2>
                    <p className="text-[#adaba9] text-xs mr-2">{text}</p>
                </div>
                <div className=" flex items-center justify-center rounded-[50%] bg-[#162f11] w-15 h-15">
                    <Image src={logo} alt="logo" width={40} height={40} />
                </div>
            </div>

            <p className="text-[#adaba9] text-xs">{text2}</p>
        </div>
    )
}