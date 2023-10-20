import Container from "@/Components/Container/Container";
import Banner from "./Home/Banner/Banner";


import Premium from "@/Components/Premium/Premium";
import CounterSection from "@/Components/CounterSection/CounterSection";


export default function Home() {
  return (
    <div>
      <Container>
        
          {/* Banner */}
           <Banner></Banner>

          <Premium></Premium>
          <CounterSection> </CounterSection>
    
      </Container>

    </div>
  )
}
