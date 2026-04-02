'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import UGBB from "../../public/LOGO/UGBB.png"
import { Menu, X } from 'lucide-react';

export default function Header(){
    const [menu, setMenu] = useState(false);


    // const [loaded, setLoaded] = useState(false);
    //
    // const handleLoad = () => {
    //     setLoaded(true);
    // }
    //
    // const componentDidMount = () => {
    //     window.addEventListener('load', handleLoad);
    // }



    return (
        <header
            id="Header"
            className="fixed w-full top-0 left-0 z-100 animate-fade-in"
        >
            <div
                id="HeaderInfoContainer"
                className="flex justify-between items-center my-4 mx-4"
            >
                <Link
                    href="/"
                    id="LogoContainer"
                    className="transition duration-300 ease-in-out hover:scale-110"
                >
                    <Image src={UGBB} alt="UGBB Logo" className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[65px] lg:h-[65px] active:border-4 active:border-white" />
                </Link>
                <div
                    className="flex justify-end"
                >
                    <nav
                        id="NavContainer"
                        className="hidden bg-black text-white border-4 border-white desktop:w-full desktop:flex desktop:items-center desktop:justify-between px-10 font-dosis font-extrabold desktop:text-2xl desktop:mr-10"
                    >
                        <Link
                            href="/#About"
                            className="mr-4 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/#Memberships"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            MEMBERSHIPS
                        </Link>
                        <Link
                            href="/#Equipment"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            EQUIPMENT
                        </Link>
                        <Link
                            href="/#Locations"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            LOCATIONS
                        </Link>
                        <Link
                            href="/#Classes"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            CLASSES/EVENTS
                        </Link>

                        <Link
                            href="/#Contact"
                            className="ml-4 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            CONTACT
                        </Link>

                    </nav>
                    <button
                        id="MenuContainer"
                        className="bg-black border-white border-4 w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[65px] lg:h-[65px] text-white flex items-center justify-center transition duration-300 ease-in-out hover:scale-110  active:border-6 active:border-white"
                        onClick={() => setMenu(!menu)}
                    >
                        <Menu
                            className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] lg:h-[50px] lg:w-[50px]"
                        />
                    </button>
                </div>
            </div>

            {menu && (
                <div
                    id=""
                    className="absolute left-0 top-0 w-full h-[1200px] bg-[url(/menuBackground.png)] text-white p-4 animate-fade-in-menu"
                >
                    <div
                        id="LogoContainer"
                        className="w-full"
                    >
                        <div
                            className="flex justify-between items-center"
                        >
                            <Link
                                href="/"
                            >
                                <Image src={UGBB} alt="UGBB Logo" className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] lg:w-[65px] lg:h-[65px] transition duration-300 ease-in-out hover:scale-110 active:border-4 active:border-white" />
                            </Link>
                            <button
                                id="MenuContainer"
                                className="text-white bg-black p-1 border-white border-2 transition duration-300 ease-in-out hover:scale-110 active:border-4 active:border-white"
                                onClick={() => setMenu(!menu)}
                            >
                                <X
                                    className="h-[45px] w-[45px] md:h-[75px] md:w-[75px] lg:h-[50px] lg:w-[50px]"
                                />
                            </button>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center"
                        >
                            <Link href="/#About" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>ABOUT</Link>
                            <Link href="/#Memberships" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 mt-4 md:mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>MEMBERSHIPS</Link>
                            <Link href="/#Equipment" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 mt-4 md:mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>EQUIPMENT</Link>
                            <Link href="/#Locations" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 mt-4 md:mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>LOCATIONS</Link>
                            <Link href="/#Classes" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 mt-4 md:mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>CLASSES/EVENTS</Link>
                            <Link href="/#Contact" className="font-sans-bartle lg:text-5xl bg-black p-4 border-white border-2 mt-4 md:mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2" onClick={() => setMenu(false)}>CONTACT</Link>
                        </div>

                    </div>

                </div>
            )}

        </header>
    );
}