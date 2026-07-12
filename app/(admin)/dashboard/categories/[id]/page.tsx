import { prisma } from "@/lib/prisma"
import { ParamsId } from "../../products/[id]/page"
import FormEdit from "./formEdit"

export default async function EditCategory({params} : ParamsId){
    const {id} = await params
    const data = await prisma.categories.findUnique({where : {id : Number(id)}})
    return(
        <div>
            <FormEdit data={data}/>
        </div>
    )
}