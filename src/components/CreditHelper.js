import React, { useState } from "react";
import checkedfilesicon from "../assets/checkedfiles.png";
import Modal from "react-modal";

export default function CreditHelper( { setGoToCreditHelper, setGoToCHTerms } ) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const learnMore = () => {
        console.log('Clicked!')
        setModalIsOpenToTrue();
    }

    const customStyles = {
        content: {
            top : '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            width: '40%',
            height: 'auto',
            minWidth: '365px',
            maxHeight: '80%',
            padding: '30px'
        }
    }

    return (
        <div className="col-12 blankwhite">
            <p className="subtext mt-4"> 1 of 2</p>
            <h4>Sign now, save time and improve your score</h4>
            <img className="filesicon mt-4" style={{height: "125px"}} alt="filesicon" src={checkedfilesicon}></img>
            <p className="maintext mt-4">By sharing your tax info with your Umbrella account (Umbrella is the company behind DPTax), you can save time and effort.</p>
            <p className="maintext">With your OK, you can get personalized analysis, strategies, and offers to help you save and manage your money beyond tax prep. This includes things like tracking your refund, giving you personalized financial advice, refinancing your loans, and improving your credit. The hard work will be done for you without you having to re-enter this data.</p>
            <span className="maintext modalopenlink" onClick={learnMore}>Learn More</span>
            <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                        <button className="maintext close" onClick={setModalIsOpenToFalse}>x</button>
                        <h4 className="mt-2">Intentionally Vague Disclaimer</h4>
                        
                        <p className="subtext mt-4">Wow, we're a little bummed you actually clicked to learn more. We're kind of banking on you just clicking continue over and over, thinking it's just part of filing.</p>
                        <p className="subtext my-3">Do you notice our sleek layout and formatting? Yeah, we want to keep things as visually consistent as possible, so that you don't know when you're being sold to. It's not technically a lie. Just because it's deliberate, insidious, misleading, and will cost consumers millions of dollars this year, that doesn't mean it's a lie.</p>
                        <p className="subtext my-3">In the same vein, you signing away your SSN on the next page doesn't count as a privacy violation, because it's in the fine print. But all you'll notice is that we're using the same layout and styling that you see throughout the legitimate services on our website, and a big green check.</p>
                        <p className="subtext mt-3 mb-1">P.S. Slot machines and "totally-not-gambling" mobile games use the same strategies. This is legal.</p>
            </Modal>
            <hr className="mt-4 mb-0" />
            <div className="text-right">
                <button onClick={() => {setGoToCreditHelper(false); setGoToCHTerms(true)}} type="button" className="btn btn-main ml-1 mt-3">Continue</button>
            </div>
        </div>
    )
}