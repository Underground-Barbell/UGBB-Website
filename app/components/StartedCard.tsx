import {StaticImageData} from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import Link from "next/link"


interface StartedCardInterface {
    title: string,
    imageData: StaticImageData
}

export default function StartedCard(props: StartedCardInterface) {


    return (
        <div id="StartedCard">
            <Link href="/">
                <h4>{props.title}</h4>
                <Image src={props.imageData} alt={`${props.title} Image`} width={150} height={150}/>
            </Link>
        </div>
    )
}