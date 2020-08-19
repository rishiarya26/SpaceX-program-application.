import React from "react";

export default function LaunchYear(props) {
  const { handleButtonChange, details, launchYear } = props;
  return (
    <>
      <span>Launch Year</span>
      <hr className="lineMarginBot" />
      <div className="menuBody">
        {launchYear.map((data, id) => (
          <button
            key={id}
            id="launch_year"
            value={data}
            onClick={handleButtonChange}
            className={
              data == details.launch_year
                ? "customButtonClicked"
                : "customButton"
            }
          >
            {data}
          </button>
        ))}
      </div>
    </>
  );
}
