import React from "react";
import { Truck } from "react-bootstrap-icons";

export default function Financial () {

    const finBtnClicked = () => {

    }

    const finbtns = [
        { name: "job", icon: <Truck size={60} />, text: "Had a job", subText: "(W-2)" },
        { name: "charity" },
        { name: "college" },
    ]

    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">Let's get an idea of your financial picture
            </h2>
            <h5 className="subheader">Select anything that applied in 2020.
            </h5>
            <div className="row">
                <div className="col-12 text-center mt-4">
                    { finbtns.map(function(finbtn, i) {
                        return (<div className="btn btn-finance" key={finbtn.name } index={ i }>
                                <div className="btnFinIcon">
                                    {finbtn.icon}
                                </div>
                                <div className="btnFinText">{finbtn.text}</div>
                                <div className="btnFinSubText">{finbtn.subText}</div>
                            </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}