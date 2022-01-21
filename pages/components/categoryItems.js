import React from "react";
import Button from "./button";
import * as BsIcons from "react-icons/bs";
import Link from "next/link";

const catContent = [
    {
        id: 1,
        title: "Saree",
        image: "/saree.png",
    },
    {
        id: 2,
        title: "Jewelry",
        image: "/jewelry.png",
    },
    {
        id: 3,
        title: "Lehenga",
        image: "/lehenga.png",
    }
]
export default function CategoryItems() {
  return (
    <div>
      <div className="fw-container">
        <div className="category-wrapper">
          <div className="choose-us">
            <h3>Why Choose Us?</h3>
            <p>
              We are small business focused on customer satisfaction. We have
              dressed over 200 people in Shreejesh Boutique and counting more.
              Be the next one.{" "}
            </p>
            <Button buttonStyle="btn btn-outline" buttonSize="btn-medium">
              Shop Now <BsIcons.BsArrowRight />
            </Button>
            <h3>Find us on</h3>
            <div className="social-icons">
              <BsIcons.BsFacebook className="social-icon" />
              <BsIcons.BsInstagram className="social-icon" />
              <BsIcons.BsTwitter className="social-icon" />
            </div>
          </div>
          <div className="category-items">
            <h4 className="viewall"><Link href="#"><a>View All</a></Link></h4>
            <div className="category-item">
                <div className="item1">
                <Link href="#">
                    <a>
                    <img src={catContent[0].image} alt={catContent.title}/>
                    <h4>{catContent[0].title}</h4>
                    </a>
                </Link>
                </div>
                <div className="item2">
                <Link href="#">
                    <a>
                    <img src={catContent[1].image} alt={catContent.title}/>
                    <h4>{catContent[1].title}</h4>
                    </a>
                </Link>
                </div>
                <div className="item3">
                <Link href="#">
                    <a>
                    <img src={catContent[2].image} alt={catContent.title}/>
                    <h4>{catContent[2].title}</h4>
                    </a>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
