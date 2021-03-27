import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";

export default function Main () {

    const initialGetStartedClicked = false;
    const [getStartedClicked, setGetStartedClicked] = useState(initialGetStartedClicked);

    function MainPageContent() {
        if (getStartedClicked === false) {
            return <Welcome />
        } else {
            return (
                <div>heyyyy</div>
            )
        }
    }


    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                   <MainPageContent />
                </div>
            </div>
            <div className="col-12 text-center">
                <button onClick={() => setGetStartedClicked(true)} type="button" className="btn btn-main mt-3">Click Here to get Started!</button>
            </div>
        
        </div>
    )
}