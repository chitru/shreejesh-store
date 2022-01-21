import React from "react"
import * as BsIcons from "react-icons/bs";
import Button from "./button"

export default function Hero() {
    return (
        <div className="hero fw-container">
            <div className="text-content hero-content">
                <h2>Express yourself.</h2>
                <h3>Be You. Be Beautiful.</h3>
                <p>Explore our wide range of collection for any kind of occasion.</p>
                <Button 
                    buttonStyle="btn btn-outline"
                    buttonSize="btn-medium"
                >
                    EXPLORE <BsIcons.BsArrowRight/>
                </Button>
            </div>
            <div className="img-content hero-content">
                <div className="hero-one"><img src="/hero1.jpg" alt="hero" /></div>
                <div className="hero-two"><img src="/hero2.jpg" alt="hero" /></div>
                <div className="hero-three"><img src="/hero3.jpg" alt="hero" /></div>
            </div>
        </div>
    )
}
