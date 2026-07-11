"use client"

import { categoryEditAction } from "@/app/components/serverAction"
import { prisma } from "@/lib/prisma"
import { useParams } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

interface Data {
    data:Promise<{
        name: string,
        id: number
    }>
}

export default function FormEdit({ data }: any) {
    const params = useParams()
    const [state, formEdit] = useActionState(categoryEditAction, {})
    const [category, setCategory] = useState<null | Data>(null)
    
    useEffect(() => {
        if (state?.success) {
            toast.success(state?.success)
        } else {
            toast.error(state?.error)
        }
    }, [state])
    return (
        <>
            <form className="flex flex-col md:flex-row gap-3" action={formEdit}>
                <label>نام دسته بندی : </label>
                <input type="hidden" name="id" defaultValue={data?.id} />
                <input className="border-2 rounded-md border-gray-300 md:mx-2 px-2 py-1" defaultValue={data?.name} type="text" name="name" />
                <button className="rounded-md bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 cursor-pointer hover:bg-blue-100 w-30 md:w-auto">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </>
    )
}