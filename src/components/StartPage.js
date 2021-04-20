import React from "react";

export default function StartPage ( {setGoToStart, setGoToFinancial }) {

    return (
        <div className="col-12 text-center">
            <h5 className="welcome-back">Welcome back, "valued" customer!
            </h5>
            <h2 className="savings">Last year, DarkPatterns Premier Live got you a total refund of
            </h2>
            <h1 className="dollardollar mt-3">
                $3,158
                <span className="dollardollarlabel">
                    TOTAL 2020 TAX REFUND
                </span>
            </h1>
            <div className="row">
                <div className="col-12 text-center lightblue mt-4">
                    <p className="maintext py-2">
                        DPTax is a <span className="bold">COMPLETELY FREE</span> tax preparation service to file taxes online. Easily file federal and state income tax returns with 100% accuracy to get your dividend. We offer the convenience of preparing and filing your tax return from virtually any computer or mobile device with Internet access at no charge.
                    </p>
                    <p className="maintext">
                        Armed with the best features and support, you are going to love filing with us!
                    </p>
                </div>
                <div className="col-12 text-center">
                    <h2 className="mt-4 mb-3">Just click below to begin filing!</h2>
                    <button onClick={() => {setGoToStart(false); setGoToFinancial(true);}} type="button" className="btn btn-main ml-1 mt-3">File for FREE!</button>
                </div>
            </div>
        </div>
    )
}