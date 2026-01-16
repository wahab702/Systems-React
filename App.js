import React from "react";
import ReactDOM from "react-dom/client";


// const heading=React.createElement("h1" , {id:"heading"}, "Wahab making a raect");
const headingJSX = <h1 id="heading">This is React by javascript</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingJSX);
