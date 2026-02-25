'use client'
import { useState } from 'react';
import Image from "next/image"
import NextRightIcon from "../../public/Icons/circle-arrow-right.svg"
import NextLeftIcon from "../../public/Icons/circle-arrow-left.svg"
import LegExtensionAndCrunch from "../../public/Equipment/LegExtensionAndCrunch.png"
import LocationIcon from "../../public/Icons/map-pinned.svg"
import MoreInfoIcon from "../../public/Icons/square-arrow-down-right.svg"
import EquipmentActionCard from "@/app/components/EquipmentActionCard";


export default function Equipment(){

    function NextImageRight(): void {
        return;
    }

    function NextImageLeft(): void {
        return;
    }

    return (
        <section id="Equipment">
            {/* TODO: Placeholder until image carousel logic is worked in */}
            <Image src={LegExtensionAndCrunch} alt="Leg Extension and Crunch Image" width={500} height={380} />
            <div>
                <button onClick={() => NextImageLeft}>
                    <Image src={NextLeftIcon} alt="Next Left Icon" width={55} height={55} />
                </button>
            </div>
            <div>
                <button onClick={() => NextImageRight}>
                    <Image src={NextRightIcon} alt="Next Right Icon" width={55} height={55} />
                </button>
            </div>
            <div id="EquipmentTitleContainer">
                <h2>EQUIPMENT</h2>
            </div>
            <div id="EquipmentActionButtonContainer">
                <EquipmentActionCard title="LOCATION" iconData={LocationIcon} />
                <EquipmentActionCard title="VIEW ALL" iconData={MoreInfoIcon} />
            </div>
        </section>
    );
}