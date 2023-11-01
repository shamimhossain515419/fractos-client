import Container from "@/Components/Container/Container";
import Pricing from "@/Components/Pricing/Pricing";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
<<<<<<< HEAD:src/app/page.js
import ContactSection from "@/Components/Contact";
import Navbar from "@/Components/Navbar";
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
<<<<<<< HEAD:src/app/(with-navbar)/page.js
=======
import Feedback from "@/Components/Feedback";
>>>>>>> 22b9ae36a400081132e451dcafb1de3ed514777f:src/app/page.js
// import Banner from "@/Home/Banner/Banner";







=======
import BannerSwiper from "@/Home/BannerSwiper/BannerSwiper";
import Feedback from "@/Components/Feedback";
import Subscribe from "@/Components/Subscribe/Subscribe";
>>>>>>> e2a8ea55485fb33725700b45c4f63fdaf23c4a43:src/app/(with-navbar)/page.js


export default function Home() {
  return (
    <div>
      <Container>


<<<<<<< HEAD:src/app/page.js
        {/* <Banner></Banner> */}
=======


>>>>>>> e2a8ea55485fb33725700b45c4f63fdaf23c4a43:src/app/(with-navbar)/page.js


        <BannerSwiper></BannerSwiper>


<<<<<<< HEAD:src/app/(with-navbar)/page.js
<<<<<<< HEAD:src/app/page.js


=======
>>>>>>> e2a8ea55485fb33725700b45c4f63fdaf23c4a43:src/app/(with-navbar)/page.js
=======
>>>>>>> 22b9ae36a400081132e451dcafb1de3ed514777f:src/app/page.js
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
