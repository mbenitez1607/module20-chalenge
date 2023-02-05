import React, { useState } from "react";
import avatar from '../assets/avatar.jpg';
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="App-header">
            <Navigation/>
        </header>
    );
}

export default Header;