import React from "react";
import { Truck } from "react-bootstrap-icons";

export default function Financial () {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">Let's get an idea of your financial picture
            </h2>
            <h5 className="subheader">Select anything that applied in 2020.
            </h5>
            <div className="row">
                <div className="col-12 text-center mt-4">
                    <div className="btn btn-finance">
                        <div className="btnFinIcon">
                            <Truck size={60} />
                        </div>
                        <div className="btnFinText">Had a job</div>
                        <div className="btnFinSubText">(W-2)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}