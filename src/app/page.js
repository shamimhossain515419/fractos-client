import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";

// import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";

// import Archive from "@/Components/Archive/Archive";

import UserProfile from "@/Components/UserProfile/UserProfile";
import Banner from "@/Home/Banner/Banner";




export default function Home() {
  return (
    <div>
      <Container>
<<<<<<< HEAD

        <Navbar></Navbar>

        <Banner></Banner>

        {/* exam question model */}
=======
        <Banner></Banner>


>>>>>>> a7a19c30b42885f45144dc3112784c813d3946fc
        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>
        {/* <div className="py-10">
          <Archive></Archive>
        </div> */}
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
