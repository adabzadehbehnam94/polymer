"use client"
import { categoryAction } from "@/app/components/serverAction"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function AddCategory() {
    const [state, categoryAct] = useActionState(categoryAction, {})
    useEffect(() => {
        if(state?.nameErr){
            toast.error(state.nameErr)
        }
        if(state?.erro){
            toast.error(state.error)
        }
        if(state?.success){
            toast.error(state.success)
        }
    }, [state])
    return (
        <div >
            <form className="flex flex-col gap-3 md:w-100 " action={categoryAct}>
                <label>نام دسته بندی : </label>
                <input className="border-2 border-gray-300 focus:border-blue-500 rounded-md px-2 py-1" type="text" name="name" />
                <label>  کاربرد : (اختیاری) </label>
                <textarea name="application" className="border-2 border-gray-300 focus:border-blue-500 rounded-md px-2 py-1 h-50" ></textarea>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <label >تصویر :</label>
                    <input className="cursor-pointer rounded-md border-2 border-gray-300 px-2 py-1 " name="image" type="file" />
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 rounded-md text-white w-20 px-2 py-1 cursor-pointer" >ثبت</button>
            </form>
            <ToastContainer />
        </div>
    )
}