'use client'
import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import MembershipCard from "@/app/components/MembershipCard";
import BarbellIcon from "../../public/Icons/Barbell.svg"
import MoreInfoIcon from "../../public/Icons/square-arrow-down-right.svg"


export default function Memberships(){
    const [moreInfoToggle, setMoreInfoToggle] = useState<boolean>(false)

    return (
        <section id="Memberships">
            <h2>MEMBERSHIPS</h2>
            <div id="CardContainer">
                <div id="BasicMembershipContainer">
                    <div id="BasicMembershipCard">
                        <h3>BASIC</h3>
                        <hr />
                        <h5>- 35$/MONTH -</h5>
                        <button onClick={() => setMoreInfoToggle(!moreInfoToggle)}>
                            <Image src={BarbellIcon} alt="Barbell Icon" width={375} height={150} />
                        </button>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                            gravida, vestibulum diam ut, vehicula velit. Integer augue eros,
                            porttitor et imperdiet non, dignissim posuere massa.
                        </p>
                        <Image src={MoreInfoIcon} alt="More Info Icon" width={45} height={45} />
                    </div>
                    <div id="MembershipContactLinkContainer">
                        <Link href="/">Visit Contact to Get Setup</Link>
                    </div>
                </div>
                <div id="OtherMembershipsContainer">
                    <MembershipCard
                        title="FAMILY"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="75$/MONTH"
                    />
                    <MembershipCard
                        title="BASIC + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="125$/MONTH"
                    />
                    <MembershipCard
                        title="FAMILY + PERSONAL TRAINING"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum  gravida, vestibulum diam ut, vehicula velit."
                        pricePerMonth="175$/MONTH"
                    />
                </div>
            </div>
        </section>
    );
}