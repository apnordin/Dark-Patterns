import React, { useState } from "react";
import { Wallet2 } from "react-bootstrap-icons";
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

export default function DCs ( { setGoToDCs, setGoToDeluxeUpgrade, setGoToPremierUpgrade, setGoToDeduction, freeTier, deluxeTier, premierTier }) {

    const [mortgageDone, setMortgageDone] = useState(false);
    const [propertyDone, setPropertyDone] = useState(false);
    const [charityDone, setCharityDone] = useState(false);

    const [mortgageClicked, setMortgageClicked] = useState(false);
    const MortgageContent = () => {
        if (mortgageClicked === false && mortgageDone === false) {
            return (
                <button onClick={() => setMortgageClicked(true)} type="button" className="btn btn-main">Start</button>
            )
        } else if (mortgageClicked === true && mortgageDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setMortgageDone(true);
                }, 3250);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing 1098...
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
        } else if (mortgageClicked === true && mortgageDone === true) {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [propertyClicked, setPropertyClicked] = useState(false);
    const PropertyContent = () => {
        if (propertyClicked === false && propertyDone === false) {
            return (
                <button onClick={() => setPropertyClicked(true)} type="button" className="btn btn-main">Start</button>
            )
        } else if (propertyClicked === true && propertyDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setPropertyDone(true);
                }, 3250);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing real estate taxes... somehow.
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
        } else if (propertyClicked === true && propertyDone === true) {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const [charityClicked, setCharityClicked] = useState(false);
    const CharityContent = () => {
        if (charityClicked === false && charityDone === false) {
            return (
                <button onClick={() => setCharityClicked(true)} type="button" className="btn btn-main">Start</button>
            )
        } else if (charityClicked === true && charityDone === false) {
            const countDown = () => {
                const interval = setInterval(() => {
                    setCharityDone(true);
                }, 3250);
                return () => clearInterval(interval);
            }
            countDown()
            return (
                <div className="mb-4">
                    Importing charity donations... somehow.
                    <span className="ml-3" style={containerStyle}>
                        <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
                    </span>
                </div>
            )
        } else if (charityClicked === true && charityDone === true) {
            return (
                <p className="completed">Done!</p>
            )
        }
    }

    const ContinueBtn = () => {
        if (mortgageClicked === false || propertyClicked === false || charityClicked === false) {
            return (
                <button type="button" className="btn btn-main mr-2" disabled>Continue</button>
            )
        } else if (freeTier === true) {
            return (
                <button onClick={() => {setGoToDCs(false); setGoToDeluxeUpgrade(true)}} type="button" className="btn btn-main mr-2">Continue</button>
            )
        } else if (deluxeTier === true) {
            return (
                <button onClick={() => {setGoToDCs(false); setGoToPremierUpgrade(true)}} type="button" className="btn btn-main mr-2">Continue</button>
            )
        } else if (premierTier === true) {
            return (
                <button onClick={() => {setGoToDCs(false); setGoToDeduction(true)}} type="button" className="btn btn-main mr-2">Continue</button>
            )
        }
    }

    return (
        <div className="col-12 text-center">
            <h2 className="subsetheader">Deductions and credits</h2>
            <p className="subtext mt-4 mb-5">Now it's time for the fun part...</p>
            <div className="lightblue-border">
                <div className="subsetIconCircle"></div>
                <Wallet2 className="subsetIcon" size={27} color="white" />
                <h3 className="subsetsubheader mt-2 mb-5">Your tax breaks</h3>
                <div className="row">
                    
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"><p className="subtext">2020</p></div>
                    <div className="col-12"><hr className="mt-0" /></div>
                </div>

                <div className="row mt-1 mb-2">
                    <div className="col-6 text-left pl-4 boldertext">Mortgage Interest, Refinancing, and Insurance (form 1098)
                    </div>
                    <div className="col-6 text-right pr-5">
                        <MortgageContent />
                    </div>
                    <div className="col-12"><hr className="" /></div>
                </div>

                <div className="row mt-1 mb-2">
                    <div className="col-6 text-left pl-4 boldertext">Property (Real Estate) Taxes
                    </div>
                    <div className="col-6 text-right pr-5">
                        <PropertyContent />
                    </div>
                    <div className="col-12"><hr className="" /></div>
                </div>

                <div className="row mb-4">
                    <div className="col-6 text-left pl-4 boldertext">Donations to Charity in 2020
                    </div>
                    <div className="col-6 text-right pr-5">
                        <CharityContent />
                    </div>
                </div>

            </div>
            <div className="mt-4">
                <ContinueBtn />
            </div>
        </div>
    )
}