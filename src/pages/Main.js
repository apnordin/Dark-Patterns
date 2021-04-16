import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Tutorial from "../components/Tutorial";
import Financial from "../components/Financial";
import ProductSelection from "../components/ProductSelection"
import StartPage from "../components/StartPage"
import DeluxeTCs from "../components/DeluxeTCs"
import CircleLoaderSimStart from "../components/CircleLoaderSimStart";
import CircleLoaderFinToProd from "../components/CircleLoaderFinToProd";
import CreditHelper from "../components/CreditHelper";
import CHTerms from "../components/CHTerms";
import WAI from "../components/WAI";
import DCs from "../components/DCs";

export default function Main () {

    const initialGoToTutorial = false;
    const initialGoToCircle = false;
    const initialGoToStart = false;
    const intialGoToFinancial = false;
    const initialGoToCLFTP = false;
    const initialGoToProductSelection = false;
    const initialGoToDeluxeTCs = false;
    const initialGoToCreditHelper = false;
    const initialGoToCHTerms = false;
    const initialGoToWAI = false;
    const initialGoToDCs = false;

    const [goToTutorial, setGoToTutorial] = useState(initialGoToTutorial);
    const [goToCircle, setGoToCircle] = useState(initialGoToCircle);
    const [goToStart, setGoToStart] = useState(initialGoToStart);
    const [goToFinancial, setGoToFinancial] = useState(intialGoToFinancial);
    const [goToCLFTP, setGoToCLFTP] = useState(initialGoToCLFTP)
    const [goToProductSelection, setGoToProductSelection] = useState(initialGoToProductSelection);
    const [goToDeluxeTCs, setGoToDeluxeTCs] = useState(initialGoToDeluxeTCs);
    const [goToCreditHelper, setGoToCreditHelper] = useState(initialGoToCreditHelper);
    const [goToCHTerms, setGoToCHTerms] = useState(initialGoToCHTerms);
    const [goToWAI, setGoToWAI] = useState(initialGoToWAI);
    const [goToDCs, setGoToDCs] = useState(initialGoToDCs);

    function MainPageContent( {setGoToTutorial, setGoToFinancial }) {
        if (goToTutorial === false && goToStart === false && goToFinancial === false && goToProductSelection === false && goToCircle === false && goToCLFTP === false && goToDeluxeTCs === false && goToCreditHelper === false && goToCHTerms === false && goToWAI === false && goToDCs === false) {
            return <Welcome setGoToTutorial={setGoToTutorial} />

        } else if (goToTutorial === true) {
            return <Tutorial setGoToTutorial={setGoToTutorial} setGoToCircle={setGoToCircle} />
        
        } else if (goToCircle === true) {
            return <CircleLoaderSimStart setGoToCircle={setGoToCircle} setGoToStart={setGoToStart} />
        
        } else if (goToStart === true) {
            return <StartPage setGoToStart={setGoToStart} setGoToFinancial={setGoToFinancial} />
        
        } else if (goToFinancial === true) {
            return <Financial setGoToFinancial={setGoToFinancial} setGoToCLFTP={setGoToCLFTP} />
        
        } else if (goToCLFTP === true) {
            return <CircleLoaderFinToProd setGoToCLFTP={setGoToCLFTP} setGoToProductSelection={setGoToProductSelection} />

        } else if (goToProductSelection === true) {
            return <ProductSelection  setGoToProductSelection={setGoToProductSelection} setGoToDeluxeTCs={setGoToDeluxeTCs}/>

        } else if (goToDeluxeTCs === true) {
            return <DeluxeTCs setGoToDeluxeTCs={setGoToDeluxeTCs} setGoToCreditHelper={setGoToCreditHelper} />

        } else if (goToCreditHelper === true) {
            return <CreditHelper setGoToCreditHelper={setGoToCreditHelper} setGoToCHTerms={setGoToCHTerms} />
        
        } else if (goToCHTerms === true) {
            return <CHTerms setGoToCHTerms={setGoToCHTerms} setGoToWAI={setGoToWAI} />

        } else if (goToWAI === true) {
            return <WAI setGoToWAI={setGoToWAI} setGoToDCs={setGoToDCs} />
        
        } else if (goToDCs === true) {
            return <DCs />
        }
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                   <MainPageContent setGoToTutorial={setGoToTutorial} setGoToCircle={setGoToCircle} setGoToStart={setGoToStart} setGoToFinancial={setGoToFinancial} setGoToProductSelection={setGoToProductSelection} setGoToCLFTP={setGoToCLFTP} setGoToDeluxeTCs={setGoToDeluxeTCs} setGoToCreditHelper={setGoToCreditHelper} setGoToCHTerms={setGoToCHTerms} setGoToWAI={setGoToWAI} setGoToDCs={setGoToDCs} />
                </div>
            </div>
            
        
        </div>
    )
}