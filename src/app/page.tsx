import Banner from "../components/Home/Banner/Banner";
import Services from "@/components/Home/Services/Services";
import Features from "@/components/Home/Features/Features";
import About from "@/components/Home/About/About";
export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Features />
      <About />
    </main>
  );
}
