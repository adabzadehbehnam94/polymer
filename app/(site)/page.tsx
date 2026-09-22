import Image from "next/image";
import Slider from "../components/slider";
import leaf from "@/public/images/icons/leaf.png"
import leaf2 from "@/public/images/icons/leaf2.png"
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

  const slider = await allSliderAds(4)
  const categories = await allCategories(4)
  return (
    <div className="bg-[#091011]">
      <section className="container mx-auto px-3 md:px-5">
        {slider.length > 0 && <Slider sliderData={slider} />}
      </section>
      <section className="bg-[#091011]">
        <div className="py-5 text-white flex justify-center items-center">
          <Image className="ml-2" src={leaf2} width={25} height={25} alt="barg" />
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
          <Image  className="ml-2" src={leaf} alt="barg" width={30} height={30} />
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
