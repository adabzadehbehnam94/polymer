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

    category: CategoryType[]
}

const initialState = {
    nameErr: "",
    priceErr: "",
    error: "",
    success: ""
}




export default function Form({ product, category }: FormDetail) {
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
        <>
            <form className="flex flex-col justify-start pb-5 md:w-120 gap-3" action={EditFormdata}>
                <input type="hidden" name="id" defaultValue={product.id} />
                <input type="hidden" name="oldImage" defaultValue={product.image} />
                <input type="hidden" name="oldImagePublicId" defaultValue={product.imagePublicId} />
                <input type="hidden" name="oldVideo" defaultValue={product.video ?? ""} />
                <input type="hidden" name="oldVideoPublicId" defaultValue={product.videoPublicId ?? ""} />


                <label >نام کالا : </label>
                <input className=" border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product.productName} type="text" name="producName" />
                <label >شرح کالا : </label>
                <textarea className="mb-5 border-2 border-gray-300 rounded-md px-2 py-1" defaultValue={product?.details ?? ""} name="details" cols={30} rows={5}></textarea>

                <div className="flex gap-5 items-center">
                    <label>تصویر کالا : </label>
                    <Image className="w-[auto] h-30" src={`${product.image}`} alt="imageProduct" width={200} height={100} />
                </div>

                <label>تصویر جدید : </label>
                <input className=" border-2 border-gray-300 rounded-md px-2 py-1" type="file" name="image" />


                {product?.video &&
                    <div className="flex flex-col  gap-5 ">
                        <label>ویدئو محصول : </label>
                        <video className="w-auto  h-100"  controls>
                            <source className="w-[auto]" src={product.video} />
                        </video>
                    </div>
                }

                <label>ویدئو جدید : </label>
                <input className=" border-2 border-gray-300 rounded-md px-2 py-1" type="file" name="video" />


                <label >دسته بندی : </label>
                <select className="w-40 mb-3 bg-blue-500 rounded-md text-white px-2 py-1" name="category" defaultValue={selectedItem} onChange={e => setSelectedItem(Number(e.target.value))}>
                    {category.map((item: any) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                <label>قیمت : </label>
                <input className={`border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="number" defaultValue={product.price} name="price" />
                <label>برند : </label>
                <input className={`border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="text" defaultValue={product?.brand ?? ""} name="brand" />
                <label>کاربرد : </label>
                <input className={`border-2 border-gray-300 rounded-md px-2 py-1  ${FaNumber.className}`} type="text" defaultValue={product?.application ?? ""} name="application" />
                <button className="bg-blue-500 rounded-md text-white px-2 py-1 w-30 cursor-pointer hover:bg-blue-700" type="submit">ثبت ویرایش</button>
            </form>
            <ToastContainer />
        </>
    )
}