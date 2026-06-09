import Link from "next/link";

type ServicesProps = {
  image: React.ElementType;
  title: string;
  link : string;
}

export default function Services(props :ServicesProps){
    
    const Icon = props.image
    return(
        <Link href={props.link} className="flex flex-col py-5  items-center justify-center gap-2 opacity-60 rounded-lg bg-black text-white">
            <Icon className="mx-auto" size={50} color= "#79b72d"/>
            <h3>{props.title}</h3>
        </Link>
    )
}