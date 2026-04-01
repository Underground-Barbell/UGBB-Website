'use client'
import { useState } from 'react';
import Image from "next/image"
import LegExtensionAndCrunch from "../../public/Equipment/LegExtensionAndCrunch.png"
import LocationIcon from "../../public/Icons/map-pinned.svg"
import MoreInfoIcon from "../../public/Icons/square-arrow-down-right.svg"
import EquipmentActionCard from "@/app/components/EquipmentActionCard";
import {CircleArrowLeft, X} from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';


export default function Equipment(){

    const [seeImageModal, setSeeImageModal] = useState<boolean>(false);
    const [seeLocationMenu, setSeeLocationMenu] = useState<boolean>(false);
    const [seeAllImages, setSeeAllImages] = useState<boolean>(false);


    function NextImageRight(): void {
        return;
    }

    function NextImageLeft(): void {
        return;
    }

    return (
        <section
            id="Equipment"
            className="bg-black lg:h-[900px] relative"
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
                        <button
                            onClick={() => setSeeImageModal(true)}
                            className="h-full border-2 border-white rounded-4xl"
                        >
                            <Image
                                src={LegExtensionAndCrunch}
                                alt="Leg Extension and Crunch Image"
                                className="h-full rounded-4xl"
                            />
                        </button>

                        <div
                            id="EquipmentButtonContainer"
                            className="absolute bottom-2 lg:bottom-2/5 w-full flex justify-between"
                        >
                            <button
                                onClick={() => NextImageLeft}
                                className="text-white bg-black rounded-4xl p-1 ml-4 hover:scale-110"
                            >
                                <CircleArrowLeft className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] active:border-2 active:border-white active:rounded-full"/>
                            </button>
                            <button
                                onClick={() => NextImageRight}
                                className="text-white bg-black rounded-4xl p-1 mr-4 hover:scale-110"
                            >
                                <CircleArrowRight className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] active:border-2 active:border-white active:rounded-full"/>
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
                            <EquipmentActionCard title="LOCATION" iconId={1} setAction={(value) => setSeeLocationMenu(value)} />
                            <EquipmentActionCard title="VIEW ALL" iconId={2} setAction={(value) => setSeeAllImages(value)} />
                        </div>
                    </div>

                    <div
                        id="EquipmentActionButtonContainer"
                        className="lg:hidden mt-4"
                    >
                        <EquipmentActionCard title="LOCATION" iconId={1} setAction={(value) => setSeeLocationMenu(value)} />
                        <EquipmentActionCard title="VIEW ALL" iconId={2} setAction={(value) => setSeeAllImages(value)} />
                    </div>

                </div>

                <div
                    id="ExtraImagesContainer"
                    className="hidden lg:visible lg:w-2/5 lg:h-full lg:grid lg:grid-cols-2 lg:grid-rows-3"
                >
                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 mr-4 rounded-4xl border-2 border-white"
                        />
                    </button>

                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 ml-4 rounded-4xl border-2 border-white"
                        />
                    </button>

                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 mr-4 mt-4 rounded-4xl border-2 border-white"
                        />
                    </button>

                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 ml-4 mt-4 rounded-4xl border-2 border-white"
                        />
                    </button>

                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 mr-4 mt-6 rounded-4xl border-2 border-white"
                        />
                    </button>

                    <button
                        onClick={() => setSeeImageModal(true)}
                    >
                        <Image
                            src={LegExtensionAndCrunch}
                            alt="Leg Extension and Crunch Image"
                            className="h-9/10 w-9/10 m-2 ml-4 mt-6 rounded-4xl border-2 border-white"
                        />
                    </button>

                </div>
            </div>

            {seeAllImages && (
                <div
                    className="h-full w-full fixed z-100 flex justify-center items-center top-5 animate-fade-in-menu"
                >
                    <div
                        className="h-full w-8/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeAllImages(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                    </div>
                </div>
            )}

            {seeLocationMenu && (
                <div
                    className="h-full w-full fixed z-100 flex justify-center items-center top-5 animate-fade-in-menu"
                >
                    <div
                        className="h-full w-8/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeLocationMenu(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                    </div>
                </div>
            )}

            {seeImageModal && (
                <div
                    className="h-full w-full fixed z-100 flex justify-center items-center top-5 animate-fade-in-menu"
                >
                    <div
                        className="h-full w-8/10 bg-ugbb-red-main rounded-4xl relative flex flex-col items-center justify-between"
                    >
                        <button
                            className="text-white absolute top-4 right-4"
                            onClick={() => setSeeImageModal(false)}
                        >
                            <X className="w-[45px] h-[45px] hover:scale-110 active:border-2 active:border-white"/>
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}