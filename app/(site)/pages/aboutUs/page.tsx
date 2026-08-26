import AboutUsCard from "@/app/components/aboutUsCard";
import HeaderPages from "@/app/components/headerPages";
import leaf from "@/public/images/icons/leaf.png"
import support from "@/public/images/icons/support.png"
import years from "@/public/images/icons/year of experience.png"
import category from "@/public/images/icons/category.png"
import customres from "@/public/images/icons/customers.png"
import AboutUsBottomCard from "@/app/components/aboutUsBottomCard";
import quality from "@/public/images/icons/quality.png";
import enginery from "@/public/images/icons/enginery.png";
import headphone from "@/public/images/icons/headPhoneAbout.png";
import price from "@/public/images/icons/price.png";
import Image from "next/image";



export default function Aboutus() {
    return (
        <div>
            <HeaderPages icon={leaf} title="محصولات پلیمری"
                subtitle="تامین مواد اولیه پلیمری با کیفیت بالا از برند های معتبر داخلی و خارجی"

                summary="پلیمر یاوری با سال ها تجربه در تامین و ارائه مواد اولیه پلیمری , همواره در تلاش است تا با ارائه محصولات با کیفیت و خدمات تخصصی , نقش موثر در رشد و توسعه صنایع پلیمری کشور ایفا کند ."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 px-5">
                <AboutUsCard number="24/7" text="پشتیبانی " text2="و پاسخگویی سریع" logo={support} />
                <AboutUsCard number="+100" text="محصول متنوع " text2="با کیفیت بالا" logo={category} />
                <AboutUsCard number="+500" text="مشتری فعال" text2="در صنایع مختلف" logo={customres} />
                <AboutUsCard number="+15" text="سال تجربه " text2="درصنعت پلیمر" logo={years} />
            </div>
            <div className="px-5 pb-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 rounded-lg border-2 border-[#10201E]  relative">
                    <div
                        className="flex tems-center gap-2 absolute top-0 outline-2 outline-[#0b1113] text-white left-[6%] md:left-[42%] bg-[#0b1113]  rounded-lg">
                        <span className="w-8 h-8 border-t-3 border-[#10201E] rounded-2xl -rotate-14 -skew-12 ml-5"></span>
                        <Image className="w-[fit-content] h-[fit-content]" src={leaf} alt="logoSection" width={20} height={20} />
                        <h3 className="text-lg">چرا پلیمر یاوری ؟</h3>
                        <span className="w-8 h-8 border-t-3 border-[#10201E] rounded-2xl rotate-14 skew-12 mr-5"></span>
                    </div>
                    <AboutUsBottomCard image={headphone} title="پشتیبانی کامل" subtitle="پشتیبانی فنی و خدمات پس از فروش حرفه ای" />
                    <div className="border-r-2 border-l-2 border-[#10201E]">
                        <AboutUsBottomCard image={price} title="قیمت رقابتی" subtitle="ارائه محصولات با بهترین قیمت بازار" />
                    </div>
                    <div className="md:border-l-2 border-[#10201E]">
                        <AboutUsBottomCard image={enginery} title="تجربه و تخصص" subtitle="تیم متخصص با سال ها تجربه در صنعت پلیمر" />
                    </div>
                    <div className="border-r-2 md:border-none border-[#10201E]">
                        <AboutUsBottomCard image={quality} title="کیفیت تضمین شده" subtitle="تامین بهترین مواد اولیه با استاندارد های جهانی" />

                    </div>


                </div>
            </div>
        </div>
    )
}