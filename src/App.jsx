import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HandleMoney from "./components/HandleMoney";
import ControlBilling from "./components/ControlBilling";
import BetterCard from "./components/BetterCard";
import Testimonials from "./components/Testimonials";
import TryItNow from "./components/TryItNow";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
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
