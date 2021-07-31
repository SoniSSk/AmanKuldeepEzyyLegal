import React, { useDebugValue } from "react";
import OfferLetterData from "./OfferLetterData";
import "./FormCSS.css";
import DataTransfer from "./DataTransfer";
import OfferLetter from "../DocumentsStructure/OfferLetter";

function MapDiv() {
  const { HandleChange, values } = DataTransfer();

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
        <p> {values.hR_Name} </p>{" "}
      </div>
    );
  }
  return <div className="Row-Box"> {OfferLetterData.map(rowHand)} </div>;
}

export default MapDiv;
