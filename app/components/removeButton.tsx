"use client"

import { removeProduct, removeUser } from "@/app/components/serverAction"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"



export default function RemoveButton({ id }: { id: number }) {
    const router = useRouter()
    const path = usePathname()

    const removeAction = (id: number) => {
        const data = path == `/dashboard/products/${id}` ? removeProduct(id) : removeUser(id)
        toast.success(path == `/dashboard/products/${id}` ? "کالا با موفقیت حذف شد" : "مشتری با موفقیت حذف شد")
        setTimeout(() => {
            router.push(path == `/dashboard/products/${id}` ? "/dashboard/products" : "/dashboard/customers")
        }, 2000);
    }

    return (
        <>
            <button onClick={async () => removeAction(id)} className="cursor-pointer ml-5 bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700">{path == `/dashboard/products/${id}` ? "حذف کالا" : "حذف مشتری"}</button>
            <ToastContainer />
        </>
    )
}