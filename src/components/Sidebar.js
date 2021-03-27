import React, {useState} from "react";
import { HandThumbsDownFill } from "react-bootstrap-icons"; 

export default function Sidebar() {

    const portfolioClicked = () => {
        const url = "https://apnordin.github.io/";
        window.open(url, '_blank');
    }

    const gitHubClicked = () => {
        const url = "https://github.com/apnordin";
        window.open(url, '_blank');
    }

    const initialText = 'Credit Helper';
    const [text, setText] = useState(initialText);

    const initialText2 = 'Spearmint';
    const [text2, setText2] = useState(initialText2);

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
            <div className="affiliate"
                onMouseOver={() => setText('Buy This!')}
                onMouseLeave={() => setText(initialText)}>
                <span className="greendot">
                        <span
                        className="affiliatelogo">
                            {text}
                        </span>
                </span>
            </div>
            <div className="affiliate"
            onMouseOver={() => setText2('Buy This Too!')}
            onMouseLeave={() => setText2(initialText2)}>
                <span className="bluedot">
                        <span className="affiliatelogo">
                            {text2}
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