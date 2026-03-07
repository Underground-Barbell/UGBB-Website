import Image, { StaticImageData } from "next/image";


interface ContactCardInterface {
    title: string,
    description: string,
    handle: string,
    iconData: StaticImageData
}

export default function ContactCard(props: ContactCardInterface) {


    return (
        <div
            id="ContactCard"
            className="bg-gray-200 w-1/2 h-9/10 m-4 rounded-4xl flex flex-col justify-center items-center"
        >
            <div
                id="ContactCardTitleContainer"
                className="flex justify-center items-center"
            >
                <h5 className="font-sans-bartle text-ugbb-red-sec text-border-white text-2xl">{props.title}</h5>
                <Image
                    src={props.iconData}
                    alt={`${props.title} Icon`}
                    className="w-[35px] h-[35px] ml-1"
                />
            </div>

            <div
                id="ContactCardDescriptionContainer"
                className="flex justify-center items-center bg-ugbb-red-main w-7/10 p-9 rounded-4xl mt-5"
            >
                <p className="text-black font-bold font-dosis text-md">{props.description}</p>
            </div>

            <div
                id="ContactCardHandleContainer"
                className="flex justify-center items-center bg-gray-100 w-7/10 rounded-4xl mt-8 py-2"
            >
                <Image
                    src={props.iconData}
                    alt={`${props.title} Icon`}
                    className="w-[25px] h-[25px]"
                />
                <p className="text-black font-dosis text-md font-bold ml-2">{props.handle}</p>
            </div>
        </div>
    )
}