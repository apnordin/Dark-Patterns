import React from "react";

export default function Tutorial ( {setGoToCircle, setGoToTutorial } ) {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">Instructions
            </h2>
            <div className="row">
                <div className="col-12 text-center lightblue mt-4">
                    <h5 className="maintexth5 mb-3">Follow the instructions on each page as if you were actually trying to use a tax-filing service. At the end of the simulation, we will review each dark pattern. You will be able to select which ones you noticed while participating and learn more about the ones you missed.</h5>
                </div>
                <div className="col-12 text-center">
                    <button onClick={() => {setGoToCircle(false); setGoToTutorial(false);}} type="button" className="btn btn-grey mr-1 mt-3">Go Back</button>
                    <button onClick={() => {setGoToCircle(true); setGoToTutorial(false);}} type="button" className="btn btn-main ml-1 mt-3">Start!</button>
                </div>
            </div>
        </div>
    )
}