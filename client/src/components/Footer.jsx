import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoGold, paymentLogo } from "../assets";

function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20 px-10 font-titleFont">
      <div className="grid grid-cols-4 max-w-screen-xl mx-auto">
        {/* =========== LogoIcon Start Here ============= */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoGold} alt="logo" />
          <p className="text-white text-sm tracking-wide">@ ReactDB.com</p>
          <img className="w-56" src={paymentLogo} alt="" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* =========== LogoIcon End Here ============= */}
        {/* =========== Locate Us Start Here ============= */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Kouma 1, Larisa, Greece</p>
            <p>Mobile: 0030 6999 555555</p>
            <p>Phone: 0030 2410 555555</p>
            <p>Email: bazzar@bazzar.com</p>
          </div>
        </div>
        {/* =========== LocateUs End Here ============= */}
        {/* =========== Profile Start Here ============= */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & Support
            </p>
          </div>
        </div>
        {/* =========== Profile End Here ============= */}
        {/* =========== Subscribe Start Here ============= */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/* =========== Subscribe End Here ============= */}
      </div>
    </div>
  );
}

export default Footer;
