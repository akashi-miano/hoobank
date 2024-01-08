import playStoreIcon from "../assets/google.svg";
import appStoreIcon from "../assets/apple.svg";
import sectionImg from "../assets/bill.png";

const ControlBilling = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[1250px] grid md:grid-cols-2 gap-4">
        <header
          className="flow-content--m"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          <h2 className="text-4xl font-bold leading-normal">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-primary">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="img-wrapper flex items-center  gap-4">
            <img src={playStoreIcon} alt="" />
            <img src={appStoreIcon} alt="" />
          </div>
        </header>
        <div
          className="img-wrapper order-[-1]"
          data-aos="fade-left"
          data-aos-offset="300"
        >
          <img
            src={sectionImg}
            alt=""
            className="mx-auto max-w-[530px] max-h-[455px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ControlBilling;
