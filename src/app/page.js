import Container from "@/Components/Container/Container";
<<<<<<< HEAD
import DashHome from "@/Components/Dashboard/DashHome";
import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Banner from "./Home/Banner/Banner";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
=======

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";



>>>>>>> fe7f9ea30e5ac0312316dc250c7266e7e21e3104
export default function Home() {
  return (
    <div>
      <Container>
<<<<<<< HEAD
        <Pricing></Pricing>
        <Footer></Footer>
        <Banner></Banner>
        <Premium></Premium>
        <CounterSection> </CounterSection>
        <DashHome></DashHome>
          

    
=======
      
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
         
        </div>
        


        {/* Banner */}

        <ContactSection></ContactSection>

        <Footer></Footer>
>>>>>>> fe7f9ea30e5ac0312316dc250c7266e7e21e3104
      </Container>

    </div>
  )
}
