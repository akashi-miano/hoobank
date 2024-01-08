import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HandleMoney from "./components/HandleMoney";
import ControlBilling from "./components/ControlBilling";
import BetterCard from "./components/BetterCard";
import Testimonials from "./components/Testimonials";
import TryItNow from "./components/TryItNow";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <HandleMoney />
      <ControlBilling />
      <BetterCard />
      <Testimonials />
      <TryItNow />
      <Footer />
    </>
  );
}

export default App;
