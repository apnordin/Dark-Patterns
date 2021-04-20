import React from "react";

export default function Deduction () {

    return (
        <div className="col-12 text-center">
            <h1 className="taxbreak mb-5">Based on the information you've given us, the Standard Deduction is best for you</h1>
            <div className="row">
                <div className="col-6 bubble">
                    <div className="strdbubble">
                        <div className="bubble-text">
                            <p className="deduction-type mb-1">Standard Deduction</p>
                            <h2 className="">$24,400</h2>
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
        </div>
    )
}