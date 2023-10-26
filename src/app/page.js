import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import UserProfile from "@/Components/UserProfile/UserProfile";
import Banner from "@/Home/Banner/Banner";




export default function Home() {
  return (
    <div>
      <Container>

        <Navbar></Navbar>

        <Banner></Banner>

        {/* exam question model */}
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
          <UserProfile></UserProfile>
        </div>
        


        {/* Banner */}

        <ContactSection></ContactSection>

        <Footer></Footer>
      </Container>

    </div>
  )
}
