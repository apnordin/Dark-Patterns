import React from "react";

export default function Navbar() {
    return(
        <div className="sidenav">
            <span className="dot"></span>
            <div className="bannerlogo">
                <span className="dotsmall">
                    <span className="namelogo">darkpatterns</span>
                </span>
            </div>
            <div className="blackspace"></div>
            <div className="affiliate">
                <span className="greendot">
                        <span className="affiliatelogo">Buy This!</span>
                </span>
            </div>
            <div className="affiliate">
                <span className="bluedot">
                        <span className="affiliatelogo">Buy This Too!</span>
                </span>
            </div>
        </div>
    )
}