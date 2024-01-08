import person1 from "../assets/people01.png";
import person2 from "../assets/people02.png";
import person3 from "../assets/people03.png";
import quotes from "../assets/quotes.svg";
import airbnbImg from "../assets/airbnb.png";
import coinBaseImg from "../assets/coinbase.png";
import dropboxImg from "../assets/dropbox.png";
import binanceImg from "../assets/binance.png";

const Testimonials = () => {
  return (
    <section>
      <div className="container mx-auto max-w-[1250px]">
        <header className="flow-content--m flex justify-between items-center flex-col md:flex-row md:gap-24 mb-24">
          <h2 className="text-4xl font-bold leading-normal">
            What people are saying about us
          </h2>
          <p className="text-primary">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </header>
        <div className="testimonial-wrapper grid lg:grid-cols-3 lg:gap-8 gap-4">
          <div className="testimonial-card flow-content--m p-4 rounded-xl duration-200 relative min-h-[225px] md:min-h-[250px] flex flex-col justify-center">
            <img
              src={quotes}
              alt=""
              className="w-[43px] h-[28px] absolute top-5 left-5"
            />
            <p>
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="person flex items-center gap-4">
              <div className="img-wrapper">
                <img
                  src={person1}
                  alt=""
                  className="w-[48px] h-[48px] rounded-full"
                />
              </div>
              <div className="person-info">
                <p className="font-bold text-white">Herman Jensen</p>
                <p className="text-primary text-xs">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card flow-content--m p-4 rounded-xl duration-200 relative min-h-[250px] flex flex-col justify-center p-4">
            <img
              src={quotes}
              alt=""
              className="w-[43px] h-[28px] absolute top-5 left-5"
            />
            <p>
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <div className="person flex items-center gap-4">
              <div className="img-wrapper">
                <img
                  src={person2}
                  alt=""
                  className="w-[48px] h-[48px] rounded-full"
                />
              </div>
              <div className="person-info">
                <p className="font-bold text-white">Steve Mark</p>
                <p className="text-primary text-xs">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card flow-content--m p-4 rounded-xl duration-200 relative min-h-[250px] flex flex-col justify-center p-4">
            <img
              src={quotes}
              alt=""
              className="w-[43px] h-[28px] absolute top-5 left-5"
            />
            <p>
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <div className="person flex items-center gap-4">
              <div className="img-wrapper">
                <img
                  src={person3}
                  alt=""
                  className="w-[48px] h-[48px] rounded-full"
                />
              </div>
              <div className="person-info">
                <p className="font-bold text-white">Herman Jensen</p>
                <p className="text-primary text-xs">Founder & Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div className="companies flex items-center gap-8 justify-center mt-8 flex-col md:flex-row">
          <img src={airbnbImg} alt="airbnb" className="max-w-[193px]" />
          <img src={binanceImg} alt="binance" className="max-w-[193px]" />
          <img src={coinBaseImg} alt="coinbase" className="max-w-[193px]" />
          <img src={dropboxImg} alt="dropbox" className="max-w-[193px]" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
