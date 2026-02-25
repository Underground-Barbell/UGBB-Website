'use client'
import { useState } from 'react';
import AboutCard from "@/app/components/AboutCard";
import BicepCurlAndLegExtension from "../../public/Equipment/BicepCurlAndLegExtension.png"
import Community from "../../public/AboutImages/communityUGBB.png"
import PersonalTraining from "../../public/AboutImages/personalTrainingAboutUGBB.png"


export default function About(){

    return (
        <section id="About">
            <div id="AboutInfoContainer">
                <h2>ABOUT</h2>
                <h2>UGBB</h2>
                <hr />
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                    gravida, vestibulum diam ut, vehicula velit. Integer augue eros,  porttitor
                    et imperdiet non, dignissim posuere massa. Aliquam suscipit  pretium eros, eget
                    venenatis erat suscipit ut. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit. Integer augue
                    eros,  porttitor et imperdiet non, dignissim posuere massa.
                </p>
            </div>
            <div id="AboutCardContainer">
                <AboutCard imageData={BicepCurlAndLegExtension} title="PROFESSIONAL EQUIPMENT" />
                <AboutCard imageData={Community} title="SUPPORTIVE COMMUNITY" />
                <AboutCard imageData={PersonalTraining} title="PERSONAL TRAINING" />
            </div>
        </section>
    );
}