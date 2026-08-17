import { prisma } from "@/lib/prisma"
import ContentPageArticle from "./contentPageArticle"
import { ParamsId } from "../../products/[id]/page";


export default async function ArtictePage({params} : ParamsId){
    
    const {id} = await params
    
    const data = await prisma.articles.findUnique({where : {id : Number(id)}})

    if(!data){
        return <p>مقاله وجود ندارد</p>
    }

    return(
        <>
            <ContentPageArticle articleData={data}/>
        </>
    )
}