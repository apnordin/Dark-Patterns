import React from "react";

export default function Welcome () {
    return (
        <div className="col-12 text-center">
            <h5 className="welcome-back">Welcome back, "valued" customer!</h5>
            <h2 className="savings">Last year, DarkPatterns Premier Live got you a total refund of</h2>
                <h1 className="dollardollar mt-3">
                    $3,158
                    <span className="dollardollarlabel">
                        TOTAL 2020 TAX REFUND
                    </span>
                </h1>
        </div>
    )
}