"use client";
import Image from "next/image";

export default function Quotes() {
  return (
    <section
      id="Quotes"
      className="min-h-fit bg-(--bg) w-vw px-10 py-6 text-(--textLightQuote) md:px-14"
    >
      <div className=" w-full space-y-10">
        <p className="text-center text-lg lg:w-[70%] mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sunt
          accusamus, fugiat odio vero consequatur blanditiis ducimus! Accusamus
          inventore corporis dolor saepe est temporibus reprehenderit similique
          quas officia, architecto earum voluptatum hic, tempora nobis.
        </p>
        <div className="flex flex-col items-center ">
          <span className="">
            <Image
              src="/images/vector-1770338785796-ce8842684f1d.avif"
              alt="Quote"
              width={100}
              height={0}
              className="rounded-full h-16 w-16 bg-neutral-700"
            />
          </span>
          <h4 className="text-lg font-medium ">Caden Potter</h4>
          <p className="text-(--textSlated) text-xs">Software Engineer</p>
        </div>
      </div>
    </section>
  );
}
