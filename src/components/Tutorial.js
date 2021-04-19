import React from "react";

export default function Tutorial ( {setGoToCircle, setGoToTutorial } ) {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">Instructions
            </h2>
            <div className="row">
                <div className="col-12 text-center lightblue mt-4">
                    <p className="maintext px-3 pt-2">Follow the instructions on each page as if you were actually trying to use a tax-filing service. Try to put yourself in the shoes of a user trying to file their taxes, rather than a web expert trying to scrutinize misleading design choices.</p>
                    <p className="maintext px-3">Please note that during the simulation, all disclaimers, fine print, requests for information is simply part of the exercise. Any forms you fill out or information you select is not recorded.</p>
                    <p className="maintext px-3">At the end of the simulation, we will review each dark pattern. You will be able to select which ones you noticed while participating and learn more about the ones you missed.</p>
                    
                </div>
                <div className="col-12 text-center">
                    <button onClick={() => {setGoToCircle(false); setGoToTutorial(false);}} type="button" className="btn btn-grey mr-1 mt-3">Go Back</button>
                    <button onClick={() => {setGoToCircle(true); setGoToTutorial(false);}} type="button" className="btn btn-main ml-1 mt-3">Start!</button>
                </div>
            </div>
        </div>
    )
}