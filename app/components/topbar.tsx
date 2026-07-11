"use client"

import { useContext, useState } from "react"
import ContextUser from "./Contex"
import { VAl } from "./Contex"
import Link from "next/link"
import { useSelector } from "react-redux"
import cart from "@/public/images/icons/icons8-shopping-cart-48.png"
import menu from "@/public/images/icons/icons8-hamburger-menu-48.png"
import close from "@/public/images/icons/icons8-close-button-32.png"
import User from "@/public/images/icons/icons8-user-40.png"
import Exit from "@/public/images/icons/icons8-exit-sign-40.png"
import Image from "next/image"
import Sidebar from "./sidebar"
import SidebarProfile from "./sidebarProfile"



export default function Topbar() {
    const { web,user, logout, category } = useContext<VAl | any>(ContextUser)
    const selector = useSelector((state: { card: any }) => state.card)
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
                            <Link className="ml-10 hidden sm:flex" href={"/dashboard/overview"}>{user}</Link>
                            <button type="button" className="cursor-pointer ml-10 hidden sm:flex" onClick={logout}>خروج</button>
                            {/* <div className="relative">
                                <Link href={"/card"}><Image alt="card" src={cart} width={30} height={30} /></Link>
                                {selector.count > 0 && <p className="absolute -bottom-1  -left-2 bg-red-500 rounded-2xl px-2 text-sm">{selector.count.toLocaleString("fa-IR")}</p>}
                            </div> */}
                        </div>
                        {/* <div>{web?.webName}</div> */}
                        <div>
                            {web?.logo && <Image className="w-auto h-auto" src={web.logo} alt="logo" width={50} height={50}/>}
                        </div>
                    </header>
                    {open &&
                        <div className={`bg-blue-500 h-150 absolute ${open} right-0 top-20 w-50 pt-10 pr-5`}>
                            <Link onClick={Out} className=" mb-5 block text-white flex flex-row" href={"/dashboard/overview"}><Image className="ml-5" src={User} alt="user" width={20} height={20}/>{user}</Link>
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
                            <Link className="hidden sm:flex ml-10" href={"/register"}>ثبت نام</Link>
                            <div className="relative">
                                <Link href={"/card"}><Image alt="card" src={cart} width={30} height={30} /></Link>
                                {selector.count > 0 && <p className="absolute -bottom-1  -left-2 bg-red-500 rounded-2xl px-2 text-sm">{selector.count.toLocaleString("fa-IR")}</p>}
                            </div>
                        </div>
                    </header>
                    {open &&
                        <div className={`bg-blue-500 h-150 absolute ${open} right-0 top-20 w-40 pt-10`}>
                            <Link onClick={Out} className=" block mr-10 mb-5 text-white" href={"/login"}>ورود</Link>
                            <Link onClick={Out} className="block mr-10 mb-5 text-white" href={"/register"}>ثبت نام</Link>
                        </div>
                    }
                </>

            )}
        </>
    )
}
