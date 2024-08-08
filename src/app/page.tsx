import Navbar from "@/components/Navbar";
import Image from "next/image";
import Banner from "../components/Home/Banner/Banner";
import Services from "@/components/Home/Services/Services";
import Features from "@/components/Home/Features/Features";
export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Features />
    </main>
  );
}
