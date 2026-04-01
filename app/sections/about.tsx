'use client'
import { useState } from 'react';
import AboutCard from "@/app/components/AboutCard";
import BicepCurlAndLegExtension from "../../public/Equipment/BicepCurlAndLegExtension.png"
import Community from "../../public/AboutImages/communityUGBB.png"
import PersonalTraining from "../../public/AboutImages/personalTrainingAboutUGBB.png"
import AnimationOnScroll from "@/app/tools/AnimationOnScroll";


export default function About(){

    return (
        <section id="About"
            className="bg-black text-white pb-24 border-b-20 md:border-b-28 border-ugbb-red-sec"
        >
            <AnimationOnScroll classNameInView={"animate-slide-in-left opacity-100"} classNameNotInView={"opacity-0"}>
                <div
                    id="AboutInfoContainer"
                    className="pt-8 md:pt-0 flex flex-col justify-center items-center text-center md:flex-none md:justify-start md:items-start md:text-start md:ml-8"
                >
                    <h2 className="font-sans-bartle text-4xl md:text-5xl text-border-red">ABOUT</h2>
                    <h2 className="font-sans-bartle text-4xl md:text-5xl text-border-red">UGBB</h2>
                    <hr className="border-3 w-85 md:w-md rounded-full text-ugbb-red-main mt-2" />
                    <p className="font-dosis text-lg md:w-3/8 mt-2 font-bold">
                        Underground Barbell is a hardcore, community-driven strength facility where everyone is fully committed to getting better and helping others do the same in an environment focused on discipline, effort, and real results.
                    </p>
                </div>
            </AnimationOnScroll>
            <div
                id="AboutCardContainer"
                className="flex flex-col lg:flex-row justify-center items-center mt-8"
            >
                <AboutCard imageData={BicepCurlAndLegExtension} title="PROFESSIONAL EQUIPMENT" description="At Underground Barbell, we take pride in providing top-tier equipment designed for serious training and real results. From competition-grade powerlifting bars to specialty equipment you will not find in commercial gyms, every piece is chosen with purpose. Our setup supports all strength levels, from beginners learning the basics to experienced lifters pushing elite numbers. If you are serious about training, you will have everything you need right here." />
                <AboutCard imageData={Community} title="SUPPORTIVE COMMUNITY" description="This is more than just a gym, it is a community built on respect, accountability, and shared goals. Every member is here to improve, and that creates an atmosphere where motivation is constant and effort is expected. You will be surrounded by individuals who push themselves and support others doing the same. No egos, just people showing up and putting in the work." />
                <AboutCard imageData={PersonalTraining} title="PERSONAL TRAINING" description="Our personal training options are designed to meet you where you are and take you where you want to go. Whether you need one-on-one coaching, high-intensity group sessions, or flexible online programming, we have options that fit your goals. Our trainers focus on proper technique, structured progression, and long-term success. You are not just working out, you are training with purpose." />
            </div>
        </section>
    );
}