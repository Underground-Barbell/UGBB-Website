'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import UGBB from "../../public/LOGO/UGBB.png"
import MENU from "../../public/Icons/menu.svg"

export default function Header(){

    return (
        <header id="Header">
            <div id="LogoContainer">
                <Image src={UGBB} alt="UGBB Logo" width={50} height={50} />
            </div>
            <nav id="NavContainer">
                <Link href="/" >ABOUT</Link>
                <Link href="/" >MEMBERSHIPS</Link>
                <Link href="/" >EQUIPMENT</Link>
                <Link href="/" >LOCATIONS</Link>
                <Link href="/" >CLASSES/EVENTS</Link>
                <Link href="/" >CONTACT</Link>
            </nav>
            <div id="MenuContainer">
                <Image src={MENU} alt="Menu Button" width={50} height={50} />
            </div>
        </header>
    );
}