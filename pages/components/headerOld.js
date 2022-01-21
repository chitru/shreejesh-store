import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";

const logo = "/logo.png";

export default function HeaderOld() {
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
          <div className="menu-icon">
            <div onClick={toggle}>
              {smallMenuVisibility === false ? (
                <BsIcons.BsListNested />
              ) : (
                <BsIcons.BsXLg />
              )}
            </div>
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
                <Link href="#">
                  <a className="angle-down">Shop<BsIcons.BsChevronDown /></a>
                </Link>
                <div className={visible === true ? "hide" : "deep-menu show"}>
                  <ul>
                    <li>
                      <Link href="#">Women</Link>
                    </li>
                    <li>
                      <Link href="#">Men</Link>
                    </li>
                    <li>
                      <Link href="#">Kids</Link>
                    </li>
                    <li>
                      <Link href="#">Accessories</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="menu-option">
            <ul className="flat-menu">
              <li>
                <Link href="#" className="menu-bars menu-option-item">
                  {/* <input type="text" placeholder="Search" /> */}
                  <BsIcons.BsSearch />
                </Link>
              </li>
              <li>
                <Link href="#" className="menu-bars menu-option-item">
                  <BsIcons.BsCart />
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
