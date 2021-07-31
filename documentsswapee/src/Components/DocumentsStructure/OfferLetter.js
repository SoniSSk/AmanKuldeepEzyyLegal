import React from "react";
import "./DocumentCSS.css";
//import PrintDocument from "../PrintDocument";
import DataTransfer from "../FormStructure/DataTransfer";
//import OfferLetterData from "../FormStructure/OfferLetterData";

function OfferLetter(props) {
  //const { values } = DataTransfer();
  console.log("OfferLetter", props);
  return (
    <div className="data-doc">
      {" "}
      <p className="Heading-div">
        {" "}
        <b> OFFER LETTER </b>{" "}
      </p>{" "}
      <br />
      <br />{" "}
      <p>
        {" "}
        <b>
          {" "}
          <span> {props.data.date_of_Issue} </span>{" "}
        </b>{" "}
      </p>{" "}
      <p>
        {" "}
        <b> </b>{" "}
      </p>{" "}
      <p> </p>{" "}
      <p>
        {" "}
        <br />
        <br />
        <b>
          {" "}
          <p> REF NO. {props.data.ref_No} </p>{" "}
        </b>{" "}
      </p>{" "}
      <div id="texte_a_afficher" className="texte_inselectionnable">
        <p>
          <br />
          <br /> Dear <b> {props.data.employee_Name} </b>,{" "}
        </p>{" "}
        <p>
          <br />
          <br />
          <strong> Re: Offer of Employment </strong>{" "}
        </p>{" "}
        <p>
          <br />
          <br /> I am delighted to offer you employment on a full - time basis
          in the role of {props.data.position}.It is intended for you to
          commence your employment on("Commencement Date").{" "}
        </p>{" "}
        <p>
          Please read through this letter carefully and indicate your acceptance
          of the offer by signing and returning a copy of this letter.{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 1. Your Position </strong>{" "}
        </p>{" "}
        <br />
        <p>
          You will be employed on the terms and conditions in this agreement, in
          the role of:{" "}
        </p>{" "}
        <p>
          In addition to any duties allocated by the Employer from time to time,
          your position will involve the duties set out below:
        </p>{" "}
        <p>
          <br />
          <strong> 2. Location </strong>{" "}
        </p>{" "}
        <br />
        <p>
          You will be based at the address shown below, although we may direct
          you to work at different locations from time to time:
        </p>{" "}
        <p>
          <br />
          <strong> 3. Probationary Period </strong>{" "}
        </p>{" "}
        <br />
        <p>
          Your employment is subject to the satisfactory completion of a
          probationary period of{" "}
          <span id="span_id_prob_period"> one month </span>.{" "}
        </p>{" "}
        <p>
          The probationary period is designed to grant the Employer time to
          assess whether you are able to fulfill your role with the
          Employer.During the probationary period your employment may be
          terminated by either you or the Employer upon providing 1 week written
          notice(or payment in lieu of that notice).{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 4. Hours of Work </strong>{" "}
        </p>{" "}
        <br />
        <p>
          (a) As a full - time employee you will be required to devote
          substantially the whole of your time and attention during the Employer
          's ordinary business hours to the performance of your duties under
          this agreement.{" "}
        </p>{" "}
        <p>
          (b) You will not be entitled to receive any remuneration for work
          performed outside of the hours referred to in sub - clause(a) above.{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 5. Salary and Benefits </strong>{" "}
        </p>{" "}
        <br />
        <p>
          (a) Your annual salary will be Rs.{" "}
          <span id="span_id_pay_annual">
            <span className="variable_vide">
              {" "}
              <b> {props.data.compensation} </b>{" "}
            </span>{" "}
          </span>{" "}
        </p>{" "}
        <p>
          (b) This salary will be paid by{" "}
          <span id="span_id_pay_freq"> weekly </span> in the following manner:{" "}
          <span id="span_id_mannerpayment">
            {" "}
            deposit into nominated account{" "}
          </span>
          .{" "}
        </p>{" "}
        <p>
          (c) The above mentioned salary is the total cost to the company and
          includes all payments made and benefits provided by the Employer
          directly or indirectly to or on your behalf, whether as salary or
          otherwise.{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 6. Leave </strong>{" "}
        </p>{" "}
        <br />
        <p>
          (a) You will be entitled to annual and long service leave in
          accordance with the applicable laws and the leave policy of the
          company.{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 7. Company Policies </strong>{" "}
        </p>{" "}
        <br />
        <p>
          You agree that the Employer 's policies, as amended or replaced from
          time to time, shall be binding upon you but shall not form part of the
          employment contract.{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 8. Confidentiality and Intellectual Property </strong>{" "}
        </p>{" "}
        <br />
        <p>
          (a) You agree that you will not divulge any of the confidential
          information or trade secrets of the Employer to any person, whether
          during or after the termination of your employment.{" "}
        </p>{" "}
        <p>
          (b){" "}
          <span className="flou">
            825 52522 2552 225 8888 222 582, 5222222 22 582, 25 588882 5222525
            225822 82 58822 522 822285222858 82225252822 225 252 5885852 82 252
            825582 22 2255 2228222222 82 5 252225 85885 252 85582 8288 22 252
            52282225.{" "}
          </span>{" "}
        </p>{" "}
        <p>
          <br />
          <strong> 9. Termination </strong>{" "}
        </p>{" "}
        <br />{" "}
        <p>
          (a) During your employment, either party may terminate this agreement
          by providing written notice of{" "}
          <span id="span_id_notice_period">
            <span className="variable_vide"> </span>{" "}
          </span>{" "}
          (or payment in lieu of notice) to the other party.{" "}
        </p>{" "}
        <p>
          (b) Notwithstanding sub - clause(a) above, the Employer may terminate
          this agreement by notice effective immediately without payment(except
          salary accrued to the date of termination) where you have committed an
          act of wilful or serious misconduct, are significantly neglectful of
          your duties, or you are in breach of this agreement.{" "}
        </p>{" "}
        <p>
          <strong>
            <br />
            Acceptance{" "}
          </strong>{" "}
        </p>{" "}
        <br />
        <p>
          This Letter of Offer contains the proposed Terms and Conditions of
          your employment with the Employer and is subject to the preparation
          and execution of a formal Contract of Employment.{" "}
        </p>{" "}
        <p>
          <br />
          Yours sincerely,{" "}
        </p>{" "}
        <p>
          <br />
          <br />
          <br />
          <span id="span_id_bus_name" className="encours">
            <span className="variable_vide">
              {" "}
              <b> {props.data.hR_Name} </b> <br />
              <b> {props.data.company_Name} </b>{" "}
            </span>{" "}
          </span>{" "}
          <br />
          <span id="span_id_comp_name">
            <span className="variable_vide">
              {" "}
              <b> {props.data.date_of_Issue} </b>{" "}
            </span>{" "}
          </span>{" "}
        </p>{" "}
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          I,{" "}
          <strong>
            <span id="span_id_emp_firstname">
              <span className="variable_vide">
                {" "}
                <b> {props.data.employee_Name} </b>{" "}
              </span>{" "}
            </span>{" "}
          </strong>
          , accept and agree to the proposed terms of employment and request
          that the Employer prepare a formal contract of employment for
          execution.{" "}
        </p>{" "}
        <p>
          <br />
          <br />
          ________________________{" "}
        </p>{" "}
        <p> Signature </p>{" "}
        <p>
          <br />
          ________________________{" "}
        </p>{" "}
        <p> Date </p>{" "}
      </div>{" "}
    </div>
  );
}

export default OfferLetter;
