"use client"

import { allCategories, categoryAction, productAction } from "@/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import localFont from "next/font/local"
import { ToastContainer , toast } from "react-toastify"

const IransansFaNumber = localFont({
    src: "../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})


export default function ImportProduct() {
    const [state, formProduct] = useActionState(productAction, {})
    const [category , setcategory] = useState<null | object[]>(null)
    useEffect(()=>{
       
        if(state?.nameErr){
          toast.error(state.nameErr)
        }
        if(state?.priceErr){
          toast.error(state.priceErr)
        }
        if(state?.categoryErr){
          toast.error(state.categoryErr)
        }
        if(state?.error){
          toast.error(state.error)
        }
        if( state?.success){
          toast.success(state.success) 
        }
        
      },[state])
      useEffect(()=>{
        const fetchData = async ()=>{
          const data = await allCategories()
          setcategory(data)
        }

        fetchData()
      },[])
    return (
        <div className="w-60 sm:w-auto">

            <form className=" sm:mr-5" action={formProduct}>
                <label >نام محصول :</label>
                <input name="producName" className="border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2  mr-2" type="text" />
                <br />
                <label >قیمت محصول :</label>
                <input className={`${IransansFaNumber.className} border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2 mr-2`} name="price" type="number" />
                <br />
                <div className="flex flex-col md:flex-row">

                <label >تصویر محصول :</label>
                <input className={`border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2 md:mr-2`} name="image" type="file" />
                </div>
                <br/>
                <label>شرح محصول :</label>
                <br/>
                <textarea className="border-2 border-gray-300 rounded-md px-2 py-1 mt-2 mb-2" name="Description" cols={30} rows={10}></textarea>
                <br />
                <label >دسته بندی : </label>
                <select className=" cursor-pointer bg-blue-500 text-white pr-2 py-1 rounded-md" name="category" id="1">
                   
                    {category?.map((item : any)=>(
                      <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                <br />
                <br />
                <button className="mb-10 bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer" type="submit">ثبت محصول</button>

            </form>
            <ToastContainer/>
        </div>
    )
}