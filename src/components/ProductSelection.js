import React from "react";
import { Check2 } from "react-bootstrap-icons";

export default function ProductSelection () {
    return (
        <div className="col-12 text-center">
            <h2 className="welcome-back">
                Based on your selections, Deluxe is the best product for you.
            </h2>
            <table className="center mt-5">
                <tr>
                    <th></th>
                    <th>Basic</th>
                    <th>Deluxe</th>
                    <th>Premier</th>
                </tr>

                <tr>
                    <td>Basic features & step-by-step guidance</td>
                    <td><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Includes 1 state tax return preparation at no additional charge</td>
                    <td></td>
                    <td><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Special help to maximize your deductions</td>
                    <td></td>
                    <td><Check2 size ={30}/></td>
                    <td><Check2 size ={30}/></td>
                </tr>
                <tr>
                    <td>Investments and rental property</td>
                    <td></td>
                    <td></td>
                    <td><Check2 size ={30}/></td>
                </tr>

            </table>
        </div>
    )
}