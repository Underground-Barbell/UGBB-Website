import Hero from "@/app/sections/hero";
import Introduction from "@/app/sections/introduction";
import About from "@/app/sections/about";
import Memberships from "@/app/sections/memberships";
import Started from "@/app/sections/started";
import Equipment from "@/app/sections/equipment";
import Quotes from "@/app/sections/quotes";
import Locations from "@/app/sections/locations";
import Classes from "@/app/sections/classes";
import Sponsors from "@/app/sections/sponsors";
import Contact from "@/app/sections/contact";

export default function Home() {
  return (
    <main>
        <div>
            <Hero />
        </div>
        <div>
            <Introduction />
        </div>
        <div>
            <About />
        </div>
        <div>
            <Memberships />
        </div>
        <div>
            <Started />
        </div>
        <div>
            <Equipment />
        </div>
        <div>
            <Quotes />
        </div>
        <div>
            <Locations />
        </div>
        <div>
            <Sponsors />
        </div>
        <div>
            <Classes />
        </div>
        <div>
            <Contact />
        </div>
    </main>
  );
}
