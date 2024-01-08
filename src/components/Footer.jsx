import logoImg from "../assets/logo.svg";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#0B0A0C99] text-white p-8"
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-delay="600"
    >
      <div className="container max-w-[1250px] mx-auto ">
        <div className="main-wrapper grid md:grid-cols-4 gap-8 justify-center md:justify-start text-center md:text-left">
          <div className="logo-section">
            <img
              src={logoImg}
              alt="logo"
              className="w-[266px] object-contain block mb-4 mx-auto md:mx-0"
            />
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
          <ul className="flex flex-col gap-2">
            <header className="mb-2">
              <h3 className="font-bold text-xl">Usefull Links</h3>
            </header>
            <li>
              <a href="" className="footer__link">
                Content
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                How it Works
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Create
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Explore
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Terms & Services
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <header className="mb-2">
              <h3 className="font-bold text-xl">Community</h3>
            </header>
            <li>
              <a href="" className="footer__link">
                Help Center
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Help Center
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Partners
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Suggestions
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Newsletters
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <header className="mb-2">
              <h3 className="font-bold text-xl">Partner</h3>
            </header>
            <li>
              <a href="" className="footer__link">
                Our Partner
              </a>
            </li>
            <li>
              <a href="" className="footer__link">
                Become a Partner
              </a>
            </li>
          </ul>
        </div>
        <hr className="border-t border-[#3F3E45] my-8" />
        <div className="footer__socials flex  justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
          <p className="text-primary text-center md:text-left">
            Copyright &copy; 2021 HooBank. All Rights Reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a
                className="footer__social-link hover:text-cyan-500 duration-300"
                href=""
              >
                <FaInstagram size={25} />
              </a>
            </li>
            <li>
              <a
                className="footer__social-link hover:text-cyan-500 duration-300"
                href=""
              >
                <FaFacebook size={25} />
              </a>
            </li>
            <li>
              <a
                className="footer__social-link hover:text-cyan-500 duration-300"
                href=""
              >
                <FaTwitter size={25} />
              </a>
            </li>
            <li>
              <a
                className="footer__social-link hover:text-cyan-500 duration-300"
                href=""
              >
                <FaLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
