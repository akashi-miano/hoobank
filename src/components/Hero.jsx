import heroImg from "../assets/robot.png";
import arrow from "../assets/arrow-up.svg";
import startedImg from "../assets/started.png";
import CounterUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Hero = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="hero py-16 md:py-0" id="about">
      <div className="container mx-auto max-w-[1250px] grid md:grid-cols-2 items-center">
        <header className="mb-8 hero__header flow-content--m md:text-left md:mb-0 hero__header relative before:hidden before:lg:block">
          <span className="hero__description">
            <span className="text-white hero__discount-amount">20%</span>{" "}
            DISCOUNT FOR{" "}
            <time className="text-white hero__discount-time">1 MONTH</time>{" "}
            ACCOUNT
          </span>
          <h1 className="text-6xl font-semibold leading-snug text-white">
            The Next
            <br />
            <span className="special">
              Generation
              <br />
            </span>
            Payment Method.
          </h1>
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </header>
        <div className="hero__img-wrapper">
          <img src={heroImg} alt="" className="w-full lg:w-[85%]" />
        </div>
      </div>
      <div className="hero__features flex flex-col md:flex-row md:items-center justify-center md:justify-between max-w-[1250px] mx-auto container !py-16 gap-8 md:gap-4 text-center">
        <p className="flex items-center gap-4 max-w-[450px] after:content-[''] relative after:h-[14px] after:w-[3px] after:bg-cyan-400 after:hidden after:md:block">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl font-bold">
              {counterOn && <CounterUp start={0} end={3800} duration={2} />}+
            </span>
          </ScrollTrigger>
          <span className="special inline-block mr-8">USER ACTIVE</span>
        </p>
        <p className="flex items-center gap-4 max-w-[450px] after:content-[''] after:h-[14px] after:w-[3px] after:bg-cyan-400  after:hidden after:lg:block">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl font-bold">
              {counterOn && <CounterUp start={0} end={230} duration={2} />}+
            </span>
          </ScrollTrigger>
          <span className="special inline-block mr-8">TRUSTED BY COMPANY</span>
        </p>
        <p className="flex items-center gap-4 max-w-[450px]">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <span className="text-3xl font-bold">
              ${counterOn && <CounterUp start={0} end={230} duration={2} />}
              M+
            </span>
          </ScrollTrigger>
          <span className="special">TRANSACTION</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
