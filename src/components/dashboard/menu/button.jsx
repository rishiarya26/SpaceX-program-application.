import React from "react";

export default function Button(props) {
  const {
    handleButtonChange,
    id,
    value,
    detailToCompare,
    displayValue,
  } = props;
  return (
    <>
      <button
        onClick={handleButtonChange}
        id={id}
        value={value}
        className={
          value == detailToCompare ? "customButtonClicked" : "customButton"
        }
      >
        {displayValue}
      </button>
    </>
  );
}
