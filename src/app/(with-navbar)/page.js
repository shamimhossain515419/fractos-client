import Container from "@/Components/Container/Container";


import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import ContactSection from "@/Components/Contact";

import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
import Feedback from "@/Components/Feedback";
import Subscribe from "@/Components/Subscribe/Subscribe";



export default function Home() {
  return (
    <div>
      <Container>






        <BannerSwiper></BannerSwiper>


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

    </div>
  )
}
