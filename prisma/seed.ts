import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function initialData() {
    const user = await prisma.users.findUnique({where : { id : 1}});
    const categories = await prisma.categories.findUnique({where : {id : 1}})
    const setting = await prisma.setting.findUnique({where : {id : 1}})
    const aboutus = await prisma.aboutUs.findUnique({where : {id : 1}})
    

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

    if(!aboutus){
        await prisma.aboutUs.create({
            data : {
                title : "درباره پلیمر یاوری",
                content : "پلیمر یاوری با هدف تأمین مواد اولیه پلیمری باکیفیت و ارائه راهکارهای مطمئن برای صنایع مختلف فعالیت خود را آغاز کرده است. ما با تکیه بر تجربه، دانش فنی و استفاده از تجهیزات مناسب، در زمینه تولید و عرضه انواع گرانول‌های پلیمری و مواد آسیابی فعالیت می‌کنیم و همواره تلاش داریم محصولاتی با کیفیت پایدار و قیمت رقابتی در اختیار مشتریان خود قرار دهیم. کیفیت محصولات، رضایت مشتریان و تعهد به همکاری بلندمدت، از مهم‌ترین ارزش‌های مجموعه پلیمر یاوری است. تمامی محصولات با دقت در انتخاب مواد اولیه و کنترل کیفیت تولید می‌شوند تا پاسخگوی نیاز تولیدکنندگان در صنایع مختلف از جمله تزریق پلاستیک، اکستروژن، تولید قطعات صنعتی و سایر صنایع وابسته باشند. ما معتقدیم که موفقیت مشتریان، موفقیت ماست. به همین دلیل علاوه بر تأمین مواد اولیه، همواره تلاش می‌کنیم با ارائه مشاوره تخصصی، انتخاب مناسب‌ترین مواد و پشتیبانی مستمر، تجربه‌ای مطمئن و رضایت‌بخش برای همکاران و مشتریان خود فراهم کنیم. امروز پلیمر یاوری با تکیه بر اصول کیفیت، صداقت، تعهد و توسعه مستمر در مسیر رشد و پیشرفت گام برمی‌دارد و امیدوار است با ایجاد همکاری‌های پایدار، سهمی مؤثر در توسعه صنعت پلیمر کشور داشته باشد."
            }
        })
    }

    
}

initialData().finally(async()=>{
    await prisma.$disconnect()
})