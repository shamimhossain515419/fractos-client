import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
<<<<<<< HEAD

import Banner from "./Home/Banner/Banner";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
=======
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import Banner from "@/Home/Banner/Banner";
import ExamModel from "@/Components/Shared/ExamModel";
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565





export default function Home() {
  return (
    <div>
      <Container>
<<<<<<< HEAD

        {/* Banner */}
        <Banner></Banner>

        <Premium></Premium>
      

      

=======
      
          <Navbar></Navbar>
       

        <Navbar></Navbar>
        
        <Banner></Banner>

        {/* exam question model */}
        <ExamModel exam="Physics 2nd Paper - (Dhaka Board 2019)" >  </ExamModel>
>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565

        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>
<<<<<<< HEAD

        {/* Banner */}

    
=======
        <div className="py-10">

        </div>


        {/* Banner */}

        <ContactSection></ContactSection>

>>>>>>> 3dfa3cbf910decad1ef01fe0b37418f4ca7d8565
        <Footer></Footer>
      </Container>

    </div>
  )
}
