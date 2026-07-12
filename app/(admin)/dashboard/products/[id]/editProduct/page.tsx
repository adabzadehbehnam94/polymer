
import Form from "@/components/form"
import { prisma } from "@/lib/prisma"



interface ParamsId{
    params : Promise<{
        id : string
    }>
}

export default async function EditProducts({params} : ParamsId) {
    const {id} = await params
    const data = await prisma.products.findUnique({where : {id : Number(id)} , include : { category : true}})
    const categoryData = await prisma.categories.findMany()
    if(!data){
        return <div>محصول وجود ندارد</div>
    }

    return (
        <div>
            <Form product={data} category={categoryData}/>
        </div>
    )
}