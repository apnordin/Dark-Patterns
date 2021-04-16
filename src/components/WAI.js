import React, { useState } from "react";
import { CashStack } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const containerStyle = {
    margin: "auto",
    position: "relative",
    width: "2rem",
    height: "2rem",
};
const circleStyle = {
    display: "block",
    width: "2rem",
    height: "2rem",
    border: "1rem solid #e9e9e9",
    borderTop: "1rem solid #3498db",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0
};

const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear"
}

export default function WAI ( {setGoToWAI, setGoToDCs } ) {

    const [jobDone, setJobDone] = useState(false);
    const [intDone, setIntDone] = useState(false);
    const [hsaDone, setHSADone] = useState(false);

    const [jobClicked, setJobClicked] = useState(false);
    const JobContent = () => {
        if (jobClicked === false && jobDone === false) {
            return (
                <button onClick={() => setJobClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else if (jobClicked === true && jobDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setJobDone(true);
                }, 3250);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing W2...
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
        } else if (jobClicked === true && jobDone === true) {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [intClicked, setIntClicked] = useState(false);
    const IntContent = () => {
        if (intClicked === false && intDone === false) {
            return (
                <button onClick={() => setIntClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else if (intClicked === true && intDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setIntDone(true);
                }, 3750);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing 1099-INT...
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
        } else if (intClicked === true & intDone === true) {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [hsaClicked, setHSAClicked] = useState(false);
    const HSAContent = () => {
        if (hsaClicked === false && hsaDone === false) {
            return (
                <button onClick={() => setHSAClicked(true)} type="button" className="btn btn-main">Start</button>
                )
        } else if (hsaClicked === true & hsaDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setHSADone(true);
                }, 2750);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing 1099-SA...
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
            } else if (hsaClicked === true & hsaDone === true) {
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
                <button onClick={() => {setGoToWAI(false); setGoToDCs(true)}} type="button" className="btn btn-main mr-2">Continue</button>
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
                    
                <div className="row mb-4">
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