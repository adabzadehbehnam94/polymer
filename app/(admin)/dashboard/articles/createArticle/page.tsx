"use client"

import { articleAction } from "@/app/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"



export default function CreateArticle() {

    const initialState = {
        errtitle: "",
        errcontent: "",
        errimage: "",
        error: "",
        success: ""
    }

    const [state, createArticle] = useActionState(articleAction, initialState)

    useEffect(() => {
        if (state?.errtitle) {
            toast.error(state.errtitle)
        }

        if (state?.errcontent) {
            toast.error(state.errcontent)
        }

        if (state?.errimage) {
            toast.error(state.errimage)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
        }
    }, [])

    return (
        <div>
            <form className="flex flex-col gap-4" action={createArticle}>
                <label>تیتر مقاله : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="title" />


                <label>خلاصه متن (اختیاری): </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="summary" />

                <label> نام صفحه مقاله (اختیاری): </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="slug" />


                <label> متن اصلی مقاله : </label>
                <textarea name="content" className="border-2 border-gray-300 rounded-md px-2 py-1 my-2 h-50"></textarea>


                <label>تصویر مقاله: </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="file" name="image" />

                <label> نام نویسنده (اختیاری) : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="author" />


                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700" type="submit">ثبت مقاله</button>


            </form>
            <ToastContainer />
        </div>
    )
}