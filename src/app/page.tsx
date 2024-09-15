import Banner from "../components/Home/Banner/Banner";
import Services from "@/components/Home/Services/Services";
import Features from "@/components/Home/Features/Features";
import About from "@/components/Home/About/About";
import Portfolio from "@/components/ui/Portfolio/Portfolio";
import ServicesTab from "@/components/Home/Tabs/ServicesTab";
import Testimonials from "@/components/ui/Testimonial/Testimonials";
export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Features />
      <Portfolio />
      <ServicesTab />
      <About />
      <Testimonials />
    </main>
  );
}
