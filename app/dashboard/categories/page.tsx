"use client"
import { allCategories, categoryDeleteAction } from "@/app/components/serverAction"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"

interface Data {
    name : string ,
    id : number
}

export default  function Categories() {
    const router = useRouter()
    const [data , setdata] = useState<Data[] | null>(null)
    useEffect(()=>{
        const fetchdata = async ()=>{
            const fetch = await allCategories()
            setdata(fetch)
        }
        fetchdata()
    },[])

    const Delete = (id : number)=>{
        const data = categoryDeleteAction(id)  
        toast.success("دسته بندی با موفقیت حذف شد")
    }
    return (
        <div>
            {data ?
                data.map((item: { name: string, id: number }) => (
                    <div className="flex mb-5 justify-between border-b-2 border-gray-300 pb-3 px-2 md:w-100" key={item.id}>
                        <div className="ml-3">{item.name}</div>
                        <div>

                        <button className="text-white cursor-pointer rounded-md bg-blue-500 hover:bg-blue-300 px-2 py-1 ml-5" onClick={()=> router.push(`/dashboard/categories/${item.id}`)}>ویرایش</button>
                        <button className="text-white cursor-pointer rounded-md bg-blue-500 hover:bg-blue-300 px-2 py-1 ml-5" onClick={()=> Delete(item.id)}>حذف</button>
                        </div>
                    </div>
                ))
                :
                <p className="text-center">دسته بندی وجود ندارد</p>
            }

            <br />

            <Link className="rounded-md bg-blue-500 hover:bg-blue-300 text-white px-2 py-1" href={"categories/addcategory"}>ایجاد دسته بندی جدید</Link>
            <ToastContainer/>
        </div>
    )
}