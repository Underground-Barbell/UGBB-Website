'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import UGBB from "../../public/LOGO/UGBB.png"
import { Menu, X } from 'lucide-react';

export default function Header(){
    const [menu, setMenu] = useState(false);

    return (
        <header
            id="Header"
            className="fixed w-full top-0 left-0 z-20"
        >
            <div
                id="HeaderInfoContainer"
                className="flex justify-between items-center my-4 mx-4"
            >
                <div
                    id="LogoContainer"
                    className=""
                >
                    <Image src={UGBB} alt="UGBB Logo" className="w-[120px] h-[120px] md:w-[90px] md:h-[90px] lg:w-[65px] lg:h-[65px]" />
                </div>
                <div
                    className="flex justify-end"
                >
                    <nav
                        id="NavContainer"
                        className="hidden lg:visible bg-black text-white border-4 border-white w-full lg:flex lg:items-center lg:justify-between px-10 font-dosis font-extrabold text-2xl mr-10"
                    >
                        <Link href="/" className="mr-4" >ABOUT</Link>
                        <Link href="/" className="mx-4" >MEMBERSHIPS</Link>
                        <Link href="/" className="mx-4" >EQUIPMENT</Link>
                        <Link href="/" className="mx-4" >LOCATIONS</Link>
                        <Link href="/" className="mx-4" >CLASSES/EVENTS</Link>
                        <Link href="/" className="ml-4" >CONTACT</Link>
                    </nav>
                    <button
                        id="MenuContainer"
                        className="bg-black border-white border-4 w-[120px] h-[120px] md:w-[90px] md:h-[90px] lg:w-[65px] lg:h-[65px] text-white flex items-center justify-center"
                        onClick={() => setMenu(!menu)}
                    >
                        <Menu
                            className="h-[105px] w-[105px] md:h-[75px] md:w-[75px] lg:h-[50px] lg:w-[50px]"
                        />
                    </button>
                </div>
            </div>

            {menu && (
                <div
                    id=""
                    className="absolute left-0 top-0 w-full h-[1200px] bg-black text-white p-6"
                >
                    <div
                        id="LogoContainer"
                        className=""
                    >
                        <Image src={UGBB} alt="UGBB Logo" className="w-[120px] h-[120px] md:w-[90px] md:h-[90px] lg:w-[65px] lg:h-[65px]" />
                    </div>
                    <p>Mobile Menu</p>
                    <button
                        id="MenuContainer"
                        className="text-white"
                        onClick={() => setMenu(!menu)}
                    >
                        <X
                            className="h-[105px] w-[105px] md:h-[75px] md:w-[75px] lg:h-[50px] lg:w-[50px]"
                        />
                    </button>
                </div>
            )}

        </header>
    );
}