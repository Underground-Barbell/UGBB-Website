import Image, { StaticImageData } from 'next/image'

interface AboutCardInterface {
    imageData: StaticImageData,
    title: string
}

export default function AboutCard(props: AboutCardInterface){


    return (
        <div
            id="AboutCard"
            className="lg:w-1/4 h-[450px] mx-8 mt-4 lg:mt-0"
        >
            <Image src={props.imageData} alt={`${props.title} Image`} className="h-full rounded-3xl object-cover" />
            <div
                id="AboutCardTitleContainer"
                className="bg-ugbb-red-sec border-2 border-black w-8/10 h-[70px] rounded-xl pt-2 px-5 text-center relative left-9 md:left-12 bottom-24"
            >
                <h4 className="text-white text-border font-sans-bartle text-[15px] text-lg">{props.title}</h4>
            </div>
        </div>
    );
}