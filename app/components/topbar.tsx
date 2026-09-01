"use client"

import { useContext, useState } from "react"
import ContextUser from "./Contex"
import { VAl } from "./Contex"
import Link from "next/link"
import menu from "@/public/images/icons/icons8-hamburger-menu-48.png"
import close from "@/public/images/icons/icons8-close-button-32.png"
import User from "@/public/images/icons/icons8-user-40.png"
import Exit from "@/public/images/icons/icons8-exit-sign-40.png"
import Image from "next/image"
import Sidebar from "./sidebar"




export default function Topbar() {
    const {user, logout} = useContext<VAl | any>(ContextUser)
    const [menuMobile, setmenuMobile] = useState(menu)
    const [open, setopen] = useState(false)
    const mobile = () => {
        setmenuMobile(menuMobile === menu ? close : menu)
        setopen(!open)
    }
    const logOut =()=>{
        logout()
        setmenuMobile(menu)
        setopen(false)
    }

    const Out =()=>{
        setmenuMobile(menu)
        setopen(false)
    }
    return (
        <>
            {user ? (
                <>
                    <header className="bg-blue-500 px-5 md:px-10 lg:px-20 h-20 flex text-white items-center mb-5 justify-between">
                        <div className="flex h-10 items-center">
                            <button onClick={mobile} className="sm:hidden ml-10"><Image alt="menu" width={30} height={30} src={menuMobile} /></button>
                            <Link className="ml-10 hidden sm:flex" href={"/dashboard/setting"}>{user}</Link>
                            <button type="button" className="cursor-pointer ml-10 hidden sm:flex" onClick={logout}>خروج</button>
                            
                        </div>
                        
                    </header>
                    {open &&
                        <div className={`bg-blue-500 rounded-b-lg  absolute ${open} right-0 top-20 w-50 pt-10 pr-5`}>
                            <Link onClick={Out} className=" mb-5 block text-white flex flex-row" href={"/dashboard/setting"}><Image className="ml-5" src={User} alt="user" width={20} height={20}/>{user}</Link>
                            <Sidebar click={Out}/> 
                            <button  type="button" className=" mb-5 text-white flex flex-row" onClick={logOut}> <Image className="ml-5" src={Exit} alt="user" width={20} height={20}/>خروج</button>
                        </div>
                    }
                </>
            ) : (
                <>
                    <header className="bg-blue-500 px-10 md:px-20 h-20  flex  text-white items-center mb-5">
                        <div className="flex h-10 items-center">
                            <button onClick={mobile} className="sm:hidden ml-10  "><Image alt="menu" width={30} height={30} src={menuMobile} /></button>
                            <Link className="hidden sm:flex ml-10" href={"/login"}>ورود</Link>
                            
                            
                        </div>
                    </header>
                    {open &&
                        <div className={`bg-blue-500 rounded-b-lg absolute ${open} right-0 top-20 w-40 pt-10`}>
                            <Link onClick={Out} className=" block mr-10 mb-5 text-white" href={"/login"}>ورود</Link>
                            
                        </div>
                    }
                </>

            )}
        </>
    )
}
