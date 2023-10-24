import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
// import Premium from "@/Components/Archive/Archive";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
<<<<<<< HEAD
import Navbar from "@/Components/Navbar";
=======
import Archive from "@/Components/Archive/Archive";
>>>>>>> 740c6a143837c8fde29e5461cda43f7e2059030d



export default function Home() {
  return (
    <div>
      <Container>
      
          <Navbar></Navbar>
       
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
