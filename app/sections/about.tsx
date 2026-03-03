'use client'
import { useState } from 'react';
import AboutCard from "@/app/components/AboutCard";
import BicepCurlAndLegExtension from "../../public/Equipment/BicepCurlAndLegExtension.png"
import Community from "../../public/AboutImages/communityUGBB.png"
import PersonalTraining from "../../public/AboutImages/personalTrainingAboutUGBB.png"


export default function About(){

    return (
        <section id="About"
            className="bg-black text-white pb-24 border-b-28 border-ugbb-red-sec"
        >
            <div
                id="AboutInfoContainer"
                className="relative left-12"
            >
                <h2 className="font-sans-bartle text-5xl text-border-red">ABOUT</h2>
                <h2 className="font-sans-bartle text-5xl text-border-red">UGBB</h2>
                <hr className="border-3 w-md rounded-full text-ugbb-red-main mt-2" />
                <p className="font-dosis text-lg w-3/8 mt-2 font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                    gravida, vestibulum diam ut, vehicula velit.
                </p>
            </div>
            <div
                id="AboutCardContainer"
                className="flex justify-center items-center mt-8"
            >
                <AboutCard imageData={BicepCurlAndLegExtension} title="PROFESSIONAL EQUIPMENT" />
                <AboutCard imageData={Community} title="SUPPORTIVE COMMUNITY" />
                <AboutCard imageData={PersonalTraining} title="PERSONAL TRAINING" />
            </div>
        </section>
    );
}