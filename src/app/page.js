import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

import Banner from "./Home/Banner/Banner";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";





export default function Home() {
  return (
    <div>
      <Container>

        {/* Banner */}
        <Banner></Banner>

        <Premium></Premium>
      

      


        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>

        {/* Banner */}

    
        <Footer></Footer>
      </Container>

    </div>
  )
}
