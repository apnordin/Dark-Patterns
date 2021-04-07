import React from "react";
import checkedfilesicon from "../assets/checkedfiles.png";

export default function CreditHelper( { setGoToCreditHelper, setGoToCHTerms } ) {

    return (
        <div className="col-12 blankwhite">
            <p className="subtext mt-4"> 1 of 2</p>
            <h4>Sign now, save time and improve your score</h4>
            <img className="filesicon mt-4" style={{height: "125px"}} alt="filesicon" src={checkedfilesicon}></img>
            <p className="maintext mt-4">By sharing your tax info with your Umbrella account (Umbrella is the company behind DPTax), you can save time and effort.</p>
            <p className="maintext">With your OK, you can get personalized analysis, strategies, and offers to help you save and manage your money beyond tax prep. This includes things like tracking your refund, giving you personalized financial advice, refinancing your loans, and improving your credit. The hard work will be done for you without you having to re-enter this data.</p>
            <p className="maintext">Learn More</p>
            <hr className="mt-4 mb-0" />
            <div className="text-right">
                <button onClick={() => {setGoToCreditHelper(false); setGoToCHTerms(true)}} type="button" className="btn btn-main ml-1 mt-3">Continue</button>
            </div>
        </div>
    )
}