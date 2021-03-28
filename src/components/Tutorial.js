import React from "react";

export default function Tutorial ( {setGoToFinancial, setGoToTutorial }) {
    return (
        <div className="col-12 text-center">
            <h5 className="welcome-back">Tutorial
            </h5>
            <button onClick={() => {setGoToFinancial(true); setGoToTutorial(false);}} type="button" className="btn btn-main mt-3">Start!</button>
        </div>
    )
}