"use client"
import { articleEdit } from "@/app/components/serverAction"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useActionState, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"

export interface ArticleType {
    id: number,
    title: string,
    summary?: string | null,
    slug?: string | null,
    content: string,
    image: string,
    author?: string | null,
    isPublished : boolean
}

export default function ContentPageArticle({ articleData }: { articleData: ArticleType }) {

    const initialState = {
        errtitle: "",
        errcontent: "",
        errimage: "",
        error: "",
        success: ""
    }

    const [state, createArticle] = useActionState(articleEdit, initialState)
    const [published , setPublished] = useState<string>(articleData.isPublished === false ? "false" : "true")
    const router = useRouter()
    const publishedACtion=(value : string)=>{
        setPublished(value)
        if(value === "false"){
            toast.success("وضعیت مقاله به منتشر نشده تغییر یافت")

        }else{
            toast.success("وضعیت مقاله به منتشر شده تغییر یافت")

        }

    }

    useEffect(() => {
        if (state?.errtitle) {
            toast.error(state.errtitle)
        }

        if (state?.errcontent) {
            toast.error(state.errcontent)
        }

        if (state?.errimage) {
            toast.error(state.errimage)
        }
        if (state?.error) {
            toast.error(state.error)
        }
        if (state?.success) {
            toast.success(state.success)
            setTimeout(() => {
                router.refresh()
            }, 300);
        }
    }, [state])



    return (
        
        <div>
            <form className="flex flex-col gap-4" action={createArticle}>

                <input type="hidden" defaultValue={articleData.id} name="id" />
                <input type="hidden" defaultValue={articleData.image} name="oldImage" />
                


                <label>تیتر مقاله : </label>
                <input defaultValue={articleData.title} className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="title" />


                <label>خلاصه متن (اختیاری): </label>
                <input defaultValue={articleData.summary ?? ""} className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="summary" />

                <label> نام صفحه مقاله (اختیاری): </label>
                <input defaultValue={articleData.slug ?? ""} className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="slug" />


                <label> متن اصلی مقاله : </label>
                <textarea defaultValue={articleData.content} name="content" className="border-2 border-gray-300 rounded-md px-2 py-1 my-2 h-50"></textarea>


                <div className="flex gap-5">
                    <label>تصویر مقاله: </label>
                    <Image src={articleData.image} alt="image" width={70} height={40}/>
                </div>

                <label>تصویر جدید مقاله: </label>
                <input className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="file" name="image" />


                <label>وضعیت مقاله : {published === "false" ? "منتشر نشده" : "منتشر شده"}</label>
                {/* <button 
                className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                 name="isPublished"
                 onClick={()=> publishedACtion()}
                 > {articleData.isPublished === false ? "تغیر وضعیت به منتشر شده" : "تغییر وضعیت به منتشر نشده"}</button> */}
                <select  name="isPublished" 
                defaultValue={published}
                className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                onChange={(item)=> publishedACtion(item.target.value)}>
                    
                    <option value={"false"} key="1">منتشر نشده</option>
                    <option value={"true"} key="2">منتشر شده</option>
                </select>

                <label> نام نویسنده (اختیاری) : </label>
                <input defaultValue={articleData.author ?? ""} className="border-2 border-gray-300 rounded-md px-2 py-1 my-2" type="text" name="author" />


                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700" type="submit">ویرایش مقاله</button>

            </form>
            <ToastContainer />
        </div>
    )
}