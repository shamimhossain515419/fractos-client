import Container from "@/Components/Container/Container";
import DashHome from "@/Components/Dashboard/DashHome";
import Footer from "@/Components/Footer/Footer";
import Pricing from "@/Components/Pricing/Pricing";


export default function Home() {
  return (
    <div>
      <Container>
        <Pricing></Pricing>
        <Footer></Footer>
        <DashHome></DashHome>
          

    
      </Container>

    </div>
  )
}
