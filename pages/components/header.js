import React, { useState } from "react"
import * as BsIcons from "react-icons/bs"
import Link from "next/link"

export default function Header() {
    const [smallMenuVisibility, setSmallMenuVisibility] = useState(false);
    const [search,setSearch] = useState(false);

    const toggleIconVisibility = () => {
        setSmallMenuVisibility(!smallMenuVisibility);
    }

    const toggleSearch = () => {
        setSearch(!search);
    }

    // const handleBlur = (e) => {
    //     if(!e.currentTarget.contains(e.relatedTarget)){
    //         setVisible(false);
    //     }
    // }

    return (
        <div className="fw-container">
            <div className="header-wrapper">
                <div className="menu-wrapper">
                    <div className="toggle-menu" onClick={toggleIconVisibility}>
                        {smallMenuVisibility === false ? (
                            <BsIcons.BsListNested />
                        ) : (
                            <BsIcons.BsXLg />
                        )}
                    {
                        smallMenuVisibility === false ? (
                            <>
                            {/* <div className="menu-content">
                                <ul>
                                    <li><Link href="#"><a>All</a></Link></li>
                                    <li><Link href="#"><a>Women</a></Link></li>
                                    <li><Link href="#"><a>Men</a></Link></li>
                                    <li><Link href="#"><a>Kids</a></Link></li>
                                </ul>
                            </div> */}
                            </>
                            ) : (
                            <div className="menu-content">
                                <ul>
                                    <li><Link href="#"><a>All</a></Link></li>
                                    <li><Link href="#"><a>Women</a></Link></li>
                                    <li><Link href="#"><a>Men</a></Link></li>
                                    <li><Link href="#"><a>Kids</a></Link></li>
                                    <li><Link href="#"><a>Jewelry</a></Link></li>
                                </ul>
                            </div>
                        )
                    }
                    </div>
                    <div className="logo-holder">
                        <img src="/logo.png" alt="logo"/>
                    </div>
                </div>
                <div className="menu-large">
                    <ul>
                        <li><Link href="#"><a>All </a></Link></li>
                        <li><Link href="#"><a>Women</a></Link></li>
                        <li><Link href="#"><a>Men</a></Link></li>
                        <li><Link href="#"><a>Kids</a></Link></li>
                        <li><Link href="#"><a>Jewelry</a></Link></li>
                    </ul>
                </div>
                <div className="search-cart">
                    <div 
                        onClick={toggleSearch}
                        // onBlur={handleBlur}
                    ><BsIcons.BsSearch /></div>
                    <BsIcons.BsCart />
                    {
                        search == false ? (
                            <>
                            </>
                        ) : (
                    <div className="search-bar">
                       <BsIcons.BsSearch /> <input type="text" placeholder="Search products"/> <BsIcons.BsXLg onClick={toggleSearch}/>
                    </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}
