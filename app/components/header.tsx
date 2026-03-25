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
            className="fixed w-full top-0 left-0 z-20 animate-fade-in"
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
                    <Image src={UGBB} alt="UGBB Logo" className="w-[90px] h-[90px] md:w-[75px] md:h-[75px] lg:w-[65px] lg:h-[65px] active:border-4 active:border-white" />
                </Link>
                <div
                    className="flex justify-end"
                >
                    <nav
                        id="NavContainer"
                        className="hidden lg:visible bg-black text-white border-4 border-white w-full lg:flex lg:items-center lg:justify-between px-10 font-dosis font-extrabold text-2xl mr-10"
                    >
                        <Link
                            href="/"
                            className="mr-4 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            ABOUT
                        </Link>
                        <Link
                            href="/"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            MEMBERSHIPS
                        </Link>
                        <Link
                            href="/"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            EQUIPMENT
                        </Link>
                        <Link
                            href="/"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            LOCATIONS
                        </Link>
                        <Link
                            href="/"
                            className="mx-6 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            CLASSES/EVENTS
                        </Link>

                        <Link
                            href="/"
                            className="ml-4 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2"
                        >
                            CONTACT
                        </Link>

                    </nav>
                    <button
                        id="MenuContainer"
                        className="bg-black border-white border-4 w-[90px] h-[90px] md:w-[75px] md:h-[75px] lg:w-[65px] lg:h-[65px] text-white flex items-center justify-center transition duration-300 ease-in-out hover:scale-110  active:border-6 active:border-white"
                        onClick={() => setMenu(!menu)}
                    >
                        <Menu
                            className="h-[75px] w-[75px] md:h-[60px] md:w-[60px] lg:h-[50px] lg:w-[50px]"
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
                                <Image src={UGBB} alt="UGBB Logo" className="w-[120px] h-[120px] md:w-[90px] md:h-[90px] lg:w-[65px] lg:h-[65px] transition duration-300 ease-in-out hover:scale-110 active:border-4 active:border-white" />
                            </Link>
                            <button
                                id="MenuContainer"
                                className="text-white bg-black p-1 border-white border-2 transition duration-300 ease-in-out hover:scale-110 active:border-4 active:border-white"
                                onClick={() => setMenu(!menu)}
                            >
                                <X
                                    className="h-[105px] w-[105px] md:h-[75px] md:w-[75px] lg:h-[50px] lg:w-[50px]"
                                />
                            </button>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center"
                        >
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">ABOUT</Link>
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">MEMBERSHIPS</Link>
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">EQUIPMENT</Link>
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">LOCATIONS</Link>
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">CLASSES/EVENTS</Link>
                            <Link href="/" className="font-sans-bartle text-5xl bg-black p-4 border-white border-2 mt-10 transition duration-300 ease-in-out hover:scale-110 active:underline underline-offset-5 decoration-2">CONTACT</Link>
                        </div>

                    </div>

                </div>
            )}

        </header>
    );
}