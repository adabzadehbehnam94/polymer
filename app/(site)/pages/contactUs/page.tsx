

import { prisma } from "@/lib/prisma";
import FetchSetting from "./fetchSetting";


export default async function Contactus(){
    const data = await prisma.setting.findUnique({where : {id : 1}})
    
    
    if(!data){
        return <p>تنظیمات وجود ندارد</p>
    }
    return(
        <FetchSetting settingData={data}/>
    )
}