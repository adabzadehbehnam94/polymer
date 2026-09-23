"use client"

import { adsAction } from "@/app/components/serverAction"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

export default function ImportAds(){
    const initialstate = {
        errtitle : "",
        errBackground : "",
        success : "",
        error : ""
    }
    const [state , slideraction] = useActionState(adsAction ,initialstate)
    useEffect(()=>{
        if(state?.errtitle){
            toast.error(state.errtitle)
        }
         if(state?.errBackground){
            toast.error(state.errBackground)
        }
         if(state?.error){
            toast.error(state.error)
        }
         if(state?.success){
            toast.success(state.success)
        }
    },[state])
    return(
        <div>
            <form className="flex flex-col gap-3 md:w-120" action={slideraction}>
                <label>تیتر اصلی : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text"  name="title"/>
                <label>متن کوتاه (اختیاری) : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text"  name="subtitle"/>
                <label>تصویر تبلیغ  : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 cursor-pointer" type="file"  name="background"/>
                <label> لوگو (اختیاری) : </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 cursor-pointer" type="file"  name="logo"/>
                <button className="bg-blue-500 cursor-pointer rounded-md hover:bg-blue-700 text-white w-20 py-1">ثبت</button>
            </form>
            <ToastContainer/>
        </div>
    )
}