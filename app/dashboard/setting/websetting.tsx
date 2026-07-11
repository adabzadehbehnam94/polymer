"use client"
import { editWebSetting } from "@/components/serverAction"
import Image from "next/image"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Web {
    webDetail: {
        webName: string,
        detail: string,
        logo: string,
        id: number,
        email : string,
        mobile : string,
        address : string
    }
}

export default function WebSetting({ webDetail }: Web) {
    const [state, webAcion] = useActionState(editWebSetting, {})
    const [changeImage, setChangeImage] = useState("logo")
    const [Imagebox, setImageBox] = useState(false)

    useEffect(() => {
        if (state?.success) {
            toast.success(state.success)
        } else {
            toast.error(state.error)
        }
    }, [state])


    const imageButton = () => {
        setImageBox(!Imagebox)
        setChangeImage(Imagebox ? "oldLogo" : "logo")
    }

    return (
        <>
            <h3 className="mb-5">تنظیمات سایت</h3>

            <form className="flex flex-col gap-2 " action={webAcion}>
                <input type="hidden" defaultValue={webDetail.id} name="id" />
                <input type="hidden" defaultValue={webDetail.logo} name="oldLogo" />
                <label >نام سایت : </label>
                <input defaultValue={webDetail.webName} name="webName" className="rounded-md border-gray-300 border-2 px-2 py-1 " type="text" />
                <br />

                <label >توضیحات سایت : </label>
                <textarea defaultValue={webDetail.detail} name="detail" className="rounded-md border-gray-300 border-2 px-2 py-1 h-50" ></textarea>


                <div className="flex flex-col xl:flex-row gap-2">
                    <label>لوگو : </label>
                    <Image className="w-auto h-auto" src={webDetail.logo} width={50} height={50} alt="logo" />
                    <input className="rounded-md border-gray-300 border-2 px-2 py-1 cursor-pointer" name="logo" type="file" />
                </div>
                <label > آدرس ایمیل شرکت : </label>
                <input defaultValue={webDetail.email} name="email" className="rounded-md border-gray-300 border-2 px-2 py-1" type="text" />
                <label > شماره موبایل : </label>
                <input defaultValue={webDetail.mobile} name="mobile" className="rounded-md border-gray-300 border-2 px-2 py-1" type="number" />
                <label > آدرس شرکت : </label>
                <textarea defaultValue={webDetail.address} name="address" className="rounded-md border-gray-300 border-2 px-2 py-1 h-50" ></textarea>
                <button className="bg-blue-500 rounded-md text-white w-30 cursor-pointer py-1 mt-2" type="submit">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </>
    )
}