import React, { useEffect } from "react";
import { motion } from "framer-motion";

const containerStyle = {
    margin: "auto",
    position: "relative",
    width: "8rem",
    height: "8rem",
};
const circleStyle = {
    display: "block",
    width: "8rem",
    height: "8rem",
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

export default function CircleLoaderFinToProd ( {setGoToCLFTP, setGoToProductSelection }) {
    useEffect(() => {
        const interval = setInterval(() => {
            setGoToCLFTP(false);
            setGoToProductSelection(true)
        }, 1575);
        return () => clearInterval(interval);
    })

    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">One moment...</h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="mt-5" style={containerStyle}>
                <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
            </div>
        </div>
    )
}