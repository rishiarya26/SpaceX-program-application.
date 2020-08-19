import React from "react";
import Button from "./button";

export default function LandSuccess(props) {
  const { handleButtonChange, details } = props;
  return (
    <>
      <span>Successful Landing</span>
      <hr className="lineMarginBot" />
      <div className="menuBody">
        <Button
          handleButtonChange={handleButtonChange}
          id="land_success"
          value="true"
          detailToCompare={details.land_success}
          displayValue="True"
        />
        <Button
          handleButtonChange={handleButtonChange}
          id="land_success"
          value="false"
          detailToCompare={details.land_success}
          displayValue="False"
        />
      </div>
    </>
  );
}
