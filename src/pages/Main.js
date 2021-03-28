import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Tutorial from "../components/Tutorial";
import Financial from "../components/Financial";
import ProductSelection from "../components/ProductSelection"

export default function Main () {

    const initialGoToTutorial = false;
    const intialGoToFinancial = false;
    const initialGoToProductSelection = false;
    const [goToTutorial, setGoToTutorial] = useState(initialGoToTutorial);
    const [goToFinancial, setGoToFinancial] = useState(intialGoToFinancial);
    const [goToProductSelection, setGoToProductSelection] = useState(initialGoToProductSelection);

    function MainPageContent( {setGoToTutorial, setGoToFinancial }) {
        if (goToTutorial === false && goToFinancial === false && goToProductSelection === false) {
            return <Welcome setGoToTutorial={setGoToTutorial} />

        } else if (goToTutorial === true) {
            return <Tutorial setGoToTutorial={setGoToTutorial} setGoToFinancial={setGoToFinancial} />

        } else if (goToFinancial === true) {
            return <Financial setGoToFinancial={setGoToFinancial} setGoToProductSelection={setGoToProductSelection} />

        } else if (goToProductSelection === true) {
            return <ProductSelection />
        }
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                   <MainPageContent setGoToTutorial={setGoToTutorial} setGoToFinancial={setGoToFinancial} setGoToProductSelection={setGoToProductSelection} />
                </div>
            </div>
            
        
        </div>
    )
}