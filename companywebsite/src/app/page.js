import About from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import Hero from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";

export default function Home() {
  return <><Navbar /><Hero /><About /><Experience /><Technologies /><ContactUs /> </>;
}
