"use client"
import { removeAds } from "@/app/components/serverAction"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"


interface SliderItem {
    id: number,
    title: string,
    subtitle?: string | null,
    background: string,
    logo?: string | null
}



export default function AdsPage({ data }: { data: SliderItem[] }) {

    const router = useRouter()

    const removeAction = async (id: number) => {
        await removeAds(id)
        toast.success("تبلیغ با موفقیت حذف شد")
        setTimeout(() => {
            router.refresh()
        }, 3000);
    }

    return (
        <div className="flex flex-col">
            {data.map((item: SliderItem) => (
                
                <div key={item.id} className="flex lg:flex-row flex-col gap-5 border-b-2 border-gray-300 py-5">
                    <div >
                        <Image src={item.background} className="rounded-lg h-30" alt="image" width={200} height={100} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>{item.title}</p>
                        {item?.subtitle && <p> {item.subtitle}</p>}
                        <div className="flex gap-5">
                            <Link
                                href={`/dashboard/sliderAds/${item.id}`}
                                className="bg-blue-500 rounded-lg text-center py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                            >ویرایش تبلیغ</Link>

                            <button onClick={async () => await removeAction(item.id)} className="bg-blue-500 rounded-md text-white hover:bg-blue-700 px-2 py-1 cursor-pointer">حذف تبلیغ</button>
                        </div>
                    </div>

                </div>
            ))}
            <button className="bg-blue-500 rounded-md text-white hover:bg-blue-700 px-2 py-1 cursor-pointer my-5 w-40" onClick={() => router.push("/dashboard/sliderAds/addSlider")}>ایجاد تبلیغ جدید</button>
            <ToastContainer />
        </div>
    )
}