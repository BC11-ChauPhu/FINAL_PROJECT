import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-screen border-t border-t-gray-300 text-black">
      <div className="container m-auto">
        <div className="columns-4 py-7">
          <div className="">
            {" "}
            <h2 className="mb-2 font-semibold capitalize">about us</h2>{" "}
            <ul>
              {" "}
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">our vision</a>
              </li>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">code of conduct</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 font-semibold capitalize">get in touch</h2>
            <ul>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">FAQs</a>
              </li>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">give us feedback</a>
              </li>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">contect us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 font-semibold capitalize">legal inquiries</h2>
            <ul>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">terms and condition</a>
              </li>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">privacy policy</a>
              </li>
              <li className="text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a href="">cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="classname">
            <h2 className="mb-2 font-semibold capitalize">connect with us</h2>
            <ul>
              <li className="flex items-center text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a className="flex items-center text-gray-700" href="">
                  <FaFacebookF className="display: mr-1 inline" />
                </a>
                <a href="">facebook</a>
              </li>
              <li className="flex items-center text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a className="flex items-center text-gray-700" href="">
                  <FaTwitter className="display: mr-1 inline" />
                </a>
                <a href="">twitter</a>
              </li>
              <li className="flex items-center text-sm capitalize tracking-wider text-gray-700 transition-all hover:text-black">
                <a className="flex items-center text-gray-700" href="">
                  <FaInstagram className="display: mr-1 inline" />
                </a>
                <a href="">instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-t-gray-300 py-3 text-gray-700">
          <p>© 2024 E-Learning / Cybersoft</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
