import React, { useState } from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="container height: 150px">
        <header className="App-header h-25">
            <Navigation/>
        </header>
        </div>
    );
}

export default Header;