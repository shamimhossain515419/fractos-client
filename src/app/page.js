import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
<<<<<<< HEAD
=======
import ContactSection from "@/Components/Contact";


>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28


export default function Home() {
  return (
    <div>
      <Container>
<<<<<<< HEAD
        
          {/* Banner */}
           <Banner></Banner>

          <Premium></Premium>
          <CounterSection> </CounterSection>
    
=======
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

        {/* Banner */}

        <ContactSection></ContactSection>

        <Footer></Footer>
>>>>>>> 844786665bfc6fb3997765df005ee41a396bba28
      </Container>

    </div>
  )
}
