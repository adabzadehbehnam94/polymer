"use client"

import { editProduct } from "@/app/components/serverAction"
import { useActionState, useEffect, useState } from "react"
import localFont from "next/font/local"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { CategoryType, productsType } from "../../page"

const FaNumber = localFont({
    src: "../../../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})



interface FormDetail {
    product: productsType

    category : CategoryType[]
}

const initialState = {
    nameErr : "",
    priceErr : "",
    error : "",
    success : ""
}




export default function Form({ product , category}: FormDetail) {
    const [selectedItem, setSelectedItem] = useState(product.categoryId)
    const [state, EditFormdata] = useActionState(editProduct, initialState)
    const router = useRouter()


    useEffect(() => {
        if (state?.nameErr) {
            toast.error(state.nameErr)
        }
        if (state?.priceErr) {
            toast.error(state.priceErr)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
            setTimeout(() => {
                router.push("/dashboard/products")
            }, 2000);
        }
    }, [state])
    return (
        <div>
            <form className="flex flex-col justify-start pb-5 w-120" action={EditFormdata}>
                <input type="hidden" name="id" defaultValue={product.id} />
                <input type="hidden" name="oldImage" defaultValue={product.image} />
                <label className="mb-5" >نام کالا : </label>
                <input className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product.productName} type="text" name="producName" />
                <label className="mb-5"  >شرح کالا : </label>
                <textarea className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product?.details ?? ""} name="details" cols={30} rows={10}></textarea>
                <br />
                <label>تصویر کالا : </label>
                <Image src={`${product.image}`} alt="imageProduct" width={40} height={40} />
                <input type="file" name="image" />
                <br />
                <label className="mb-3">دسته بندی : </label>
                <select className="w-40 mb-3 bg-blue-500 rounded-md text-white px-2 py-1" name="category" defaultValue={selectedItem} onChange={e => setSelectedItem(Number(e.target.value))}>
                    {category.map((item: any) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                <label className="mb-5">قیمت : </label>
                <input className={`mb-5 border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="number" defaultValue={product.price} name="price" />
                <label className="mb-5">برند : </label>
                <input className={`mb-5 border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="text" defaultValue={product?.brand ?? ""} name="brand" />
                <label className="mb-5">کاربرد : </label>
                <input className={`mb-5 border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="text" defaultValue={product?.application ?? ""} name="application" />
                <button className="mb-5 bg-blue-500 rounded-md text-white px-2 py-1 sm:w-30 cursor-pointer hover:bg-blue-700" type="submit">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </div>
    )
}