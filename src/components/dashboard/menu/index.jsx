import React from "react";
import LaunchYear from "./launchYear";
import LaunchSuccess from "./launchSuccess";
import LandSuccess from "./landSuccess";

export default function Menu(props) {
  const { launchYear, handleButtonChange, details } = props;

  return (
    <>
      <div className="menu">
        <h5 className="menuHeading">Filters</h5>
        <LaunchYear
          handleButtonChange={handleButtonChange}
          details={details}
          launchYear={launchYear}
        />
        <LaunchSuccess
          handleButtonChange={handleButtonChange}
          details={details}
        />
        <LandSuccess
          handleButtonChange={handleButtonChange}
          details={details}
        />
      </div>
    </>
  );
}
