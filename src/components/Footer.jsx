import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-screen mt-28 text-black border-t border-t-gray-300">
      <div className="container m-auto">
        <div className="py-7 columns-4">
          <div className="">
            {" "}
            <h2 className="mb-2 capitalize font-semibold">about us</h2>{" "}
            <ul>
              {" "}
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">our vision</a>
              </li>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">code of conduct</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 capitalize font-semibold">get in touch</h2>
            <ul>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">FAQs</a>
              </li>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">give us feedback</a>
              </li>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">contect us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-2 capitalize font-semibold">legal inquiries</h2>
            <ul>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">terms and condition</a>
              </li>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">privacy policy</a>
              </li>
              <li className="text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a href="">cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="classname">
            <h2 className="mb-2 capitalize font-semibold">connect with us</h2>
            <ul>
              <li className="flex items-center text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a className="flex items-center text-gray-700" href="">
                  <FaFacebookF className="display: inline mr-1" />
                </a>
                <a href="">facebook</a>
              </li>
              <li className="flex items-center text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a className="flex items-center text-gray-700" href="">
                  <FaTwitter className="display: inline mr-1" />
                </a>
                <a href="">twitter</a>
              </li>
              <li className="flex items-center text-sm text-gray-700 capitalize tracking-wider hover:text-black transition-all">
                <a className="flex items-center text-gray-700" href="">
                  <FaInstagram className="display: inline mr-1" />
                </a>
                <a href="">instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 border-t border-t-gray-300 text-gray-700">
          <p>© 2024 E-Learning / Cybersoft</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
