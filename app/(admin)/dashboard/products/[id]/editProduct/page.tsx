
import Form from "@/app/(admin)/dashboard/products/[id]/editProduct/formEditProduct"
import { prisma } from "@/lib/prisma"
import { productsType } from "../../page"



interface ParamsId{
    params : Promise<{
        id : string
    }>
}

export default async function EditProducts({params} : ParamsId) {
    const {id} = await params
    const data : productsType | null = await prisma.products.findUnique({where : {id : Number(id)} , include : { category : true}})
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