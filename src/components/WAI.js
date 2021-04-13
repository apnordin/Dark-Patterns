import React, { useState } from "react";
import { CashStack } from "react-bootstrap-icons";

export default function WAI ( ) {

    const [jobClicked, setJobClicked] = useState(false);
    const JobContent = () => {
        if (jobClicked === false) {
            return (
                <button onClick={() => setJobClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [intClicked, setIntClicked] = useState(false);
    const IntContent = () => {
        if (intClicked === false) {
            return (
                <button onClick={() => setIntClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [hsaClicked, setHSAClicked] = useState(false);
    const HSAContent = () => {
        if (hsaClicked === false) {
            return (
                <button onClick={() => setHSAClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const ContinueBtn = () => {
        if (jobClicked === false || intClicked === false || hsaClicked === false) {
            return (
                <button type="button" className="btn btn-main mr-2" disabled>Continue</button>
            )
        } else {
            return (
                <button type="button" className="btn btn-main mr-2">Continue</button>
            )
        }
    }


    return (
        <div className="col-12 text-center">
            <h2 className="subsetheader">Wages and income
            </h2>
            <p className="subtext mt-4 mb-5">Let's start by gathering some information for your 2020 income.</p>
            <div className="lightblue-border">
                <div className="subsetIconCircle"></div>
                <CashStack className="subsetIcon" size={27} color="white" />
                <h3 className="subsetsubheader mt-2 mb-5">Your income</h3>
                <div className="row">
                    
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"><p className="subtext">2020</p></div>
                    <div className="col-12"><hr className="mt-0" /></div>
                </div>

                
                <div className="row mt-1 mb-2">
                    <div className="col-4 text-left pl-4 boldertext">Job (W-2)</div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <JobContent />
                    </div>
                    <div className="col-12"><hr className="" /></div>
                </div>

                <div className="row mt-1 mb-2">
                    <div className="col-4 text-left pl-4 boldertext">Interest on 1099-INT</div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <IntContent />
                    </div>
                    <div className="col-12"><hr className="" /></div>
                </div>
                    
                <div className="row mb-5">
                    <div className="col-4 text-left pl-4 boldertext">1099-SA, HSA, MSA</div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <HSAContent />
                    </div>
                </div>
                     
            </div>
            <div className="mt-4">
                <ContinueBtn />
            </div>
        </div>
    )
}