
import HeaderPages from "@/app/components/headerPages";
import ServicesCard from "@/app/components/servicesCard";
import leaf from "@/public/images/icons/leaf.png"
import headphone from "@/public/images/icons/icons8-headphone-100.png"
import pvc from "@/public/images/icons/pvc.png"
import transfer from "@/public/images/icons/icons8-truck-100.png"
import gears from "@/public/images/icons/icons8-gears-100.png"
import recycle from "@/public/images/icons/icons8-recycle-100.png"
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import logo from "@/public/images/pictures/newMainLogoWithoutName.png"




export default function Services() {

    return (
        <div>
            <HeaderPages icon={leaf} title="خدمات" subtitle="راهکار های تخصصی برای نیاز های صنعت پلیمر" />
            <section className="container mx-auto px-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
                    <ServicesCard image={recycle} title="بازیافت پلیمر ها"
                        subtitle="ارائه راهکار های بازیافت و استفاده مجدد از پلیمر های مصرفی" />
                    <ServicesCard image={gears} title="بهینه سازی تولید"
                        subtitle="بهینه سازس فرایند های تولید برای افزایش کیفیت  و کاهش هزینه ها" />
                    <ServicesCard image={pvc} title="آزمایش و آنالیز"
                        subtitle="انجام تست ها و آنالیز های تخصصی مواد پلیمری در آزمایشگاه تجهیز شده" />
                    <ServicesCard image={transfer} title="تامین مواد اولیه"
                        subtitle="تامین انواع مواد اولیه پلیمری با کیفیت بالا از برند های معتبر داخلی و خارجی" />
                    <ServicesCard image={headphone} title="مشاوره فنی"
                        subtitle="ارائه مشاوره تخصصی در انتخاب مواد اولیه وبهینه سازی فرایند های تولید " />
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center p-3 mb-5 md:h-20  justify-center bg-[#141b1a] rounded-lg">

                        <Link className="order-last md:order-first bg-[#2d7d11] rounded-md flex items-center text-white text-xs px-4 py-3 pl-7 gap-2 text-center "
                            href={"/pages/contactUs"}><IoIosCall className="mr-3" />تماس با ما
                        </Link>
                        <p className=" text-[#9aa09e] text-sm">
                            ما راهکار های متناسب با نیاز خاص کسب و کار  شما ارائه می دهیم .برای دریافت مشاوره تخصصی با ما درارتباط باشید .
                        </p>
                        <Image className="order-first md:order-last h-[fit-content]" src={logo} width={60} height={60} alt="logo" />
                    
                </div>
            </section>
        </div>
    )
}