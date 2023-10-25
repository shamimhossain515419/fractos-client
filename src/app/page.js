import Container from "@/Components/Container/Container";
import DashHome from "@/Components/Dashboard/DashHome";
import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";
import Banner from "./Home/Banner/Banner";
import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";
export default function Home() {
  return (
    <div>
      <Container>
        <Pricing></Pricing>
        <Footer></Footer>
        <Banner></Banner>
        <Premium></Premium>
        <CounterSection> </CounterSection>
        <DashHome></DashHome>
          

    
      </Container>

    </div>
  )
}
