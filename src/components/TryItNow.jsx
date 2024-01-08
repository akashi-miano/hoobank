import React from "react";

const TryItNow = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[1250px]">
        <div className="content grid md:grid-cols-2 rounded-lg tryItNowBg p-8">
          <header className="flow-content--m">
            <h2 className="text-4xl font-bold text-white leading-normal">
              Let’s try our service now!
            </h2>
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </header>
          <a
            href=""
            className="btn btn--primary self-center w-fit md:justify-self-center mt-4 md:mt-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryItNow;
