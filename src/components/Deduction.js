import React from "react";

export default function Deduction ( {setGoToDeduction, setGoToLiveMax}) {

    return (
        <div className="col-12 text-center">
            <h1 className="deduction">Based on the information you've given us, the Standard Deduction is best for you</h1>
            <div className="row">
                <div className="col-6 bubble">
                    <div className="strdbubble">
                        <div className="bubble-text">
                            <p className="deduction-type mb-1">Standard Deduction</p>
                            <h2 className="">$12,400</h2>
                            <div className="linebreak mt-3"></div>
                            <p className="italicsmall mt-3">Federal refund with this deduction: $3,918</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 bubble">
                    <div className="itembubble">
                        <div className="bubble-text">
                            <p className="deduction-type mb-1">Itemized Deduction</p>
                            <h2 className="">$8,400</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 col-12 subtext beegbeegpadding">
                Since the Standard Deduction is a larger amount than your projected itemizations, it will lower your taxable income more and get you a bigger tax break. You don't need to enter information about any itemized deductions.
            </div>
            <div className="mt-4 col-12 subtext beegbeegpadding">
                    Next, we'll ask you about some additional tax breaks.
            </div>
            <button onClick={() => {setGoToDeduction(false); setGoToLiveMax(true);}} type="button" className="btn btn-main ml-1 mt-3">OK, sounds good</button>
        </div>
    )
}