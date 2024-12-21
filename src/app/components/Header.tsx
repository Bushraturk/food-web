import React from "react";


import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-10 mt-0 flex items-center justify-between px-8">
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link
              href="#home"
              className="hover:text-green-500 cursor-pointer text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-green-500 cursor-pointer text-lg font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-green-500 cursor-pointer text-lg font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

