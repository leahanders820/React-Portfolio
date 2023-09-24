import React from "react";

const Header = () => {

    

    return (
      <header className="App-header">
        Hello
        <button onClick = {() => {
            alert('Hello');
        }}>Project 1</button>
        <button onClick = {() => {
            alert('Hello2');
        }}>Project 2</button>
        <button onClick = {() => {
            alert('Hello3');
        }}>Project 3</button>
      </header>
    );
  };

  export default Header;