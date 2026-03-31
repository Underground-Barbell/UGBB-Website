import Image, { StaticImageData } from 'next/image'
import AnimationOnScroll from "@/app/tools/AnimationOnScroll";
import { useState } from "react";

interface AboutCardInterface {
    imageData: StaticImageData,
    title: string
}

export default function AboutCard(props: AboutCardInterface){

    const [onCard, setOnCard] = useState<boolean>(false);

    return (
        <div
            className="lg:w-1/4"
        >
            <AnimationOnScroll classNameInView={"animate-slide-in-bottom opacity-100"} classNameNotInView={"opacity-0"}>
                <div
                    id="AboutCard"
                    className="h-[450px] mx-8 mt-4 lg:mt-0 hover:bg-white hover:animate-fade-in-menu hover:scale-105 rounded-3xl"
                    onMouseEnter={() => setOnCard(true)}
                    onMouseLeave={() => setOnCard(false)}
                >
                    {!onCard && (
                        <div
                            className="h-full"
                        >
                            <Image src={props.imageData} alt={`${props.title} Image`} className="h-full rounded-3xl object-cover" />
                            <div
                                id="AboutCardTitleContainer"
                                className="bg-ugbb-red-sec border-2 border-black w-8/10 h-[70px] rounded-xl pt-2 px-5 text-center relative left-9 md:left-12 bottom-24"
                            >
                                <h4 className="text-white text-border font-sans-bartle text-[15px] text-lg">{props.title}</h4>
                            </div>
                        </div>
                    )}

                    {onCard && (
                        <div
                            className="h-full w-fit"
                        >
                            <div
                                className="h-8/10 flex flex-col justify-center items-center text-center"
                            >
                                <h2 className="font-sans-bartle text-border text-2xl mb-3">{props.title}</h2>
                                <p className="text-black font-bold font-dosis mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                                    gravida, vestibulum diam ut, vehicula velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                                    gravida, vestibulum diam ut, vehicula velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ipsum
                                    gravida, vestibulum diam ut, vehicula velit.</p>
                            </div>
                        </div>
                    )}

                </div>
            </AnimationOnScroll>
        </div>
    );
}