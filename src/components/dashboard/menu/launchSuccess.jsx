import React from "react";
import Button from "./button";

export default function LaunchSuccess(props) {
  const { handleButtonChange, details } = props;
  return (
    <>
      <span>Successful Launch</span>
      <hr className="lineMarginBot" />
      <div className="menuBody">
        <Button
          handleButtonChange={handleButtonChange}
          id="launch_success"
          value="true"
          detailToCompare={details.launch_success}
          displayValue="True"
        />
        <Button
          handleButtonChange={handleButtonChange}
          id="launch_success"
          value="false"
          detailToCompare={details.launch_success}
          displayValue="False"
        />
      </div>
    </>
  );
}
