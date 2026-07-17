import Image from "next/image";
import Slider from "../components/slider";
import barg from "@/public/images/pictures/product_section_icon.png"
import barg2 from "@/public/images/pictures/barg_transparent.png"
import PP from "@/public/images/pictures/pp.png"
import PE from "@/public/images/pictures/pe.png"
import PVC from "@/public/images/pictures/pvc.png"
import ABS from "@/public/images/pictures/abs.png"
import ProductsCard, { categoryType } from "../components/categoryCard";
import Services from "../components/services";
import { IoEarthOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsTruck } from "react-icons/bs";
import { RiShipLine } from "react-icons/ri";
import { allCategories, allSliderAds } from "../components/serverAction";






export default async function Home() {

  const slider = await allSliderAds()
  const categories = await allCategories()
  return (
    <div className="bg-black">
      <section className="container mx-auto ">
        {slider.length > 0 && <Slider sliderData={slider} />}
      </section>
      <section className="bg-black">
        <div className="py-5 text-white flex justify-center items-center">
          <Image className="ml-1" src={barg} alt="barg" />
          <h3>دسته بندی محصولات</h3>
        </div>
        <div className="flex container mx-auto  grid grid-cols-2 gap-5 pb-20 px-3 sm:px-4 md:px-5 sm:grid-cols-3 md:grid-cols-4  ">
          {categories.length > 0 && 
            categories.map((item : categoryType)=>(
              <ProductsCard key={item.id} categoryData={item} />
            ))
          }
        </div>

      </section>
      <section className="bg-provider">
        <div className="py-5 text-white flex justify-center items-center">
          <Image className="ml-1" src={barg2} alt="barg" width={40} height={40} />
          <h3>خدمات ما</h3>
        </div>
        <div className="flex container mx-auto grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 px-3 sm:px-4 md:px-5">
          <Services image={TfiHeadphoneAlt} title="مشاوره فنی"  />
          <Services image={BsTruck} title="تامین مواد اولیه"  />
          <Services image={RiShipLine} title="صادرات محصولات"  />
          <Services image={IoEarthOutline} title="واردات مواد اولیه" />
        </div>

      </section>
    </div>
  );
}
