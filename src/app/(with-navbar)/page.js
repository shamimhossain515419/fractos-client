import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import Feedback from "@/Components/Feedback";
import Banner from "@/Home/Banner/Banner";
import Container from "@/Components/Container/Container";



import Subscribe from "@/Components/Subscribe/Subscribe";
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
import SearchBar from "@/Components/SearchBar/SearchBar";


export default function Home() {
  return (
    <div>
      <Container>

        <Navbar></Navbar>

        <Banner></Banner>


        {/* <BannerSwiper></BannerSwiper> */}


        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div className=" py-5">
          <Pricing></Pricing>
        </div>
        <div className=" py-5">
          <Premium></Premium>
        </div>
      </Container>

      <Subscribe></Subscribe>
      <div className="">
        <Feedback></Feedback>
      </div>

      <SearchBar></SearchBar>

    </div>
  )
}
