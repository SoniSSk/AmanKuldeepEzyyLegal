import React, { useState } from "react";
import "./BaseCode.css";

const BaseCode = () => {
  const [Value, setData] = useState("");

  /*const dataChange = (event) => {
    setData(event.currentTarget.value);
    alert(event.currentTarget.name);
  };*/
  return (
    <div>
      <div className="page-div">
        <div className="page-div-left">
          <div>
            <label> Company Name </label>{" "}
            <input
              className="input-form"
              onChange={(event) => setData(event.target.value)}
              value={Value}
              name="data"
              placeholder="Enter name "
            />
          </div>{" "}
        </div>{" "}
        <div className="page-div-right" id="printableArea">
          <button onClick={() => window.print()}> PRINT </button>{" "}
          <div className="data-doc">
            {" "}
            <p>
              {" "}
              Welcome to <b> {Value} </b>{" "}
            </p>{" "}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BaseCode;
