import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const paypal = "/paypal.png";
  const mastercard = "/mc.png";
  const visa = "/visa.png";

  return (
    <div>
      <footer className="footer-dark">
        <div className="footer fw-container">
          <div className="logo-img">
            <img src="/logo1.png" alt="logo" />
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Shop</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Order</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Term and Condition</Link></li>
            </ul>
          </div>
          <div className="copyright">
            <h3>We Accept</h3>
            <ul>
              <li><Image src={paypal} width="100%" height="30%"/></li>
              <li><Image src={mastercard} width="50%" height="30%"/></li>
              <li><Image src={visa} width="80%" height="30%"/></li>
            </ul>
            <p>Design and Development schitru.com</p>
            <p>Copyright Shreejesh Boutique 2022. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
