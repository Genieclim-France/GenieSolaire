"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col font-bold">
        {/* Navbar */}
        <div className="navbar w-full flex gap-4 p-4">
          <Link href="/" className="mx-2 flex-1 px-2">
            <Image src={logo} alt="logo" width={200} className="lg:w-[300px]" />
          </Link>
          <div className="flex-none lg:hidden">
            <a
              href="tel:+33972121401"
              className="btn btn-circle bg-primary hover:bg-hover text-white"
            >
              <FaPhoneVolume className="text-xl" />
            </a>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-circle bg-secondary hover:bg-hover text-white"
            >
              <Menu className="text-xl" />
            </label>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu flex items-center gap-8 menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a
                  href="#nos-solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("nos-solutions");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="font-emOne hover:text-hover focus-visible:outline-primary uppercase"
                >
                  Nos solutions
                </a>
              </li>
              <li
                className="font-emOne hover:text-hover focus-visible:outline-primary"
                tabIndex={0}
              >
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById("contact-form");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <FaMapLocationDot className="text-2xl text-hover focus-visible:outline-primary" />
                  OÙ NOUS TROUVER
                </a>
              </li>
              <li>
                <a
                  href="tel:+33972121401"
                  className="btn rounded-full bg-primary hover:bg-hover text-white flex items-center gap-2"
                >
                  <FaPhoneVolume className="text-xl" />
                  09 72 12 14 01
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu bg-base-200 min-h-full w-80 p-4 gap-4 font-bold"
          onFocus={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {/* Sidebar content here */}
          <li>
            <Link href="/" onClick={closeDrawer}>
              <Image src={logo} alt="logo" width={200} />
            </Link>
          </li>
          <li>
            <a
              href="#nos-solutions"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                closeDrawer();
                const target = document.getElementById("nos-solutions");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-emOne hover:text-hover focus-visible:outline-primary uppercase"
            >
              NOS SOLUTION SOLAIRE
            </a>
          </li>
          <li>
            <a
              href="#contact-form"
              className="font-emOne hover:text-hover focus-visible:outline-primary uppercase"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                closeDrawer();
                const target = document.getElementById("contact-form");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
