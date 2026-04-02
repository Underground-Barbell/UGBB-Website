'use client'
import { useState } from 'react';
import Image from "next/image"
import SearchIcon from "../../public/Icons/text-search.svg"
import SpeakingUserIcon from "../../public/Icons/SpeakingUserIcon.png"
import BarbellPersonIcon from "../../public/Icons/BarbellPersonIcon.png"
import { ArrowRight, ArrowDown } from 'lucide-react';
import AnimationOnScroll from "@/app/tools/AnimationOnScroll";
import Link from "next/link";




export default function Started(){

    return (
        <section
            id="Started"
            className="bg-gray-100 pb-20 border-b-20 md:border-b-28 border-ugbb-red-main"
        >
            <div
                id="StartedTitleContainer"
                className="text-center"
            >
                <h2 className="font-sans-bartle text-3xl md:text-5xl text-white text-border-red">HOW TO GET STARTED</h2>
            </div>
            <div
                id="StartedProcessDiagramContainer"
                className="desktop:visible w-full mt-10 flex flex-col desktop:flex-row justify-center items-center"
            >
                <div
                    id="FirstStepsContainer"
                    className="desktop:w-3/7 mx-5 desktop:ml-16 desktop:mr-4 border-ugbb-red-main border-2 bg-white rounded-4xl"
                >
                    <div
                        id="FirstStepsTitleContainer"
                        className="hidden desktop:flex desktop:visible"
                    >
                        <h3 className="font-sans-bartle text-ugbb-red-sec text-2xl ml-5 mt-5 mb-1">MEMBERSHIP</h3>
                        <h3 className="font-sans-bartle text-ugbb-red-sec text-2xl ml-15 mt-5 mb-1">CONTACT US</h3>
                    </div>
                    <div
                        id="FirstStepsIconsContainer"
                        className="hidden desktop:visible desktop:flex desktop:mb-5 desktop:items-center"
                    >
                        <Link
                            href="/#Memberships"
                            className="hover:scale-110"
                        >
                            <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom"} classNameNotInView={"opacity-0"}>
                                <Image src={SearchIcon} alt="Search Icon" width={185} height={185} className="ml-22"/>
                            </AnimationOnScroll>
                        </Link>
                        <h4 className="ml-17 text-ugbb-red-sec text-5xl font-sans-bartle">&</h4>
                        <Link
                            href="/#Contact"
                            className="hover:scale-110"
                        >
                            <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom-2 delay-1000"} classNameNotInView={"opacity-0"}>
                                <Image src={SpeakingUserIcon} alt="Speaking User Icon" width={185} height={185} className="ml-15"/>
                            </AnimationOnScroll>
                        </Link>
                        <ArrowRight className="w-[85px] h-[85px] ml-13" />
                    </div>
                    <div
                        id="StartedFirstStepsMobileContainer"
                        className="desktop:hidden flex flex-col justify-center items-center w-[300px] lg:w-[1000px] lg:max-w-[1000px]"
                    >
                        <div
                            className="flex flex-col justify-center items-center"
                        >
                            <h3 className="font-sans-bartle text-ugbb-red-sec text-lg md:text-2xl mt-3">MEMBERSHIP</h3>
                            <Link
                                href="/#Memberships"
                            >
                                <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom"} classNameNotInView={"opacity-0"}>
                                    <Image src={SearchIcon} alt="Search Icon" width={125} height={125} className="mb-5"/>
                                </AnimationOnScroll>
                            </Link>

                            <h4 className="text-ugbb-red-sec text-5xl font-sans-bartle">&</h4>

                            <h3 className="font-sans-bartle text-ugbb-red-sec text-lg md:text-2xl mt-5">CONTACT US</h3>

                            <Link
                                href="/#Contact"
                            >
                                <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom-2 delay-1000"} classNameNotInView={"opacity-0"}>
                                    <Image src={SpeakingUserIcon} alt="Speaking User Icon" width={125} height={125} className="mb-5"/>
                                </AnimationOnScroll>
                            </Link>

                            <ArrowDown className="w-[85px] h-[85px] mb-3" />
                        </div>
                    </div>
                </div>

                <div
                    id="LastStepContainer"
                    className="desktop:w-2/7 mx-5 mt-8 desktop:mt-0 desktop:mr-16 desktop:ml-4 bg-ugbb-red-sec rounded-4xl"
                >
                    <div
                        id="LastStepsInfoContainer"
                        className="hidden desktop:visible desktop:mx-16 desktop:mt-5 desktop:flex desktop:flex-col desktop:items-center desktop:justify-center"
                    >
                        <h4 className="text-black font-sans-bartle text-lg text-border-white mb-4">START LIFTING!</h4>
                        <Link
                            href="/#Locations"
                            className="hover:scale-110"
                        >
                            <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom-3 delay-1000"} classNameNotInView={"opacity-0"}>
                                <Image src={BarbellPersonIcon} alt="Barbell Person Icon" width={165} height={165} className="rounded-4xl pb-4"/>
                            </AnimationOnScroll>
                        </Link>
                    </div>
                    <div
                        id="StartedLastStepsMobileContainer"
                        className="desktop:hidden flex flex-col justify-center items-center w-[300px] lg:w-[1000px] lg:max-w-[1000px]"
                    >
                        <h4 className="text-black font-sans-bartle text-lg md:text-2xl text-border-white my-4">START LIFTING!</h4>
                        <Link
                            href="/#Locations"
                        >
                            <AnimationOnScroll classNameInView={"transition-opacity opacity-100 animate-slide-in-bottom-3 delay-1000"} classNameNotInView={"opacity-0"}>
                                <Image src={BarbellPersonIcon} alt="Barbell Person Icon" width={165} height={165} className="rounded-4xl pb-4"/>
                            </AnimationOnScroll>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}