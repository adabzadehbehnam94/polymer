"use client"
import { registerAction } from "@/app/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

export default function AddUser() {
    const [state, formRegister] = useActionState(registerAction, {})


    useEffect(() => {
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.mobileErr) {
            toast.error(state.mobileErr)
        }

        
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
        }
    }, [state])

    return (
        <div >

            <form className="flex flex-col lg:w-100 mx-auto sm:mr-5" action={formRegister}>

                <label>نام : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="name" />

                <br />
                <label>شماره موبایل: </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="number" name="mobile" />

                <br />
                <label>آدرس (اختیاری) : </label>
                <textarea name="address" className="border-2 border-gray-300 rounded-md px-2 py-1 my-2 h-50"></textarea>

                <br />
                <label>ایمیل (اختیاری) :  </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="email" />



                <br />
                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700" type="submit">ثبت مشتری</button>
                <br />

            </form>
            <ToastContainer />
        </div>
    )
}