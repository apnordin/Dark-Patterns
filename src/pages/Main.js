import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Tutorial from "../components/Tutorial";
import Financial from "../components/Financial";

export default function Main () {

    const initialGoToTutorial = false;
    const intialGoToFinancial = false;
    const [goToTutorial, setGoToTutorial] = useState(initialGoToTutorial);
    const [goToFinancial, setGoToFinancial] = useState(intialGoToFinancial)

    function MainPageContent( {setGoToTutorial, setGoToFinancial }) {
        if (goToTutorial === false && goToFinancial === false) {
            return <Welcome setGoToTutorial={setGoToTutorial} />

        } else if (goToTutorial === true) {
            return <Tutorial setGoToTutorial={setGoToTutorial} setGoToFinancial={setGoToFinancial} />

        } else if (goToFinancial === true) {
            return <Financial />

        }
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                   <MainPageContent setGoToTutorial={setGoToTutorial} setGoToFinancial={setGoToFinancial}/>
                </div>
            </div>
            
        
        </div>
    )
}