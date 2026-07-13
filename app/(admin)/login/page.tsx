"use client"

// import ContextUser, { VAl } from "@/app/components/Contex"
import { login } from "@/app/components/serverAction"
import { useRouter } from "next/navigation"
import { useActionState, useContext, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import ContextUser, { VAl } from "../../components/Contex";

export default function Login(){
  const [state , formlogin] = useActionState(login , {})
  const router = useRouter()
  const {loginUser} = useContext<VAl | any>(ContextUser)
  useEffect(()=>{
    if(state?.emailErr){
      toast.error(state.emailErr)
    }
    if(state?.passwordErr){
      toast.error(state.passwordErr)
    }
    if(state?.logError){
      toast.error(state.logError)
    }
    if(state?.logPassword){
      toast.error(state.logPassword)
    }
    if(state?.error){
      toast.error(state.error)
    }
    if( state?.logSuccess){
      toast.success(state.logSuccess)
      loginUser(state.user , state.id)
      router.push("/dashboard/overview")
      
    }
    
  },[state])
  return(
    <div className="pt-5 ">
      <form className="flex  flex-col mx-auto w-80 md:w-100 bg-white rounded-xl p-10 gap-3" action={formlogin}>
        <label className="mb-1" >نام کاربری :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="text" name="username"  />
        
        
        <label className="mb-1">رمز عبور :</label>
        <input className="border-2 border-gray-300 rounded-xl px-3 py-2" type="password" name="password" />
        
        
        <button className="cursor-pointer bg-blue-500 px-1 py-1 text-white rounded-xl w-20 justify-center" type="submit">ورود</button>
       
      </form>
      
      <ToastContainer/>
    </div>
  )
}