"use client"

import { categoryEditAction } from "@/app/components/serverAction"
import { prisma } from "@/lib/prisma"
import { useParams } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import Image from "next/image"
import { stat } from "fs"

interface Data {
    data: Promise<{
        name: string,
        id: number
    }>
}

export default function FormEdit({ data }: any) {
    const params = useParams()
    const [state, formEdit] = useActionState(categoryEditAction, {})
    const [category, setCategory] = useState<null | Data>(null)

    useEffect(() => {
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.success) {
            toast.success(state?.success)
        } else {
            toast.error(state?.error)
        }
    }, [state])
    return (
        <>
            <form className="flex flex-col md:w-120 gap-3" action={formEdit}>
                <input type="hidden" name="id" defaultValue={data?.id} />
                <input type="hidden" name="oldImage" defaultValue={data?.image ?? ""} />
                <label>نام دسته بندی : </label>
                <input className="border-2 rounded-md border-gray-300  px-2 py-1" defaultValue={data?.name} type="text" name="name" />
                <label> کاربرد : </label>
                <input className="border-2 rounded-md border-gray-300  px-2 py-1" defaultValue={data?.application ?? ""} type="text" name="application" />
                {data?.image &&
                    <div className="flex gap-5 items-center">
                        <label> تصویر دسته بندی : </label>
                        <Image src={data?.image} alt="categoryLogo" width={70} height={50} className="w-auto h-20" />
                    </div>
                }
                <label>  انتخاب تصویر جدید : </label>
                <input className="border-2 border-gray-300 px-2 py-1 rounded-md cursor-pointer" type="file" name="image" />
                <button className="rounded-md bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 cursor-pointer hover:bg-blue-700 w-30 ">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </>
    )
}