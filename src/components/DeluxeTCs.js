import React from "react";

export default function DeluxeTCs( { setGoToDeluxeTCs, setGoToCreditHelper }) {

    return (
        <div className="col-12 text-center">

            <h2 className="welcome-back">
                    Click Next to continue with DPTax Deluxe.
            </h2>
            <div className="row">
                <div className="col-12 text-left lightgrey mt-4">
                    <h5 className="my-3">
                        Why DPTax Deluxe?
                    </h5>
                    <p className="maintext">
                        By clicking Next, you are agreeing to upgrade to DPTax Deluxe in order to file your 2021 taxes. DPTax Deluxe covers <span className="boldtext">Literally Anything You Selected</span>, so you will need to upgrade in order to successfully file with the IRS.
                    </p>
                    <p className="maintext">
                        
                        You can proceed with DPTax Basic to prepare your taxes, but you will not be able to file. Which is kind of the point of this site, so pay up.
                    </p>
                    <p className="maintext pb-3">
                        Just click Next in order to keep filing! By doing so, you agree to DPTax's Terms and Services.
                    </p>
                </div>
                <div className="col-12 text-center">
                    <h3 className="mt-3 mb-1">Keep going to prepare your income:</h3>
                    <button onClick={() => {setGoToDeluxeTCs(false); setGoToCreditHelper(true)}} type="button" className="btn btn-main ml-1 mt-3">Next</button>
                </div>
            </div>
        </div>
    )
}