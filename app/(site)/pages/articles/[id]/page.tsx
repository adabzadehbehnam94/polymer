import { prisma } from "@/lib/prisma"
import Image from "next/image"

interface ArticlePageType{
    image : string,
    title : string,
    summary?: string | null,
    content : string,
    author? : string | null
}

export  default async function ArictlePage({params} : {params : Promise<{id : string}>}){
    const {id} = await params
    const data : ArticlePageType | null = await prisma.articles.findUnique({where : {id : Number(id)}})
    return(
        <div className="container mx-auto">
            <Image className="w-[100%] h-150 rounded-lg mt-5" src={data?.image ?? ""} alt="logoArticle" width={1000} height={500}/>
            <div className="flex justify-between my-5 items-center">
                <h1 className="text-white text-6xl">{data?.title}</h1>
                {data?.author && <p className="text-white bg-[#121919]  rounded-lg px-5 py-5">نویسنده : {data.author}</p>}
            </div>
            {data?.summary && <h2 className="text-[#909292] bg-[#121919] rounded-lg px-5 py-5 text-9xl">{data.summary}</h2>}
            <p className="text-[#909292] my-5 text-5xl">{data?.content}</p>

        </div>
    )
}