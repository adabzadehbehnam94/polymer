"use client"
import { articleDelete } from "@/app/components/serverAction"
import { useRouter } from "next/navigation"
import { toast, ToastContainer } from "react-toastify"


export default function RemoveArticle({ IdArticle }: { IdArticle: number }) {
    const router = useRouter()
    const removeButton = async (id : number) => {
        await articleDelete(id)
        toast.success("مقاله با موفقیت حذف شد")
        setTimeout(() => {
            router.refresh()
        }, 200);
    }
    return (
        <>
            <button
                className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                onClick={() => removeButton(IdArticle)}
            >حذف مقاله</button>
            <ToastContainer/>
        </>

    )
}