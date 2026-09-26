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
        <div className="container mx-auto px-5 text-justify">
            <Image className="w-[100%] h-50 md:h-120 lg:h-150 rounded-lg mt-5" src={data?.image ?? ""} alt="logoArticle" width={1000} height={500}/>
            <div className="flex flex-col lg:flex-row justify-between my-5 ">
                <h1 className="text-white text-3xl/12 mb-3">{data?.title}</h1>
                {data?.author && <p className="text-white w-[fit-content] bg-[#121919]  rounded-lg px-5 py-5">نویسنده : {data.author}</p>}
            </div>
            {data?.summary && <h2 className="text-[#909292] bg-[#121919] rounded-lg px-5 py-5 text-lg/8">{data.summary}</h2>}
            <p className="text-[#909292] my-5  text-base/10">{data?.content}</p>

        </div>
    )
}