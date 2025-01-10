import React from "react";
import Container from "./Container";
import { TbMinusVertical } from "react-icons/tb";
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const footerList = [
    { _id: 131, title: "Support", link: "#", icon: true },
    { _id: 132, title: "Contact Us", link: "#", icon: true },
    { _id: 133, title: "Disclaimer", link: "#", icon: true },
    { _id: 134, title: "Privacy Policy", link: "#" },
  ];

  return (
    <div className="w-full bg-gray-800 mt-20 py-10 text-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10 text-sm">
          {/* Copyright Text */}
          <p className="font-medium text-gray-400">© Copyrights Creative Studio</p>

          {/* Footer Links */}
          <ul className="flex items-center gap-6">
            {footerList.map((item) => (
              <li
                key={item._id}
                className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-all duration-300"
              >
                {item.title}
                {item.icon && <TbMinusVertical className="text-xl" />}
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 text-gray-300">
            <FaGithub className="text-2xl hover:text-primeColor cursor-pointer transition-all duration-300" />
            <FaYoutube className="text-2xl hover:text-primeColor cursor-pointer transition-all duration-300" />
            <FaLinkedinIn className="text-2xl hover:text-primeColor cursor-pointer transition-all duration-300" />
            <FaFacebookF className="text-2xl hover:text-primeColor cursor-pointer transition-all duration-300" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
