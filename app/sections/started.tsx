'use client'
import { useState } from 'react';
import Image from "next/image"
import SearchIcon from "../../public/Icons/text-search.svg"
import SpeakingUserIcon from "../../public/Icons/SpeakingUserIcon.png"
import BarbellPersonIcon from "../../public/Icons/BarbellPersonIcon.png"
import ArrowIcon from "../../public/Icons/arrowIcon.png"
import StartedCard from "@/app/components/StartedCard";



export default function Started(){

    return (
        <section id="Started">
            <h2>HOW TO GET STARTED</h2>
            <hr />
            <div id="StartedProcessDiagramContainer">
                <div>
                    <StartedCard title="PICK YOUR MEMBERSHIP" imageData={SearchIcon} />
                    <Image src={ArrowIcon} alt="Arrow Icon" width={85} height={35} />
                    <StartedCard title="CONTACT US" imageData={SpeakingUserIcon} />
                    <Image src={ArrowIcon} alt="Arrow Icon" width={85} height={35} />
                    <StartedCard title="START LIFTING!" imageData={BarbellPersonIcon} />
                </div>
            </div>
        </section>
    );
}