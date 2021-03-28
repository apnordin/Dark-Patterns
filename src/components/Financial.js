import React from "react";
import { Briefcase, Truck, Cash, Pencil, Eyeglasses, GraphUp, Trophy, PersonSquare, Gem, Sunglasses } from "react-bootstrap-icons";

export default function Financial ( {setGoToFinancial, setGoToCLFTP } ) {

    const finBtnClicked = (i) => {
        console.log('FINBTNCLICKED', i)
        const thisBtn = document.getElementById(i);
        if (thisBtn.className === "btn btn-finance mb-4") {
            thisBtn.className = "btn btn-finance mb-4 btnSelected";
        } else if (thisBtn.className === "btn btn-finance mb-4 btnSelected") {
            thisBtn.className = "btn btn-finance mb-4";
        }
    }

    const finbtns = [
        { name: "job", icon: <Briefcase size={60} />, text: "Had a job", subText: "(W-2)" },
        { name: "charity", icon: <Cash size={60} />, text: "Donations to a charity" },
        { name: "college", icon: <Pencil size={50} />, text: "College expenses/tuition", subText: "(1098-T)" },
        { name: "bank", icon: <GraphUp size={60} />, text: "Bank account interest", subText: "(1099-INT)" },
        { name: "stuloans", icon: <Eyeglasses size={60} />, text:"Paid student loan interest", subText: "(1098-E)" },
        { name: "business", icon: <Trophy size={50} />, text: "Owned a business" },
        { name: "relo", icon: <Truck size={60} />, text: "Moved to a new state" },
        { name: "self", icon: <PersonSquare size={55} />, text: "Self-employed", subText: "(1099-MISC, expenses)"},
        { name: "marital", icon: <Gem size={60} />, text: "Change in marital status"},
        { name: "bubble", icon: <Sunglasses size={60} />, text: "Shorted the housing market"}

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
                        return (
                            <div className="btn btn-finance mb-4" key={finbtn.name } index={ i } id={ i } onClick={() => finBtnClicked(i)}>
                                <div className="btnFinIcon">
                                    {finbtn.icon}
                                </div>
                                <div className="btnFinText">{finbtn.text}</div>
                                <div className="btnFinSubText">{finbtn.subText}</div>
                            </div>
                            )
                    })}
                    <p className="bottomtext my-4">It's OK to pick something even if you're not sure if it applies. We'll help you figure that out later.</p>
                    <hr />
                </div>
            </div>
            <button onClick={() => {setGoToFinancial(false); setGoToCLFTP(true);}} type="button" className="btn btn-main ml-1 mt-3">Continue</button>
        </div>
    )
}