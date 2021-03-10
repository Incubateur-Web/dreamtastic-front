import React from "react";
import logo from "../../assets/images/dreamtastic.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-center text-gray-900 border-t border-gray-300 pt-8 border-opacity-75 md:mx-20 lg:mx-40">
      <Link to="/" className="my-auto">
        <img src={logo} alt="logo" width="150" height="75" className="mr-10" />
      </Link>
      <Link to="/" className="my-auto hover:underline mx-4">
        Politique de confidentialité
      </Link>
      <Link
        to="https://www.instagram.com/_dreamtastic_/"
        target="_blank"
        className="my-auto mx-3 hover:text-main transition duration-200"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
      <Link
        to="https://twitter.com/_dreamtastic_"
        target="_blank"
        className="my-auto mx-3 hover:text-main transition duration-200"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
      <Link
        to="/"
        className="my-auto mx-3 hover:text-main transition duration-200"
      >
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </Link>
    </div>
  );
}
