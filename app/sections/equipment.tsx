'use client'
import { useState } from 'react';
import Image from "next/image"
import LegExtensionAndCrunch from "../../public/Equipment/LegExtensionAndCrunch.png"
import LocationIcon from "../../public/Icons/map-pinned.svg"
import MoreInfoIcon from "../../public/Icons/square-arrow-down-right.svg"
import EquipmentActionCard from "@/app/components/EquipmentActionCard";
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';


export default function Equipment(){

    function NextImageRight(): void {
        return;
    }

    function NextImageLeft(): void {
        return;
    }

    return (
        <section
            id="Equipment"
            className="bg-black h-[900px]"
        >
            {/* TODO: Placeholder until image carousel logic is worked in */}
            <div
                id="EquipmentImagesContainer"
                className="h-full w-full flex p-8"
            >

                <div
                    id="CentralEquipmentImageContainer"
                    className="w-3/5 h-9/10 px-22"
                >

                    <div
                        className="h-full pt-15 relative"
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-full border-2 border-white rounded-4xl"
                        />

                        <div
                            id="EquipmentButtonContainer"
                            className="absolute top-1/2 w-full flex justify-between"
                        >
                            <button
                                onClick={() => NextImageLeft}
                                className="text-white bg-black rounded-4xl p-1 ml-4"
                            >
                                <CircleArrowLeft className="w-[55px] h-[55px]"/>
                            </button>
                            <button
                                onClick={() => NextImageRight}
                                className="text-white bg-black rounded-4xl p-1 mr-4"
                            >
                                <CircleArrowRight className="w-[55px] h-[55px]"/>
                            </button>
                        </div>


                        <div
                            id="EquipmentTitleContainer"
                            className="absolute bottom-0 ml-5 mb-5"
                        >
                            <h2 className="font-sans-bartle text-border-white text-4xl">EQUIPMENT</h2>
                        </div>

                        <div
                            id="EquipmentActionButtonContainer"
                            className="absolute bottom-0 right-0 "
                        >
                            <EquipmentActionCard title="LOCATION" iconId={1} />
                            <EquipmentActionCard title="VIEW ALL" iconId={2} />
                        </div>
                    </div>

                </div>

                <div
                    id="ExtraImagesContainer"
                    className="w-2/5 grid grid-cols-2 grid-rows-3"
                >
                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 mr-4 rounded-4xl border-2 border-white"
                    />

                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 ml-4 rounded-4xl border-2 border-white"
                    />

                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 mr-4 mt-4 rounded-4xl border-2 border-white"
                    />

                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 ml-4 mt-4 rounded-4xl border-2 border-white"
                    />

                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 mr-4 mt-6 rounded-4xl border-2 border-white"
                    />

                    <Image
                        src={LegExtensionAndCrunch}
                        alt="Leg Extension and Crunch Image"
                        className="h-9/10 w-9/10 m-2 ml-4 mt-6 rounded-4xl border-2 border-white"
                    />

                </div>
            </div>


        </section>
    );
}