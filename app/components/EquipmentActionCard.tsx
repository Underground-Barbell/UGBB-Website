"use client"
import { useState } from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"


interface EquipmentActionCardInterface {
    title: string,
    iconData: StaticImageData
}

export default function EquipmentActionCard(props: EquipmentActionCardInterface) {
    const [actionButtonToggle, setActionButtonToggle] = useState<boolean>(false)

    return (
        <div id="EquipmentActionCard">
            <h4>{props.title}</h4>
            <button onClick={() => setActionButtonToggle(!actionButtonToggle)}>
                <Image src={props.iconData} alt={`${props.title} Image`} width={50} height={50} />
            </button>
        </div>
    );
}