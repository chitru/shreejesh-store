import React, { useState } from "react";
import ReactDOM from "react-dom";

import * as FaIcons from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

const logo = "/logo.png";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [smallMenuVisibility, setSmallMenuVisibility] = useState(false);

  const handleClick = (e) => {
    if(!visible) {
      setVisible(true);
    } else {
      setVisible(false)
    }
  }

  const handleBlur = (e) => {
    if(!e.currentTarget.contains(e.relatedTarget)) {
      setVisible(false);
    }
  }

  const toggle = () => {
    if (!smallMenuVisibility) {
      setSmallMenuVisibility(true);
    } else {
      setSmallMenuVisibility(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Shreejesh Boutique</title>
        <meta
          name="description"
          content="Beautiful lehenga, saari, and dresses for every occasion"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* Start of Navbar */}
        <div className="logo-menu-option">
          <div className="menu-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="menu-icon">
            <div onClick={toggle}>
              {smallMenuVisibility === false ? (
                <FaIcons.FaBars />
              ) : (
                <FaIcons.FaTimes />
              )}
            </div>
          </div>
          <div
            className={
              smallMenuVisibility === false
                ? "menu-items hide"
                : "menu-items show"
            }
          >
            <ul className="flat-menu">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li
                onClick={handleClick}
                onBlur={handleBlur}
              >
                <Link href="#">Mega Menu</Link>
                <div className={visible === false ? "hide" : "deep-menu show"}>
                  <ul>
                    <li>
                      <Link href="#">Menu 1</Link>
                    </li>
                    <li>
                      <Link href="#">Menu 2</Link>
                    </li>
                    <li>
                      <Link href="#">Menu 3</Link>
                    </li>
                    <li>
                      <Link href="#">Menu 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="#">Menu Item</Link>
              </li>
              <li>
                <Link href="#">Menu Item</Link>
              </li>
              <li>
                <Link href="#">Menu Item</Link>
              </li>
            </ul>
          </div>
          <div className="menu-option">
            <ul className="flat-menu">
              <li>
                <Link href="#" className="menu-bars menu-option-item">
                  {/* <input type="text" placeholder="Search" /> */}
                  <FaIcons.FaSearch />
                </Link>
              </li>
              <li>
                <Link href="#" className="menu-bars menu-option-item">
                  <FaIcons.FaShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Navbar */}
      </div>
    </div>
  );
}
