"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="bg-(--bg-light) min-h-screen h-full py-10 px-16 md:px-[16%] lg:px-[24%]"
    >
      <div className="w-full items-center text-neutral-800 ">
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-bold">Get in Touch!</h3>
          <p className="text-center">
            Reach out if you are instrested in any memeberships, sponsorship or
            general insterest in the brand.
          </p>
          <div className="flex w-full items-center justify-between text-sm text-neutral-600 mt-8 md:mt-4 ">
            <div className=" flex flex-col items-center wrap-break-word gap-2 md:px-4 md:py-6 md:rounded-lg  hover:bg-neutral-200/65 cursor-copy">
              <span>
                <MapPin color="#A22C29" size={32} strokeWidth={2} />
              </span>
              <p className="">102 Street 2714 Don</p>
            </div>
            <div className=" flex flex-col items-center wrap-break-word gap-2 md:px-4 md:py-6 md:rounded-lg  hover:bg-neutral-200/65 cursor-copy">
              <span>
                <Phone color="#A22C29" size={32} strokeWidth={2} />
              </span>
              <p>+1 123-456-7890</p>
            </div>
            <div className=" flex flex-col items-center wrap-break-word gap-2 md:px-4 md:py-6 md:rounded-lg  hover:bg-neutral-200/65 cursor-copy">
              <span>
                <Mail color="#A22C29" size={32} strokeWidth={2} />
              </span>
              <p>john.doe@email.com</p>
            </div>
          </div>

          <div className="w-full mt-8">
            <form>
              <div className="flex flex-col gap-6 py-6">
                <h3 className="text-lg font-bold text-center">Contact Us</h3>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="bg-neutral-200 px-4 py-2 rounded-md border-2 border-neutral-200 hover:border-2 hover:border-neutral-300 outline-neutral-400 transition-colors ease-in-out duration-300"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone Number"
                  className="bg-neutral-200 px-4 py-2 rounded-md border-2 border-neutral-200 hover:border-2 hover:border-neutral-300 outline-neutral-400 transition-colors ease-in-out duration-300"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder=" Email"
                  className="bg-neutral-200 px-4 py-2 rounded-md border-2 border-neutral-200 hover:border-2 hover:border-neutral-300 outline-neutral-400 transition-colors ease-in-out duration-300"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  rows={5}
                  className="bg-neutral-200 px-4 py-2 rounded-md border-2 border-neutral-200 hover:border-2 hover:border-neutral-300 outline-neutral-400 transition-colors ease-in-out duration-300 resize-none "
                />

                <button
                  type="submit"
                  className="bg-primary text-(--textLight) py-2 rounded-lg text-sm font-medium mt-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
