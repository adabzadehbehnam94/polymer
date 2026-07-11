"use client"
import { categoryAction } from "@/app/components/serverAction"
import { useActionState } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function AddCategory(){
    const [state , categoryAct] = useActionState(categoryAction,{})
    return(
        <div>
            <form action={categoryAct}>
                <label>نام دسته بندی : </label>
                <input className="border-2 border-gray-300 focus:border-blue-500 rounded-md px-2 py-1" type="text" name="name" />
                <button className="cursor-pointer rounded-md bg-blue-500 hover:bg-blue-300 text-white px-2 py-1 mr-3" onClick={()=> toast.success("دسته بندی با موفقیت ثبت شد")} type="submit">ثبت</button>
            </form>
            <ToastContainer/>
        </div>
    )
}