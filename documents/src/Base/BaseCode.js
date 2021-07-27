import React, { useState } from "react";
import "./BaseCode.css";

import HeaderDocument from "./HeaderDocument";

const BaseCode = () => {
    let data = "...........";

    const [Value, setData] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    /*if (isSubmitting === false) {
                                                                                            setData("Enter name");
                                                                                            setIsSubmitting(true);
                                                                                          }*/

    function dataChange(event) {
        setData(event.target.value);
        // setIsSubmitting(true);
    }
    return ( <
        div >
        <
        HeaderDocument / >
        <
        div className = "page-div" >
        <
        div className = "page-div-left" >
        <
        div >
        <
        label > Company Name < /label>{" "} <
        input className = "input-form"
        onChange = { dataChange }
        value = { Value }
        name = "data"
        placeholder = "Enter name " /
        >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "page-div-right"
        id = "printableArea" >
        <
        button onClick = {
            () => window.print() } > PRINT < /button>{" "} <
        div className = "data-doc" > { " " } <
        p > { " " }
        Welcome to < b > { Value } < /b>{" "} <
        /p>{" "} <
        br / >
        <
        br / >
        <
        br / >
        <
        p > { " " }
        Welcome to < b > { Value } < /b> <br / >
        <
        br / >
        <
        /p>{" "} <
        br / >
        <
        br / >
        We are excited to extend an official offer
        for you to join the { " " } { Value }
        team as a / the TITLE.This offer letter will go over the basics of working at < br / > < br / > < b > { Value } < /b>, but there are a lot more
        details in our Employee Handbook.If you have any questions that aren’ t in this letter or the handbook, please
        let me know.In our
        conversation, you said you wanted to take < br / >
        <
        br / >
        the EQUITY / SALARY heavy offer, so your starting salary will be SALARY per year < br / >
        <
        br / >
        <
        br / >
        and you will be recommended
        for an option to purchase SHARES shares of < br / >
        <
        br / > < b > { Value } < /b>
        common stock.There are OUTSTANDING SHARES shares of < br / >
        <
        br / > < b > { Value } < /b>
        common stock outst < b > { Value } < /b>
        years, with a < br / > < br / > < b > { Value } < /b>
        cliff.Equity at startups is complicated, so we’ ve created a Guide to Your Equity that explains how options are issued, exercised, and what they might be worth
        if <br / > < br / > < b > { Value } < /b>
        is successful.The best perk of working at < br / >
        <
        br / > < b > { Value } < /b>
        is your incredible new coworkers, but you’ re also entitled to all of the benefits that apply to you from our benefits plan.These currently include: the EQUITY / SALARY heavy offer, so your starting salary will be SALARY per year < br / >
        <
        br / >
        <
        br / >
        and you will be recommended
        for an option to purchase SHARES shares of < br / >
        <
        br / > { Value }
        common stock.There are OUTSTANDING SHARES shares of < br / >
        <
        br / > { Value }
        common stock outstanding, and your shares will vest over < br / >
        <
        br / >
        <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default BaseCode;