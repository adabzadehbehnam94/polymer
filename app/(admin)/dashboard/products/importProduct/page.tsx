"use client"

import { allCategories, categoryAction, productAction } from "@/app/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import localFont from "next/font/local"
import { ToastContainer, toast } from "react-toastify"

const IransansFaNumber = localFont({
  src: "../../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})


export default function ImportProduct() {
  const [state, formProduct] = useActionState(productAction, {})
  const [category, setcategory] = useState<null | object[]>(null)
  useEffect(() => {

    if (state?.nameErr) {
      toast.error(state.nameErr)
    }
    if (state?.priceErr) {
      toast.error(state.priceErr)
    }
    if (state?.categoryErr) {
      toast.error(state.categoryErr)
    }
    if (state?.error) {
      toast.error(state.error)
    }
    if (state?.success) {
      toast.success(state.success)
    }

  }, [state])
  useEffect(() => {
    const fetchData = async () => {
      const data = await allCategories()
      setcategory(data)
    }

    fetchData()
  }, [])
  return (
    <div className="w-60 sm:w-auto">

      <form className=" sm:mr-5 md:mr-0 flex flex-col gap-3 w-120" action={formProduct}>
        <label >نام محصول :</label>
        <input name="productName" className="border-2 border-gray-300 rounded-md px-2 py-1 " type="text" />

        <label >قیمت محصول :</label>
        <input className={`${IransansFaNumber.className} border-2 border-gray-300 rounded-md px-2 py-1 `} name="price" type="number" />

        <div className="flex flex-col md:flex-row items-center">

          <label >تصویر محصول :</label>
          <input className={`border-2 border-gray-300 rounded-md px-2 py-1   cursor-pointer`} name="image" type="file" />
        </div>

        <label > برند :</label>
        <input className={`border-2 border-gray-300 rounded-md px-2 py-1  `} name="brand" type="text" />
        <label > کاربرد :</label>
        <input className={`border-2 border-gray-300 rounded-md px-2 py-1  `} name="application" type="text" />
        
        <label>شرح محصول :</label>
        
        <textarea className="border-2 border-gray-300 rounded-md px-2 py-1 " name="details" cols={30} rows={10}></textarea>

        <label >دسته بندی : </label>
        <select className=" cursor-pointer bg-blue-500 text-white pr-2 py-1 rounded-md w-50" name="categoryId" id="1">

          {category?.map((item: any) => (
            <option value={item.id} key={item.id}>{item.name}</option>
          ))}
        </select>



        <button className="mb-10 bg-blue-500 text-white rounded-lg px-2 py-1 cursor-pointer hover:bg-blue-700 w-30" type="submit">ثبت محصول</button>

      </form>
      <ToastContainer />
    </div>
  )
}