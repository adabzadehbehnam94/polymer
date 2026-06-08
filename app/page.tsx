import Image from "next/image";
import Slider from "./components/slider";
import barg from "@/public/pictures/product_section_icon.png"
import barg2 from "@/public/pictures/barg_transparent.png"
import PP from "@/public/pictures/pp.png"
import PE from "@/public/pictures/pe.png"
import PVC from "@/public/pictures/pvc.png"
import ABS from "@/public/pictures/abs.png"
import ProductsCard from "./components/productsCard";
import Services from "./components/services";
import { IoEarthOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsTruck } from "react-icons/bs";
import { RiShipLine } from "react-icons/ri";






export default function Home() {
  return (
    <div >
      <Slider />
      <section className="bg-black">
        <div className="py-5 text-white flex justify-center items-center">
          <Image className="ml-1" src={barg} alt="barg" />
          <h3>دسته بندی محصولات</h3>
        </div>
        <div className="flex justify-around">
          <ProductsCard image={PE} title={"پلی اتیلن (PE)"} stitle={"انعطاف پذیر , مقاوم و قابل بازیافت"} link={"/pages/products"} />
          <ProductsCard image={PP} title={"پلی پروپیلن (PP)"} stitle={"مقاوم , سبک و مناسب برای بسیاری از کاربرد ها"} link={"/"} />
          <ProductsCard image={PVC} title={"PVC"} stitle={"پلیمر پرکاربرد در صنایع ساختمانی و صنعتی"} link={"/"} />
          <ProductsCard image={ABS} title={"ABS"} stitle={"پلیمر مهندسی با مقاومت بالا و کاربرد گسترده"} link={`/`} />
        </div>

      </section>
      <section className="bg-provider">
        <div className="py-5 text-white flex justify-center items-center">
          <Image className="ml-1" src={barg2} alt="barg" width={40} height={40} />
          <h3>خدمات ما</h3>
        </div>
        <div className="flex justify-around">
          <Services image={TfiHeadphoneAlt} title="واردات مواد اولیه" />
          <Services image={BsTruck} title="واردات مواد اولیه" />
          <Services image={RiShipLine} title="واردات مواد اولیه" />
          <Services image={IoEarthOutline} title="واردات مواد اولیه" />
        </div>

      </section>
    </div>
  );
}
