import React from "react";
import "./HeaderDiv.css";

function HeaderDiv() {
    return ( <
        header >
        <
        nav id = "navbar" >
        <
        div className = "container" >
        <
        h1 >
        <
        a href = "https://ezylegal.in/" > { " " } <
        span className = "ezy-logo-create" > ezy < /span>{" "} <
        span className = "legal-logo-create" > Legal < /span>{" "} <
        /a>{" "} <
        /h1>{" "} <
        ul >
        <
        li >
        <
        a href = "#" > Documents < /a>{" "} <
        div className = "subclass" >
        <
        ul >
        <
        li >
        <
        a href = "#" > OfferLetter < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > Rent Agreement < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > Property < /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > OfferLetter < /a>{" "} <
        /li>{" "} <
        li >
        <
        a href = "#" > Payment < /a>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /nav>{" "} <
        /header>
    );
}

export default HeaderDiv;