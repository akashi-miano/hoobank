import cardImg from "../assets/card.png";

const BetterCard = () => {
  return (
    <section className="py-16" id="solution">
      <div className="container mx-auto max-w-[1250px] grid md:grid-cols-2 gap-4">
        <header className="flow-content--m">
          <h2 className="text-4xl font-bold leading-normal">
            Find a better card deal in few easy steps.
          </h2>
          <p className="text-primary">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>{" "}
          <a className="btn btn--primary" href="">
            Get Started
          </a>
        </header>
        <div className="img-wrapper order-[-1] md:order-[0] mb-4 md:mb-0">
          <img
            src={cardImg}
            alt=""
            className="mx-auto max-w-[513px] max-h-[449px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BetterCard;
