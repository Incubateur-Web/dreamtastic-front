/* eslint-disable react/jsx-no-target-blank */
import logo from "../../assets/images/dreamtastic.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import logoShort from "../../assets/images/logo_short.png";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between text-gray-900 border-t border-gray-300 py-8 border-opacity-75 md:mx-20 lg:mx-40 flex-shrink-0">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="150"
          height="75"
          className="hidden md:flex mr-1 md:mr-10"
        />
        <img
          src={logoShort}
          alt="logoShort"
          width="50"
          className="flex md:hidden md-1 md:mr-10"
        />
      </Link>

      <Link to="/" className="my-auto hover:underline mx-1 md:mx-4">
        Politique de confidentialité
      </Link>
      <div className="flex">
        <a
          href="https://www.instagram.com/_dreamtastic_/"
          target="_blank"
          className="my-auto mx-1 md:mx-3 hover:text-main transition duration-200"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://twitter.com/_dreamtastic_"
          target="_blank"
          className="my-auto mx-1 md:mx-3 hover:text-main transition duration-200"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <Link
          to="/"
          className="my-auto mx-1 md:mx-3 hover:text-main transition duration-200"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </Link>
      </div>
    </div>
  );
}
