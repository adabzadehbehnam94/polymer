import { prisma } from "@/lib/prisma";
import ProfileSetting from "./profilesetting";
import WebSetting from "./websetting";
import { ParamsId } from "../products/[id]/page";
import { cookies } from "next/headers";
import { useContext } from "react";
import ContextUser, { VAl } from "@/app/components/Contex";
import Link from "next/link";

interface ParamsSetting{
    params:Promise<{
        id : Number
    }>
}

export default async function Setting() {

    const cookie = await cookies()
    const user = cookie.get("user")

    
    
    const web = await prisma.setting.findUnique({where : {id : 1}})
    const userProfile = await prisma.users.findUnique({where : {id : 1}})
    // console.log(typeof(user?.value));
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
                <ProfileSetting admin={userProfile!}/>
            </div>
            <div>
                {web ? <WebSetting webDetail={web} /> : <Link href={"/dashboard/setting/importWebSetting"}>تنظیمات سایت</Link>}
            </div>
        </div>
    )
}