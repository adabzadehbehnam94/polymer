import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function initialData() {
    const user = await prisma.users.findUnique({where : { id : 1}});
    const categories = await prisma.categories.findUnique({where : {id : 1}})
    const setting = await prisma.setting.findUnique({where : {id : 1}})
    
    

    if(!user){
        const password = await bcrypt.hash("123456",10);
        await prisma.users.create({
            data : {
                username : "admin",
                firstname : "mohsen",
                lastname : "yavari",
                password : password
            }
        })

    }

    if(!categories){
        
        await prisma.categories.createMany({
            data : [
                {
                    name : "پلی اتیلن (PE)",
                    application : "انعتاف پذیر , مقاوم و قابل بازیافت",
                    image : "https://res.cloudinary.com/dpzexj11p/image/upload/v1783612916/pe_ctzk4l.png"
                    
                },
                {
                    name : "پلی پروپیلن (PP)",
                    application : "مقاوم , سبک و مناسب برای بسیاری از کاربرد ها",
                    image : "https://res.cloudinary.com/dpzexj11p/image/upload/v1783612916/pp_xvlu9e.png"
                },
                {
                    name : "PVC",
                    application : "پلیمر پرکاربرد در صنایع ساختمانی و صنعتی",
                    image : "https://res.cloudinary.com/dpzexj11p/image/upload/v1783612917/pvc_su7wtg.png"
                },
                {
                    name : "ABS",
                    application : "پلیمر مهندسی با مقاومت بالا و کاربرد گسترده",
                    image : "https://res.cloudinary.com/dpzexj11p/image/upload/v1783612917/abs_qwpoup.png"
                }
            ]
        })

    }

    if(!setting){
        await prisma.setting.create({
            data :{
                name : "شرکت پلیمر یاوری",
                logo : "https://res.cloudinary.com/dpzexj11p/image/upload/v1783240875/logo/vpwtfxbkakf8mwserijn.png",
                address : "تهران , شورآباد ,خیابان شهید مدنی",
                phone : "09198282713",
                detail : "تولید مواد گرانول و آسیابی"
            }
        })
    }


    
}

initialData().finally(async()=>{
    await prisma.$disconnect()
})