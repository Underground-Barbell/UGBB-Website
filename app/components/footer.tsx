'use client'
import { useState } from 'react';
import Image from "next/image";
import UgbbLogo from "../../public/LOGO/UGBB.png"
import InstagramLogoWhite from "../../public/Icons/instagramWhite.png"
import FacebookLogoWhite from "../../public/Icons/facebookWhite.png"
import Link from "next/link";

export default function Footer(){

    return (
        <footer
            id="Footer"
            className="bg-black"
        >
            <div
                id="FooterInfoContainer"
                className="py-5 pb-12 px-10 md:py-10 md:px-18 flex justify-between items-center relative"
            >
                <Link href="/">
                    <Image
                        src={UgbbLogo}
                        alt="UGBB Logo"
                        className="w-[55px] h-[55px] hover:scale-110"
                    />
                </Link>

                <div
                    id=""
                    className="w-full text-center absolute left-0 bottom-3"
                >
                    <p className="font-dosis font-bold text-gray-500 text-[12px]">@ copyright 2025 Underground Barbell</p>
                </div>
                <div
                    id="SpocialLogoIconContainer"
                    className="flex justify-center items-center"
                >
                    <Link href={"https://www.instagram.com/underground.barbell/"} target="_blank">
                        <Image
                            src={InstagramLogoWhite}
                            alt="Instagram Logo"
                            className="w-[45px] h-[45px] hover:scale-110"
                        />
                    </Link>
                    
                    <Link href={"https://www.facebook.com/groups/139261723105795"} target="_blank">
                        <Image
                            src={FacebookLogoWhite}
                            alt="Facebook Logo"
                            className="w-[55px] h-[55px] hover:scale-110"
                        />
                    </Link>

                </div>
            </div>
        </footer>
    );
}