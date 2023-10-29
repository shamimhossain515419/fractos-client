import Container from "@/Components/Container/Container";

import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
<<<<<<< HEAD
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
// import Banner from "@/Home/Banner/Banner";
=======
import Banner from "@/Home/Banner/Banner";
>>>>>>> e35c20425cbd7d6c611fecea4c896ae2becea022









export default function Home() {
  return (
    <div>
      <Container>

        <Navbar></Navbar>

<<<<<<< HEAD
        {/* <Banner></Banner> */}


        <BannerSwiper></BannerSwiper>



=======
        <Banner></Banner>


        {/* <BannerSwiper></BannerSwiper> */}



>>>>>>> e35c20425cbd7d6c611fecea4c896ae2becea022

        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>


        <ContactSection></ContactSection>


        <Footer></Footer>
      </Container>

    </div>
  )
}
