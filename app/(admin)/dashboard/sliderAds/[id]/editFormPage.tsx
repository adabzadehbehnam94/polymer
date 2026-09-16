"use client"

import { editAds } from "@/app/components/serverAction"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

interface DataType {
    data: {
        id: number,
        title: string,
        subtitle?: string | null,
        background: string,
        backgroundPublicId: string,
        logo?: string | null,
        logoPublicId?: string | null
    }
}



export default function EditFormPage({ data }: DataType) {

    const initialState = {
        errtitle: "",
        success: "",
        error: ""
    }

    const [state, editAction] = useActionState(editAds, initialState)
    const router = useRouter()

    useEffect(() => {
        if (state?.errtitle) {
            toast.error(state.errtitle)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
            setTimeout(() => {
                router.refresh()
            }, 2000);
        }
    }, [state])

    return (
        <div>
            <form className="flex flex-col gap-3 lg:w-120" action={editAction}>
                <input type="hidden" defaultValue={data.id} name="id" />
                
                <input type="hidden" defaultValue={data.logo ?? ""} name="oldLogo" />
                <input type="hidden" defaultValue={data.logoPublicId ?? ""} name="oldLogoPblicId" />
                <input type="hidden" defaultValue={data.background} name="oldBackground" />
                <input type="hidden" defaultValue={data.backgroundPublicId} name="oldBackgroundPublicId" />

                
                <label>تیتر اصلی : </label>
                <input defaultValue={data.title} className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" name="title" />
                <label>متن کوتاه (اختیاری) : </label>
                <input defaultValue={data.subtitle ?? ""} className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" name="subtitle" />
                <label>تصویر تبلیغ  : </label>
                <Image src={data.background} className="h-30" alt="background" width={200} height={100} />
                <label>تصویر جدید : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 cursor-pointer" type="file" name="background" />

                {data?.logo &&
                    <>
                        <label>لوگو : </label>
                        <Image src={data.logo} className="h-25" alt="background" width={100} height={100} />
                    </>
                }
                <label>  لوگو جدید (اختیاری) : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 cursor-pointer" type="file" name="logo" />
                <button className="bg-blue-500 cursor-pointer rounded-md hover:bg-blue-700 text-white py-1 w-20">ثبت</button>
            </form>
            <ToastContainer />
        </div>
    )
}