'use client'
import { useState } from 'react';
import Image from "next/image";
import UgbbLogo from "../../public/LOGO/UGBB.png"
import InstagramLogoWhite from "../../public/Icons/instagramWhite.png"
import FacebookLogoWhite from "../../public/Icons/facebookWhite.png"

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
                <Image
                    src={UgbbLogo}
                    alt="UGBB Logo"
                    className="w-[55px] h-[55px]"
                />
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
                    <Image
                        src={FacebookLogoWhite}
                        alt="Facebook Logo"
                        className="w-[55px] h-[55px]"
                    />
                    <Image
                        src={InstagramLogoWhite}
                        alt="Instagram Logo"
                        className="w-[45px] h-[45px]"
                    />
                </div>
            </div>
        </footer>
    );
}