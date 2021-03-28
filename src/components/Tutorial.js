import React from "react";

export default function Tutorial ( {setGoToFinancial, setGoToTutorial } ) {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">Instructions
            </h2>
            <div className="row">
                <div className="col-12 text-center lightblue mt-4">
                    <h5 className="maintexth5 mb-3">Follow the instructions on each page as if you were actually trying to use a tax-filing service. At the end of the simulation, we will review each dark pattern, and you will be able to select which ones you noticed while participating.</h5>
                </div>
                <div className="col-12 text-center">
                    <button onClick={() => {setGoToFinancial(false); setGoToTutorial(false);}} type="button" className="btn btn-grey mr-1 mt-3">Go Back</button>
                    <button onClick={() => {setGoToFinancial(true); setGoToTutorial(false);}} type="button" className="btn btn-main ml-1 mt-3">Start!</button>
                </div>
            </div>
        </div>
    )
}