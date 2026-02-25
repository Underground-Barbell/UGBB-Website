import Image, { StaticImageData } from 'next/image'

interface AboutCardInterface {
    imageData: StaticImageData,
    title: string
}

export default function AboutCard(props: AboutCardInterface){


    return (
        <div id="AboutCard">
            {/* TODO: When doing CSS make 'Image' Background Image of div */}
            <Image src={props.imageData} alt={`${props.title} Image`} width={350} height={600} />
            <div id="AboutCardTitleContainer">
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}