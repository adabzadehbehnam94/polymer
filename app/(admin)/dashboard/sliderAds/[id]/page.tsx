import { prisma } from "@/lib/prisma"
import EditFormPage from "./editFormPage"

interface PramsType {
    params : Promise<{
        id : number
    }>
}


export default async function editAds({params} : PramsType){
        const {id} = await params
        const ads = await prisma.sliderAds.findUnique({where : {id : Number(id)}})

        if(!ads){
            return <p>تبیلغ وجود ندارد</p>
        }
    return(
        <div>
            <EditFormPage data={ads}/>
        </div>
    )
}