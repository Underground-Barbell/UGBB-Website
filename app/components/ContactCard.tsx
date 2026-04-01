import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface ContactCardInterface {
    title: string,
    description: string,
    handle: string,
    iconData: StaticImageData,
    customStyles: string,
    setSocialView: (view: boolean) => void;
}

export default function ContactCard(props: ContactCardInterface) {


    return (
        <div
            id="ContactCard"
            className={`bg-gray-200 lg:w-1/2 h-9/10 m-4 rounded-4xl flex flex-col justify-center items-center ${props.customStyles}`}
        >
            <div
                id="ContactCardTitleContainer"
                className="flex justify-center items-center"
            >
                <h5 className="font-sans-bartle text-ugbb-red-sec text-border-white text-lg md:text-2xl">{props.title}</h5>
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
                <p className="text-black font-bold font-dosis text-sm">{props.description}</p>
            </div>

            <Link
                id="ContactCardHandleContainer"
                className="flex justify-center items-center bg-gray-100 w-7/10 rounded-4xl mt-8 py-2 mb-3"
                href={props.handle}
                target="_blank"
            >
                <Image
                    src={props.iconData}
                    alt={`${props.title} Icon`}
                    className="w-[25px] h-[25px]"
                />
                <p className="text-black font-dosis text-md font-bold ml-2">View {props.title}</p>
            </Link>

            <button
                id="ContactCardMobileControlsContainer"
                className="lg:hidden bg-ugbb-red-sec p-4 border-2 border-black rounded-4xl mt-4"
                onClick={() => props.setSocialView(props.title == "FACEBOOK")}
            >
                <h5 className="font-sans-bartle text-sm text-white text-border">{props.title == "INSTAGRAM" ? "FACEBOOK" : "INSTAGRAM"}</h5>
            </button>

        </div>
    )
}