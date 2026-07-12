"use client"

import { importWebDetail } from "@/components/serverAction"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

interface initialState {
    errName?: string,
    errLogo?: string,
    errAddress?: string,
    errMobile?: string,
    success?: string,
    error?: string
}

export default function ImportWebSetting() {
    const initialState = {
        errName: "",
        errLogo: "",
        errAddress: "",
        errMobile: "",
        success: "",
        error: ""
    }

    

    const [state, webAction] = useActionState(importWebDetail, initialState)

    useEffect(()=>{
        if(state?.errName){
            toast.error(state.errName)
        }
        if(state?.errAddress){
            toast.error(state.errAddress)
        }
        if(state?.errMobile){
            toast.error(state.errMobile)
        }
        if(state?.errLogo){
            toast.error(state.errName)
        }
        if(state?.success){
            toast.error(state.success)
        }
        if(state?.error){
            toast.error(state.error)
        }
        
    },[state])

    return (
        <div>
            <form className="flex flex-col md:w-80 lg:w-120 gap-3" action={webAction}>
                <label>نام شرکت : </label>
                <input className="border-2 border-gray-300 px-2 py-1 rounded-md" type="text" name="name" />
               
                <label>معرفی شرکت : </label>
             
                <textarea className="border-2 border-gray-300 px-2 py-1 rounded-md h-50" name="detail"></textarea>
                
                <label>لوگو شرکت</label>
                <input className="border-2 border-gray-300 px-2 py-1 rounded-md cursor-pointer" type="file" name="logo" />
                
                <label>شماره تماس : </label>
                <input className="border-2 border-gray-300 px-2 py-1 rounded-md" type="number" name="mobile" />
               
                <label>آدرس شرکت : </label>
                <textarea className="border-2 border-gray-300 px-2 py-1 rounded-md h-50" name="address"></textarea>
                
                <label>آدرس ایمیل شرکت : </label>
                <input className="border-2 border-gray-300 px-2 py-1 rounded-md" type="text" name="email" />
                
                <button className="cursor-pointer bg-blue-500 rounded-md hover:bg-blue-300 text-white w-20 py-1">ثبت</button>

            </form>
            <ToastContainer/>
        </div>
    )
}