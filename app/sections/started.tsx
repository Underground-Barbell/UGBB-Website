'use client'
import { useState } from 'react';
import Image from "next/image"
import SearchIcon from "../../public/Icons/text-search.svg"
import SpeakingUserIcon from "../../public/Icons/SpeakingUserIcon.png"
import BarbellPersonIcon from "../../public/Icons/BarbellPersonIcon.png"
import { ArrowRight } from 'lucide-react';




export default function Started(){

    return (
        <section
            id="Started"
            className="bg-gray-100 pb-20 border-b-28 border-ugbb-red-main"
        >
            <div
                id="StartedTitleContainer"
                className="text-center"
            >
                <h2 className="font-sans-bartle text-5xl text-white text-border-red">HOW TO GET STARTED</h2>
            </div>
            <div
                id="StartedProcessDiagramContainer"
                className="w-full flex mt-10 justify-center"
            >
                <div
                    id="FirstStepsContainer"
                    className="w-3/7 ml-16 mr-4 border-ugbb-red-main border-2 bg-white rounded-4xl"
                >
                    <div
                        id="FirstStepsTitleContainer"
                        className="flex"
                    >
                        <h3 className="font-sans-bartle text-ugbb-red-sec text-2xl ml-5 mt-5 mb-1">MEMBERSHIP</h3>
                        <h3 className="font-sans-bartle text-ugbb-red-sec text-2xl ml-15 mt-5 mb-1">CONTACT US</h3>
                    </div>
                    <div
                        id="FirstStepsIconsContainer"
                        className="flex mb-5 items-center"
                    >
                        <Image src={SearchIcon} alt="Search Icon" width={185} height={185} className="ml-22"/>
                        <h4 className="ml-17 text-ugbb-red-sec text-5xl font-sans-bartle">&</h4>
                        <Image src={SpeakingUserIcon} alt="Speaking User Icon" width={185} height={185} className="ml-15"/>
                        <ArrowRight className="w-[85px] h-[85px] ml-13" />
                    </div>
                </div>

                <div
                    id="LastStepContainer"
                    className="w-2/7 mr-16 ml-4 bg-ugbb-red-sec rounded-4xl"
                >
                    <div
                        id="LastStepsInfoContainer"
                        className="mx-16 mt-5 flex flex-col items-center justify-center"
                    >
                        <h4 className="text-black font-sans-bartle text-2xl text-border-white mb-4">START LIFTING!</h4>
                        <Image src={BarbellPersonIcon} alt="Barbell Person Icon" width={165} height={165} className="rounded-4xl"/>
                    </div>

                </div>
            </div>
        </section>
    );
}