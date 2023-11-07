
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
import Feedback from "@/Components/Feedback";
import Banner from "@/Home/Banner/Banner";
import Container from "@/Components/Container/Container";

import Subscribe from "@/Components/Subscribe/Subscribe";
import TeacherProfile from "@/Components/TeacherProfile/TeacherProfile";


export default function Home() {
  return (
    <div>
      <Container>
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

      <div className=" py-10">
        <Subscribe></Subscribe>
      </div>
<<<<<<< HEAD
      <TeacherProfile></TeacherProfile>
=======
      
>>>>>>> 34895640d78238a64d89731b70f6cdbf022b5333
      <div className="">
        <Feedback></Feedback>
      </div>


    </div>
  )
}
