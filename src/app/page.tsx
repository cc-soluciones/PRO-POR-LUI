import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Calls } from "@/components/Calls";

export default function Page() {
    return (
        <>
            <Hero id="home" />
            <Banner/>
            <About/>
            <Services/>
            <CTA id="CTA"/>
            <Calls id="calls"/>
        </>
    );
}
