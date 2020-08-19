import React from "react";

export default function Image(props) {
  const { data } = props;
  return (
    <>
      <div className="image-full">
        <img
          className="image-fit"
          src={data.links.mission_patch}
          alt={`${data.mission_name} image`}
        ></img>
      </div>
    </>
  );
}
