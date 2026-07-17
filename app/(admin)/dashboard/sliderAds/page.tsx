import { prisma } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import Button from "./adsPage"
import AdsPage from "./adsPage"
import { removeAds } from "@/app/components/serverAction"
import { toast, ToastContainer } from "react-toastify"


// interface SliderItem {
//     data: [
//         {
//             id: number,
//             title: string,
//             subtitle?: string | null |undefined,
//             background: string,
//             logo?: string | null |undefined
//         }
//     ]
// }

// interface SliderServer {
//     data: {
//         id: number,
//         title: string,
//         subtitle?: string | null,
//         background: string,
//         logo?: string | null
//     }
// }

export default async function SliderAds() {

    const slider = await prisma.sliderAds.findMany()

    if (slider.length === 0) {
        return (
            <div>
                <p className="text-center">تبلیغی وجود ندارد</p>
                <Link className="bg-blue-500 rounded-md text-white hover:bg-blue-700 px-2 py-1" href={"/dashboard/sliderAds/addSlider"}>ایجاد تبلیغ جدید</Link>
            </div>
        )
    }

    return (
        <div >
            <AdsPage data={slider}/>
            <ToastContainer />
        </div>
    )
}