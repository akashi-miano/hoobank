import starIcon from "../assets/Star.svg";
import shieldIcon from "../assets/Shield.svg";
import sendIcon from "../assets/Send.svg";

const HandleMoney = () => {
  return (
    <section className="py-16" id="feature">
      <div className="container max-w-[1250px] mx-auto grid md:grid-cols-2 gap-4">
        <header
          className="flow-content--m mb-4 md:mb-0"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          <h2 className="text-4xl font-bold leading-normal">
            You do the business,
            <br />
            we’ll handle the money.
          </h2>
          <p className="text-primary">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <a className="btn btn--primary" href="">
            Get Started
          </a>
        </header>
        <div
          className="cards-wrapper flow-content--m"
          data-aos="fade-left"
          data-aos-offset="300"
        >
          <div className="card flex items-center gap-4 p-4 rounded-[20px] duration-300 cursor-pointer">
            <img
              src={starIcon}
              alt="star icon"
              className="w-[64px] h-[64px] rounded-full block bg-[#222] p-[10px] object-contain"
            />
            <header className="flow-content--s">
              <h3 className="font-bold text-xl">Rewards</h3>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </header>
          </div>
          <div className="card flex items-center gap-4 p-4 rounded-[20px] duration-300 cursor-pointer">
            <img
              src={shieldIcon}
              alt="star icon"
              className="w-[64px] h-[64px] rounded-full block bg-[#222] p-[15px] object-contain"
            />
            <header className="flow-content--s">
              <h3 className="font-bold text-xl">100% Secured</h3>
              <p>
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </header>
          </div>
          <div className="card flex items-center gap-4 p-4 rounded-[20px] duration-300 cursor-pointer">
            <img
              src={sendIcon}
              alt="star icon"
              className="w-[64px] h-[64px] rounded-full block bg-[#222] p-[15px] object-contain"
            />
            <header className="flow-content--s">
              <h3 className="font-bold text-xl">Balance Transfer</h3>
              <p>
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandleMoney;
