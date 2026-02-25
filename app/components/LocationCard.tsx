import Link from "next/link"
import Image from "next/image";
import LookUpInfoIcon from "../../public/Icons/square-arrow-up-right.svg"

interface LocationCardInterface {
    title: string,
    address: string,
    city: string,
    state: string,
    availability: string
}

export default function LocationCard(props: LocationCardInterface) {


    return (
        <div id="LocationCard">
            <div id="LocationCardTitleContainer">
                <h4>{props.title}</h4>
                <hr />
            </div>
            <div id="LocationCardDetailsContainer">
                <div id="LocationCardInfoContainer">
                    <p>{props.address}</p>
                    <p>{props.city}, {props.state}</p>
                    <p>{props.availability}</p>
                </div>
                <div>
                    <Link href="/">
                        More Info -
                        <Image src={LookUpInfoIcon} alt="Look Up Info Icon" width={50} height={50}/>
                    </Link>
                </div>
            </div>

        </div>
    );
}