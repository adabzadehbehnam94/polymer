import Link from "next/link";

type ServicesProps = {
  image: React.ElementType;
  title: string;
}

export default function Services(props :ServicesProps){
    
    const Icon = props.image
    return(
        <div  className="flex flex-col py-5  items-center justify-center gap-2  rounded-lg bg-black/55   backdrop-blur-[3px] text-white lg:h-50">
            <Icon className="mx-auto lg:h-20 lg:w-20" size={50} color= "#79b72d"/>
            <h3 className="lg:text-2xl">{props.title}</h3>
        </div>
    )
}