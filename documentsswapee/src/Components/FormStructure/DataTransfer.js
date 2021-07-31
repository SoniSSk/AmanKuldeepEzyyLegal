import { useState } from "react";

const DataTransfer = () => {
  const [values, setData] = useState({
    company_Name: String,
    hR_Name: String,
    ref_No: Number,
    date_of_Issue: Date,
    employee_Name: String,
    position: String,
    compensation: Number,
    date_of_Joining: Date,
  });

  function HandleChange(event) {
    const { name, value } = event.target;
    setData({ ...values, [name]: value });

    console.log(event.target.value);
    console.log(event.target.name);
  }

  return { HandleChange, values };
};

export default DataTransfer;

// const DataTransfer = () => {
//   const [CompanyName, setData1] = useState("");
//   const [hR_Name, setData2] = useState("");

//   function HandleChange1(event) {
//     setData1(event.target.value);
//     //console.log(event.target.value);
//     //console.log(event.target.name);
//   }

//   function HandleChange2(event) {
//     setData2(event.target.value);
//     //console.log(event.target.value);
//     //console.log(event.target.name);
//   }

//   return { HandleChange1, HandleChange2, CompanyName, hR_Name };
// };

//
