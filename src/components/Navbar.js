import React from "react";
import searchicon from "../assets/searchicon.jpg"
import helpicon from "../assets/helpicon.jpg"

export default function Navbar() {
    return(
        <nav className="navbar justify-content-between">
            <span></span>
            <form className="form-inline my-2 my-lg-0">
                <button className="btn mr-2 navbutton" type="submit">
                    <img className="searchicon mr-2" alt="searchicon" src={searchicon}></img>
                    Search
                </button>
                <button className="btn mr-5 navbutton" type="submit">
                    <img className="helpicon mr-2" alt="helplicon" src={helpicon}></img>
                    Help
                </button>
            </form>
        </nav>
    )
}