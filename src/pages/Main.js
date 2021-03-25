import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";

export default function Main () {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <Welcome />
                </div>
            </div>
        
        </div>
    )
}