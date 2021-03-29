import React from "react";
import { Check2 } from "react-bootstrap-icons";

export default function ProductSelection ( {setGoToProductSelection, setGoToDeluxeTCs }) {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">
                Based on your selections, you will need to file with DPTax Deluxe.
            </h2>
            <table className="center mt-5 mb-5">
                <tr>
                    <th className="noborder"></th>
                    <th className="noborder"></th>
                    <th className="noborder recommended">Recommended</th>
                    <th className="noborder"></th>
                </tr>
                <tr>
                    <th className="noborder"></th>
                    <th className="basicText">Basic</th>
                    <th className="deluxeText deluxe">Deluxe</th>
                    <th className="premierText">Premier</th>
                </tr>

                <tr>
                    <td>Basic features & step-by-step guidance</td>
                    <td><Check2 size ={30}/></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Free federal e-files included</td>
                    <td><Check2 size ={30}/></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Maximize your refund with extra help on deductions and credits</td>
                    <td><Check2 size ={30}/></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Includes 1 state tax return preparation at no additional charge</td>
                    <td></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Special help to maximize your deductions</td>
                    <td></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Understand your tax history and maximize next year's refund with personalized advice</td>
                    <td></td>
                    <td className="deluxe"><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Investments and rental property</td>
                    <td></td>
                    <td className="deluxe"></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Schedule C Businesses (self-employed)</td>
                    <td></td>
                    <td className="deluxe"></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Creates W-2 and 1099 forms for employees and contractors</td>
                    <td></td>
                    <td className="deluxe"></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td className="noborder"></td>
                    <td className="price noborder"></td>
                    <td className="price deluxe nobottomborder">$60*<p className="pricesubtext">Federal</p><p className="pricesubtext">State Additional</p></td>
                    <td className="price noborder">$90*<p className="pricesubtext">Federal</p><p className="pricesubtext">State Additional</p></td>
                </tr>
                <tr>
                    <td className="noborder"></td>
                    <td className="noborder">
                        <button className="btn btn-hollow" onClick={() => setGoToProductSelection(false)}>Never Mind</button>
                    </td>
                    <td className="deluxe bottom notopborder">
                        <button className="btn btn-upgrade" onClick={() => {setGoToProductSelection(false); setGoToDeluxeTCs(true);} }>Continue</button>
                    </td>
                    <td className="noborder">
                        <button className="btn btn-upgrade">Upgrade</button>
                    </td>
                </tr>

            </table>
        </div>
    )
}