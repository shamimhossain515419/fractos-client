import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
// import Premium from "@/Components/Archive/Archive";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Archive from "@/Components/Archive/Archive";



export default function Home() {
  return (
    <div>
      <Container>
        <Banner></Banner>


        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>
        <div className="py-10">
          {/* <Archive></Archive> */}
        </div>
        


        {/* Banner */}

        <ContactSection></ContactSection>

        <Footer></Footer>
      </Container>

    </div>
  )
}
