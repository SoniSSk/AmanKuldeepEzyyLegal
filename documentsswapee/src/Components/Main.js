import React, { useState } from "react";
import "./Main.css";
import OfferLetter from "./DocumentsStructure/OfferLetter";
import PrintDocument from "./PrintDocument";
import DataTransfer from "./FormStructure/DataTransfer";
import MapDiv from "./FormStructure/MapDiv";
import Kul from "./Kul";
import OfferLetterData from "./FormStructure/OfferLetterData";

const BaseCode = (event) => {
  const { values, HandleChange } = DataTransfer();

  function rowHand(event) {
    return (
      <div key={event.id}>
        <label className="form-label"> {event.label} </label> <br />
        <input
          className="input-form "
          //className={event.className}
          name={event.name}
          onChange={HandleChange}
          placeholder={event.placeholder}
          type={event.type}
          // value={event.value}
          id={event.id}
        />{" "}
      </div>
    );
  }

  return (
    <div>
      <div className="page-div">
        <div className="page-div-left">
          <div className="Map-Div">
            <form> {OfferLetterData.map(rowHand)} </form>{" "}
            <button> Next </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="page-div-right" id="printableArea">
          <OfferLetter data={values} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BaseCode;
