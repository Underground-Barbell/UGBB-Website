'use client'
import { useState } from "react";
import MoreInfoIcon from "../../public/Icons/square-arrow-down-right.svg"
import Image from "next/image"

interface MemberShipCardInterface {
    title: string,
    description: string,
    pricePerMonth: string
}

export default function MembershipCard(props: MemberShipCardInterface) {
    const [moreInfoToggle, setMoreInfoToggle] = useState<boolean>(false)

    return (
        <div id="MembershipCard">
            <h3>{props.title}</h3>
            <hr />
            <p>{props.description}</p>
            <div id="MembershipLowerInfoContainer">
                <h5>{props.pricePerMonth}</h5>
                <button onClick={() => setMoreInfoToggle(!moreInfoToggle)}>
                    <Image src={MoreInfoIcon} alt="More Info Icon" width={45} height={45} />
                </button>
            </div>
        </div>
    );
}