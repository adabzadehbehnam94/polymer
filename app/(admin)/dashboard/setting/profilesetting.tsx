"use client"
import { editProfile, editUser } from "@/app/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"




interface Admin{
    admin : {
        id : number,
        username : string,
        firstname : string,
        lastname : string,
        email? : string | null,
        password : string
    }
}

export default function ProfileSetting({admin} : Admin){
    const [state , profileAction] = useActionState(editProfile , {})
    const router = useRouter()
     useEffect(() => {
            if (state?.usernameErr) {
                toast.error(state.usernameErr)
            }
            if (state?.firstnameErr) {
                toast.error(state.firstnameErr)
            }
    
            if (state?.lastnameErr) {
                toast.error(state.lastnameErr)
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
        },[state])
    return(
        <>
            <h3 className="mb-5 text-blue-500" >تنظیمات پروفایل</h3>
                <form className="flex flex-col gap-2 "  action={profileAction}>
                    <label>نام کاربری : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.username} name="username"/>
                    <label>نام : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.firstname} name="firstname"/>
                    <br />
                    <label >نام خانوادگی : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.lastname} name="lastname"/>
                    <br />
                    <label >ایمیل : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="text" defaultValue={admin.email ?? ""} name="email"/>
                    <br />
                    <label >رمز عبور : </label>
                    <input className="border-2 border-gray-300 rounded-md px-2 py-1" type="password" defaultValue={admin.password} name="password"/>
                    <button className="bg-blue-500 rounded-md text-white w-30 cursor-pointer py-1 mt-2" type="submit">ثبت ویرایش</button>
                </form>
                <ToastContainer/>
        </>
    )
}