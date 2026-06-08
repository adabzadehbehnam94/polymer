import Image from "next/image";


type ServicesProps = {
  image: React.ElementType;
  title: string;
}

export default function Services(props :ServicesProps){
    const Icon = props.image
    return(
        <div className="flex flex-col items-center w-50 h-50 opacity-60 rounded-lg bg-black text-white">
            <Icon className="mx-auto" size={50} color= "#79b72d"/>
            <h3 className="text-center">{props.title}</h3>
        </div>
    )
}