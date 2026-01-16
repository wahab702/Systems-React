import React from "react";
import ReactDOM from "react-dom/client";


const Title=() => (
    <h2>This is Component Composition</h2>
)
const hello=function (){
    return(
        <h1>My name is Wahab</h1>
    )
}
const Comp=() =>{
    return(
    <div>
        <Title/>
        {Title()}
      <h1 id="heading">This is functional component</h1>
    </div>
       
);
 };

// const heading=React.createElement("h1" , {id:"heading"}, "Wahab making a raect");
// const headingJSX = <h1 id="heading">This is React by javascript</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
