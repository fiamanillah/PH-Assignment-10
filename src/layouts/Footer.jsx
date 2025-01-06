import Section from "../components/Section";
import { useTheme } from "../context/ThemeContext";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <Section>
      <div className="flex mobile-lg:flex-col mobile-lg:items-center justify-between border-t-2 pt-10 rounded-t-[50px] mt-5 mobile-lg:gap-5">
        <div className="basis-1/3 flex flex-col gap-3 items-start mobile-lg:items-center">
          <img
            className="h-12"
            src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
            alt=""
          />
          <div className="mobile-lg:text-center">
            <h4>Contact Us</h4>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Demo Street, WebCity, WC 45678</p>
          </div>
          <div className="flex gap-3">
            <a href="#">
              <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                <FaFacebookF />
              </button>
            </a>
            <a href="#">
              <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                <FaInstagram />
              </button>
            </a>
            <a href="#">
              <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                <FaXTwitter />
              </button>
            </a>
            <a href="#">
              <button className="bg-primary text-2xl p-2 rounded-full text-darkPrimaryText border-2 hover:bg-darkPrimaryText hover:text-primary border-darkCardSecondary duration-200">
                <FaLinkedinIn />
              </button>
            </a>
          </div>
        </div>
        <ul className="basis-1/3 flex flex-col items-center justify-center">
          <strong>Company</strong>
          <Link to={"/"}>Home</Link>
          <Link to={"/all-products"}>Products</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <div className="basis-1/3 mobile-lg:flex mobile-lg:justify-center">
          <img
            className=" bg-lightCard dark:bg-darkCard rounded-xl w-[80%]"
            src="/payments.png"
            alt=""
          />
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center my-4">
        @2024 Equisports | All Rights Reserved.
      </p>
    </Section>
  );
}
