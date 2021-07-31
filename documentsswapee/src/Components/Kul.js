import React from "react";
import DataTransfer from "./FormStructure/DataTransfer";

function Kul(props) {
  const { values } = DataTransfer();
  console.log(values.company_Name);
  return (
    <div>
      <p> Kuldeep SOni {values.company_Name} </p>{" "}
    </div>
  );
}

export default Kul;
