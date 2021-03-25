import React from "react";
import { HandThumbsDownFill, Award, DropletHalf } from "react-bootstrap-icons"; 

export default function Sidebar() {

    const portfolioClicked = () => {
        const url = "https://apnordin.github.io/";
        window.open(url, '_blank');
    }

    const gitHubClicked = () => {
        const url = "https://github.com/apnordin";
        window.open(url, '_blank');
    }

    return(
        <div className="sidenav">
            <span className="dot">
                <HandThumbsDownFill className="thumbBig" size={35} color="white" />
            </span>
            <div className="bannerlogo">
                <span className="dotsmall">
                    <span className="namelogo">darkpatterns
                    <HandThumbsDownFill className="thumbSmall" size={13} color="white" />
                    </span>
                </span>
            </div>
            <div className="blackspace"></div>
            <div className="affiliate">
                <span className="greendot">
                        <span className="affiliatelogo">
                            Buy This!
                            <Award className="awardSmall" size={14} color="white" />
                        </span>
                </span>
            </div>
            <div className="affiliate">
                <span className="bluedot">
                        <span className="affiliatelogo">
                            Buy This Too!
                            <DropletHalf className="dropletSmall" size={13} color="white" />
                        </span>
                </span>
            </div>
            <div className="sidenav-footer">
                <div className="footerbtn pl-3" onClick={portfolioClicked}>
                    My Portfolio
                </div>
                <div className="footerbtn pl-3" onClick={gitHubClicked}>
                    My GitHub
                </div>
            </div>
        </div>
    )
}