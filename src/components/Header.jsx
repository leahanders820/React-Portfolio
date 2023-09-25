import React, { Children } from "react";
import '../App.css';

const Header = ({children}) => {



    return (
        <header className="App-header">
            Hello
            {children}
        </header>
    );
};

export default Header;