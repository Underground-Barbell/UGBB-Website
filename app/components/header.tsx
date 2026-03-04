'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import UGBB from "../../public/LOGO/UGBB.png"
import MENU from "../../public/Icons/menu.svg"
import { Menu } from 'lucide-react';

export default function Header(){

    return (
        <header
            id="Header"
            className=" w-full flex justify-between items-center mt-7 fixed top-0 z-20"
        >
            <div
                id="LogoContainer"
                className="relative left-8"
            >
                <Image src={UGBB} alt="UGBB Logo" width={65} height={65} />
            </div>
            <div
                className="flex justify-end w-3/4 min-w-3/4"
            >
                <nav
                    id="NavContainer"
                    className="bg-black text-white border-4 border-white w-full flex items-center justify-between px-10 font-dosis font-extrabold text-2xl relative right-8"
                >
                    <Link href="/" >ABOUT</Link>
                    <Link href="/" >MEMBERSHIPS</Link>
                    <Link href="/" >EQUIPMENT</Link>
                    <Link href="/" >LOCATIONS</Link>
                    <Link href="/" >CLASSES/EVENTS</Link>
                    <Link href="/" >CONTACT</Link>
                </nav>
                <div
                    id="MenuContainer"
                    className="bg-black border-white border-4 w-[65px] h-[65px] text-white flex items-center justify-center ml-8 relative right-8"
                >
                    <Menu
                        className="h-[50px] w-[50px] "
                    />
                </div>
            </div>
        </header>
    );
}