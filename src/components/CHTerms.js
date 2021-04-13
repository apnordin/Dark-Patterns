import React from "react";

export default function CHTerms( { setGoToCHTerms, setGoToWAI } ) {

    return (
        <div className="col-12 blankwhite">
            <p className="subtext mt-4"> 2 of 2</p>
            <h4>Sign now, save time and improve your score</h4>
            <p className="maintext mt-4">Sharing your tax info with your Umbrella account can save you time and effort. The IRS requires us to get your consent before disclosing information from y our tax return for this purpose. With your OK, your tax info will be shared with Umbrella, Inc. and its subsidiaries.</p>
            <div className="row">
                <div className="col-12 lightblue mt-0 mx-4">
                    <p className="disclaimer">Consent to disclosure of your tax return information.</p>
                    <p className="disclaimer">Federal law requires us to provide this consent form to you. Unless authorized by law, we cannot disclose your t ax return information to Umbrealla, Inc. for purposes other than the preparation of filing of your tax return without your consent. If you consent to the disclosure of your tax return information, Federal law may not protect your tax return information from further use or distribution.</p>
                    <p className="disclaimer">You are not required to complete this form to engage our tax return preparation services. If we obtain your signature on this form by conditioning our tax return preparation services on your consent, your consent will not be valid. If you agree to the disclosure of your tax return information, your consent is valid for the amount of time that you specify. If you do not specify the duration of your consent, your consent is valid for one year from the date of signature.</p>
                    <p className="disclaimer">You can choose to have us share your tax return information in order to enhance your Umbrella account and build your profile, communicate with you, provide personalized offers, give you advice regarding your unique financial profile, provide you with live expert advisory services, and provide insights for the benefit of you or other customers. Information that may be shared with your parent company, Umbrella Inc. and its subsidiaries includes personal and business information, filing status, refund or taxes due, income information, social security number, deductions and credits, other information related to your use of DPTax, and financial institution connection information. You are consenting to allow this disclosure within three years of the date of your signature.</p>
                    <p className="disclaimer">If you believe your tax return information has been disclosed or used improperly in a manner unauthorized by law or without your permission, you may contact the Treasury Inspector General for Tax Administration. Good luck.</p>
                    <p className="disclaimer">By signing and clicking "Continue" below, I authorize DPTax to disclose my personal information, filing status, refund or taxes due, income information, social security number, deductions and credits, and financial institution connection information from this 2020 tax return and any amendments to Umbrella Inc. They may also have my firstborn child and the keys to my house.</p>
                </div>
            </div>
            <p className="maintext mt-3">To continue, we just need you to sign and date this form below. Please enter your name as it will appear on your tax return.</p>
            <div className="greytext">
                <div className="row px-3">
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstname">Your Name</label>
                                <input type="text" className="form-control" id="firstname"></input>
                                <small id="firstnameHelp" className="form-text">First name</small>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                
                                <input type="text" className="form-control mt-2" id="lastname"></input>
                                <small id="lastnameHelp" className="form-text">Last name</small>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="date"></label>
                                <input type="text" className="form-control mt-2" id="date" placeholder="mm/dd/yyyy"></input>
                                <small id="lastnameHelp" className="form-text">Today's Date</small>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-3 px-3">
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstname">Spouse's name, if filing together</label>
                                <input type="text" className="form-control" id="firstname"></input>
                                <small id="firstnameHelp" className="form-text">First name</small>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="lastname"></label>
                                <input type="text" className="form-control mt-2" id="lastname"></input>
                                <small id="lastnameHelp" className="form-text">Last name</small>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="date"></label>
                                <input type="text" className="form-control mt-2" id="date" placeholder="mm/dd/yyyy"></input>
                                <small id="lastnameHelp" className="form-text">Today's Date</small>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className="text-right mb-4">
                <button onClick={() => {setGoToCHTerms(false); setGoToWAI(true)}} type="button" className="btn btn-light-grey ml-1 mr-3 mt-3">No Thanks</button>
                <button onClick={() => {setGoToCHTerms(false); setGoToWAI(true)}} type="button" className="btn btn-main ml-1 mt-3">Continue</button>
            </div>
        </div>
    )
}