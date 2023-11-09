'use client'
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import Feedback from "@/Components/Feedback";
import Banner from "@/Home/Banner/Banner";
import Container from "@/Components/Container/Container";

import Subscribe from "@/Components/Subscribe/Subscribe";
import PopularTeachers from "@/Components/PopularTeachers/PopularTeachers";



export default function Home() {
  return (
    <div>
      <Container>
        <Banner></Banner>
<<<<<<< HEAD
        <PopularTeachers></PopularTeachers>
        

=======
>>>>>>> 06dd76f0b39d6c1c89958ab95a1d844f42c97ec7

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

      <div className=" py-10">
        <Subscribe></Subscribe>
      </div>






      <div className="">
        <Feedback></Feedback>
      </div>


    </div>
  )
}
