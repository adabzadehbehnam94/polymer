"use client"
import { editUser } from "@/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"




interface Admin{
    admin : {
        id : number
        firstName : string,
        lastName : string,
        email : string,
        password : string
    }
}

export default function ProfileSetting({admin} : Admin){
    const [state , profileAction] = useActionState(editUser , {})
    // const router = useRouter()
     useEffect(() => {
            if (state?.nameErr) {
                toast.error(state.nameErr)
            }
            if (state?.familyErr) {
                toast.error(state.familyErr)
            }
    
            if (state?.emailErr) {
                toast.error(state.emailErr)
            }
            if (state?.passwordErr) {
                toast.error(state.passwordErr)
            }
            if (state?.editError) {
                toast.error(state.editError)
            }
            if (state?.editSuccess) {
                toast.success(state.editSuccess)
            }
        })
    return(
        <>
            <h3 className="mb-5" >تنظیمات پروفایل</h3>
                <form className="flex flex-col gap-2 "  action={profileAction}>
                    <input type="hidden" defaultValue={admin.id} name="id"/>
                    <label>نام : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.firstName} name="firstName"/>
                    <br />
                    <label >نام خانوادگی : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.lastName} name="lastName"/>
                    <br />
                    <label >ایمیل : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.email} name="email"/>
                    <br />
                    <label >رمز عبور : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="password" defaultValue={admin.password} name="password"/>
                    <button className="bg-blue-500 rounded-md text-white w-30 cursor-pointer py-1 mt-2" type="submit">ثبت ویرایش</button>
                </form>
                <ToastContainer/>
        </>
    )
}