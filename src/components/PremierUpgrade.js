import React, { useState } from "react";
import Modal from "react-modal";

export default function PremierUpgrade ( { setGoToPremierUpgrade, setGoToDeduction, setPremierTier }) {

    const deluxeBtnClicked = () => {
        setModalIsOpenToTrue();
    }

    const upgradeBtnClicked = () => {
        setGoToPremierUpgrade(false);
        setGoToDeduction(true);
        setPremierTier(true);
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
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
        <div className="col-12 text-center">
            <h1 className="taxbreak mb-5">Nice, you're getting a tax break! Upgrade to DPTax Premier to claim it.</h1>
            <div className="lightgreen">
                <div className="subsetIconCircleGreen"></div>
                <div className="dollaricon">$</div>
                <h5 className="mt-4 mb-2">Residential Energy Efficient Property Credit</h5>
                <h1 className="dollardollargreen">$1350</h1>
                <p className="bottomtextsmall pb-4">(Amount added to your refund)</p>
            </div>
            <div className="row">
                <div className="col-6 mt-2">
                    <div className="btn-upgrades" onClick={() => deluxeBtnClicked()}>
                        <div className="currentproduct mb-2">
                            <p>- Your current product -</p>
                            <h5 className="upgradesubheader">Deluxe Edition</h5>
                        </div>
                        <div className="pt-4 px-5">
                        Deluxe Edition is only for certain tax returns. You won't be able to claim the <span className="bold">Residential Energy Efficiency Property Credit</span>.
                        </div>

                        <Modal
                        isOpen={modalIsOpen}
                        style={customStyles}
                        onRequestClose={() => setModalIsOpen(false)}>
                            <button className="maintext close" onClick={setModalIsOpenToFalse}>x</button>
                            <h4 className="mt-2">Are you sure?</h4>
                            <p className="maintext mt-4">Are you sure you want to continue with DPTax Deluxe Edition? You will not be able to claim your <span className="bold">$1350 Residential Energy Efficiency Property Credit</span>.</p>
                            <p className="maintext my-3">Please upgrade to <span className="bold">DPTax Premier</span> to claim your $1350 credit!</p>
                            <div className="text-center mt-4">
                                <button className="btn btn-hollow mr-3" onClick={() =>  {
                                    setGoToPremierUpgrade(false);
                                    setGoToDeduction(true);}}
                                >No thanks</button>
                                <button className="btn btn-upgrade ml-3" onClick={() => {
                                    setGoToPremierUpgrade(false);
                                    setGoToDeduction(true);
                                    setPremierTier(true);}}
                                >Ok!</button>
                            </div>
                        </Modal>

                    </div>
                </div>
                <div className="col-6 mt-2">
                    <div className="btn-upgrades" onClick={() => upgradeBtnClicked()}>
                        <div className="upgradeproduct mb-2">
                            <p>- Required for your tax situation -</p>
                            <h5 className="upgradesubheader">Premier</h5>
                        </div>
                        <div className="pt-4 px-5">
                        Premier covers the <span className="bold">Residential Energy Efficiency Property Credit</span>, which is reported to the IRS on Schedule 3.
                        </div>
                    </div>
                    <h5 className="mt-3 mb-0 greentext">$90 Federal</h5>
                    <p className="subtext">State Additional</p>
                </div>

                <div className="mt-3 col-12 subtext beegbeegpadding">
                    Continue with Premier and pick up where you left off. Don't worry about pulling out your wallet- look for the payment option to deduct the cost from your federal refund when you file.
                </div>
            </div>
        </div>
    )
}