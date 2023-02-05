import React, { useState } from "react";
import logo from '../logo.svg';
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";

function Portfolio() {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
            <div className="row">
                <div className="col-lg">
                    <Project />
                </div>
                <div className="col-lg">
                    <Project />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Portfolio;