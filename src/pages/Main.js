import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import Tutorial from "../components/Tutorial";
import Financial from "../components/Financial";
import ProductSelection from "../components/ProductSelection"
import StartPage from "../components/StartPage";
import DeluxeTCs from "../components/DeluxeTCs";
import CircleLoaderSimStart from "../components/CircleLoaderSimStart";
import CircleLoaderFinToProd from "../components/CircleLoaderFinToProd";
import CreditHelper from "../components/CreditHelper";
import CHTerms from "../components/CHTerms";
import WAI from "../components/WAI";
import DCs from "../components/DCs";
import DeluxeUpgrade from "../components/DeluxeUpgrade";
import PremierUpgrade from "../components/PremierUpgrade";
import PremierTCs from "../components/PremierTCs";
import Deduction from "../components/Deduction";

export default function Main () {

    
    // All page renders start off as FALSE
    const [goToTutorial, setGoToTutorial] = useState(false);
    const [goToCircle, setGoToCircle] = useState(false);
    const [goToStart, setGoToStart] = useState(false);
    const [goToFinancial, setGoToFinancial] = useState(false);
    const [goToCLFTP, setGoToCLFTP] = useState(false)
    const [goToProductSelection, setGoToProductSelection] = useState(false);
    const [goToDeluxeTCs, setGoToDeluxeTCs] = useState(false);
    const [goToPremierTCs, setGoToPremierTCs] = useState(false);
    const [goToCreditHelper, setGoToCreditHelper] = useState(false);
    const [goToCHTerms, setGoToCHTerms] = useState(false);
    const [goToWAI, setGoToWAI] = useState(false);
    const [goToDCs, setGoToDCs] = useState(false);
    const [goToDeluxeUpgrade, setGoToDeluxeUpgrade] = useState(false);
    const [goToPremierUpgrade, setGoToPremierUpgrade] = useState(false);
    const [goToDeduction, setGoToDeduction] = useState(false);

    const [freeTier, setFreeTier] = useState(false);
    const [deluxeTier, setDeluxeTier] = useState(false);
    const [premierTier, setPremierTier] = useState(false);

    //Conditional rendering for main page
    function MainPageContent() {
        //If all page renders are false, go return the welcome page. If any goToPage is true, render that page
        if (
            goToTutorial === false
            && goToStart === false
            && goToFinancial === false
            && goToProductSelection === false
            && goToCircle === false
            && goToCLFTP === false
            && goToDeluxeTCs === false
            && goToPremierTCs === false
            && goToCreditHelper === false
            && goToCHTerms === false
            && goToWAI === false
            && goToDCs === false
            && goToDeluxeUpgrade === false
            && goToPremierUpgrade === false
            && goToDeduction === false
            ) {
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
            return <ProductSelection  setGoToProductSelection={setGoToProductSelection} setGoToCreditHelper={setGoToCreditHelper} setGoToDeluxeTCs={setGoToDeluxeTCs} setGoToPremierTCs={setGoToPremierTCs} setFreeTier={setFreeTier} setDeluxeTier={setDeluxeTier} setPremierTier={setPremierTier}/>

        } else if (goToDeluxeTCs === true) {
            return <DeluxeTCs setGoToDeluxeTCs={setGoToDeluxeTCs} setGoToCreditHelper={setGoToCreditHelper} />
        
        } else if (goToPremierTCs === true) {
            return <PremierTCs setGoToPremierTCs={setGoToPremierTCs} setGoToCreditHelper={setGoToCreditHelper} />
        
        } else if (goToCreditHelper === true) {
            return <CreditHelper setGoToCreditHelper={setGoToCreditHelper} setGoToCHTerms={setGoToCHTerms} />
        
        } else if (goToCHTerms === true) {
            return <CHTerms setGoToCHTerms={setGoToCHTerms} setGoToWAI={setGoToWAI} />

        } else if (goToWAI === true) {
            return <WAI setGoToWAI={setGoToWAI} setGoToDCs={setGoToDCs} />
        
        } else if (goToDCs === true) {
            return <DCs setGoToDCs={setGoToDCs} setGoToDeluxeUpgrade={setGoToDeluxeUpgrade} setGoToPremierUpgrade={setGoToPremierUpgrade} setGoToDeduction={setGoToDeduction} freeTier={freeTier} deluxeTier={deluxeTier} premierTier={premierTier} />
        
        } else if (goToDeluxeUpgrade === true) {
            return <DeluxeUpgrade setGoToDeluxeUpgrade={setGoToDeluxeUpgrade} setGoToDeduction={setGoToDeduction} setDeluxeTier={setDeluxeTier} />

        } else if (goToPremierUpgrade === true) {
            return <PremierUpgrade setGoToPremierUpgrade={setGoToDeluxeUpgrade} setGoToDeduction={setGoToDeduction} />

        } else if (goToDeduction === true) {
            return <Deduction />
        }
        
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                   <MainPageContent
                   setGoToTutorial={setGoToTutorial}
                   setGoToCircle={setGoToCircle}
                   setGoToStart={setGoToStart}
                   setGoToFinancial={setGoToFinancial}
                   setGoToProductSelection={setGoToProductSelection}
                   setGoToCLFTP={setGoToCLFTP}
                   setGoToDeluxeTCs={setGoToDeluxeTCs}
                   setGoToPremierTCs={setGoToPremierTCs}
                   setGoToCreditHelper={setGoToCreditHelper}
                   setGoToCHTerms={setGoToCHTerms}
                   setGoToWAI={setGoToWAI}
                   setGoToDCs={setGoToDCs}
                   setGoToDeluxeUpgrade={setGoToDeluxeUpgrade} 
                   setGoToPremierUpgrade={setGoToPremierUpgrade}
                   setGoToDeduction={setGoToDeduction}
                   setFreeTier={setFreeTier}
                   setDeluxeTier={setDeluxeTier}
                   setPremierTier={setPremierTier} />
                </div>
            </div>
            
        
        </div>
    )
}