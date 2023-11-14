'use client'
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import Feedback from "@/Components/Feedback";
import Banner from "@/Home/Banner/Banner";
import Container from "@/Components/Container/Container";

import Subscribe from "@/Components/Subscribe/Subscribe";
import PopularTeachers from "@/Components/PopularTeachers/PopularTeachers";
import MyClasses from "@/Components/MyAllClass/MyClasses";



export default function Home() {
  return (
    <div>
      <Container>
        <Banner></Banner>  
        <MyClasses></MyClasses>

        <div className=" my-3">
          <CounterSection> </CounterSection>
        </div>
        <div id="Pricing" className=" py-5">
          <Pricing></Pricing>
        </div>
        <div id="Premium" className=" py-5">
          <Premium></Premium>
        </div>
        <PopularTeachers></PopularTeachers>
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
