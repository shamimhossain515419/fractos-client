import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import ExamModel from "@/Components/Shared/ExamModel";
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
 







export default function Home() {
  return (
    <div>
      <Container>
      
          <Navbar></Navbar>
       

        <Navbar></Navbar>
        
        
        <BannerSwiper></BannerSwiper>
     

        {/* exam question model */}
        <ExamModel exam="Physics 2nd Paper - (Dhaka Board 2019)" >  </ExamModel>

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
      </Container>

    </div>
  )
}
