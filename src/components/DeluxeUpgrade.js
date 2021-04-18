import React from "react";

export default function DeluxeUpgrade ( { setGoToDeluxeUpgrade, setGoToDeduction, setDeluxeTier }) {

    const freeBtnClicked = () => {
        setGoToDeluxeUpgrade(false);
        setGoToDeduction(true);
    }

    const upgradeBtnClicked = () => {
        setGoToDeluxeUpgrade(false);
        setGoToDeduction(true);
        setDeluxeTier(true);
    }

    return (
        <div className="col-12 text-center">
            <h1 className="taxbreak mb-5">Nice, you're getting a tax break! Upgrade to DPTax Deluxe to claim it.</h1>
            <div className="lightgreen">
                <div className="subsetIconCircleGreen"></div>
                <div className="dollaricon">$</div>
                <h5 className="mt-4 mb-3">Child and Dependent Care Credit</h5>
                <h1 className="dollardollargreen">$1200</h1>
                <p className="bottomtextsmall pb-4">(Amount added to your refund)</p>
            </div>
            <div className="row">

            <div className="col-6 mt-4">
                <div className="btn-upgrades" onClick={() => freeBtnClicked()}>
                    <div className="currentproduct">
                        <p>- Your current product -</p>
                        <h5 className="upgradesubheader">Free Edition</h5>
                    </div>
                    <div className="pt-4 px-5">
                    Free Edition is only for simple tax returns. You won't be able to claim the Child Dependent Care Credit.
                    </div>
                </div>
            </div>
            <div className="col-6 mt-4">
                <div className="btn-upgrades" onClick={() => upgradeBtnClicked()}>
                    <div className="upgradeproduct">
                        <p>- Required for your tax situation -</p>
                        <h5 className="upgradesubheader">Deluxe</h5>
                    </div>
                    <div className="pt-4 px-5">
                    Free Edition is only for simple tax returns. You won't be able to claim the Child Dependent Care Credit.
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}