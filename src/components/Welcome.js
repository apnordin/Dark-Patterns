import React, { useState, useEffect } from "react";

export default function Welcome ( {setGoToTutorial }) {

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
                    <h3 className="boldheader mt-4">What are dark patterns?</h3>
                    <h5 className="maintexth5">Dark patterns are UI design "strategies" used in websites and apps that trick the user into doing things they didn't mean to, such as purchasing a product or subscribing to a service. Visit DarkPatterns for more info, including explanations of different types of dark patterns and a "hall of shame" featuring real-life examples.</h5>
                    <h3 className="boldheader mt-4">What is this website?</h3>
                    <h5 className="maintexth5 mb-3">When it comes to design principles, screenshots and explanations can only take you so far. I wanted to build a website that would provide a realistic simulation of a user interface riddled with dark patterns. You may notice that the layout and user experience of this website is similar to that of a popular and intuitive tax-filing service, which many have pointed to as an example of a website that unrelentingly uses dark patterns. Most of the dark patterns you will encounter on this simulation are pulled directly from my experience using that service.</h5>
                </div>
                <div className="col-12 text-center">
                <button onClick={() => setGoToTutorial(true)} type="button" className="btn btn-main mt-3">Click Here to get Started!</button>
            </div>
            </div>
        </div>
    )
}