"use client"
import { ToastContainer, toast } from "react-toastify"
import { useActionState, useEffect, useState } from "react"
import { editUser } from "@/app/components/serverAction"
import { useRouter } from "next/navigation"

export interface CustomerDetails {
    customer: {
        id: number,
        name: string,
        mobile: string,
        email?: string | null,
        address?: string | null
    }
}

export default function EditCustomerForm({ customer }: CustomerDetails) {
    const [state, EditForm] = useActionState(editUser, {})
    const router = useRouter()
    useEffect(() => {
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.mobileErr) {
            toast.error(state.mobileErr)
        }

        if (state?.editError) {
            toast.error(state.editError)
        }
        if (state?.editSuccess) {
            toast.success(state.editSuccess)
            setTimeout(() => {
                router.push("/dashboard/customers")
            }, 2000);
        }

    }, [state])

    return (
        <>
            <form className="mb-5 flex flex-col w-70 mx-auto md:w-70 md:mr-10 lg:mr-5 " action={EditForm}>

                <input defaultValue={customer?.id} type="hidden" name="id" />

                <label className="mb-5" >نام : </label>

                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={customer?.name} name="name" />

                <label className="mb-5" > شماره موبایل : </label>
                <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="number" defaultValue={customer?.mobile} name="mobile" />

                {customer?.email &&
                    <>
                        <label className="mb-5" >ایمیل : </label>
                        <input className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1" type="text" defaultValue={customer?.email} name="email" />
                    </>
                }


                {customer?.address &&
                    <>
                        <label > آدرس : </label>
                        <textarea name="address" className="mb-5 border-2 rounded-md border-gray-300 px-2 py-1 h-50" defaultValue={customer?.address}></textarea>
                    </>
                }


                <button className="cursor-pointer mb-5 bg-blue-500 rounded-md text-white px-2 py-1 w-30">ثبت ویرایش</button>

            </form>
            <ToastContainer />
        </>
    )
}