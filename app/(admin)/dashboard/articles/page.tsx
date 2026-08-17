import HeaderPages from "@/app/components/headerPages";
import { prisma } from "@/lib/prisma";
import leaf from "@/public/images/icons/leaf.png"
import { ArticleType } from "./[id]/contentPageArticle";
import Image from "next/image";
import Link from "next/link";
import RemoveArticle from "./removeArticle";
import { articleDelete } from "@/app/components/serverAction";




export default async function Articles(){

    const articles = await prisma.articles.findMany()
    

    return(
        <div>
            {articles.length > 0 ? articles.map((item : ArticleType)=>(
                <div key={item.id} className="flex gap-5 border-b-2 border-gray-300 my-5 py-3">
                    <Image src={item.image} alt="image" width={70} height={40}/>
                    <p>{item.title}</p>
                    <p>وضعیت انتشار : {item.isPublished === false ? "منتشر نشده" : "منتشر شده"}</p>

                    <Link 
                    href={`/dashboard/articles/${item.id}`}
                    className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                    >ویرایش مقاله</Link>

                    <RemoveArticle IdArticle={item.id}/>
                    
                </div>
            ))

            :

            <p className="text-center">مقاله ای وجود ندارد</p>
        }

            <Link
             href={"/dashboard/articles/createArticle"}
             className="bg-blue-500 rounded-lg px-2 py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
             >ایجاد مقاله جدید</Link>
        </div>
    )
}