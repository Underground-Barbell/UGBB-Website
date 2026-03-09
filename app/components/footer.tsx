"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";

import Image from "next/image";

interface IFooterLinks {
  name: string;
  link: string;
}

export default function Footer() {
  const UGBB_Logo = "/images/UGBB.webp";

  const FooterLinks: IFooterLinks[] = [
    { name: "FAQ", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Login", link: "#" },
    { name: "Sponsors", link: "#" }
];

  return (
    <footer id="Footer" className="bg-(--bg)">
      <div className="text-(--textLight)  px-6 py-6 space-y-8 md:px-12 md:py-10">
        <div className="flex  flex-col gap-4 md:flex-row items-center justify-between w-full ">
          {/* Website Content Section */}
          <div className="w-fit bg-blue-400">
            <a href="#"><Image
              src={UGBB_Logo}
              alt="Home"
              width={100}
              height={0}
              className="w-16"
            /></a>
            
          </div>
          {/* Company Copywrite */}
        
        <ul className="flex justify-center w-full items-center gap-4 md:gap-8 ">
          {FooterLinks.map(l => (
            
                <li className="hover:text-primary transition-colors duration-300">
                    <a href={l.link}> {l.name}</a>
                </li>
          
          ))}
          </ul>

          {/* Media Section */}
          <div className=" flex gap-4 items-center">
            <div className=" p-2 rounded-full hover:bg-blue-950 border-2 border-neutral-500 transition-colors duration-500 cursor-pointer">
              <Facebook className="" size={14} />
            </div>

            <div className=" p-2 rounded-full hover:bg-pink-500 border-2 border-neutral-500 transition-colors duration-500 cursor-pointer"><Instagram className="" size={14} /></div>
            
            <div className=" p-2 rounded-full hover:bg-blue-600 border-2 border-neutral-500 transition-colors duration-500 cursor-pointer"><Twitter className="" size={14}  /></div>
            
          </div>
        </div>
        <div className="text-center mt-12">Copywrite Claim</div>
      </div>
    </footer>
  );
}
