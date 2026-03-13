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
            className="bg-black lg:h-[900px]"
        >
            {/* TODO: Placeholder until image carousel logic is worked in */}
            <div
                id="EquipmentImagesContainer"
                className="h-full w-full flex flex-col lg:flex-row items-center lg:items-start p-8"
            >

                <div
                    id="EquipmentTitleContainer"
                    className="lg:hidden mb-4"
                >
                    <h2 className="font-sans-bartle text-border-white text-3xl md:text-5xl">EQUIPMENT</h2>
                </div>

                <div
                    id="CentralEquipmentImageContainer"
                    className="lg:w-3/5 lg:h-9/10 lg:px-22"
                >

                    <div
                        className="lg:h-full lg:pt-15 relative"
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-full border-2 border-white rounded-4xl"
                        />

                        <div
                            id="EquipmentButtonContainer"
                            className="absolute bottom-2 lg:bottom-2/5 w-full flex justify-between"
                        >
                            <button
                                onClick={() => NextImageLeft}
                                className="text-white bg-black rounded-4xl p-1 ml-4"
                            >
                                <CircleArrowLeft className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]"/>
                            </button>
                            <button
                                onClick={() => NextImageRight}
                                className="text-white bg-black rounded-4xl p-1 mr-4"
                            >
                                <CircleArrowRight className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]"/>
                            </button>
                        </div>


                        <div
                            id="EquipmentTitleContainer"
                            className="hidden lg:block lg:absolute lg:bottom-0 lg:ml-5 lg:mb-5"
                        >
                            <h2 className="font-sans-bartle text-border-white text-4xl">EQUIPMENT</h2>
                        </div>

                        <div
                            id="EquipmentActionButtonContainer"
                            className="hidden lg:flex lg:flex-col lg:absolute lg:bottom-0 lg:right-0 "
                        >
                            <EquipmentActionCard title="LOCATION" iconId={1} />
                            <EquipmentActionCard title="VIEW ALL" iconId={2} />
                        </div>
                    </div>

                    <div
                        id="EquipmentActionButtonContainer"
                        className="lg:hidden mt-4"
                    >
                        <EquipmentActionCard title="LOCATION" iconId={1} />
                        <EquipmentActionCard title="VIEW ALL" iconId={2} />
                    </div>

                </div>

                <div
                    id="ExtraImagesContainer"
                    className="hidden lg:visible lg:w-2/5 lg:grid lg:grid-cols-2 lg:grid-rows-3"
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