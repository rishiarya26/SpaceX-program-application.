import React from "react";

export default function Details(props) {
  const { data, id } = props;
  return (
    <>
      <span className="heading-spaceship">
        {data.mission_name} #{id + 1}
      </span>
      <span className="mission_Id">Mission IDs:</span>
      {data.mission_id.length > 0 ? (
        <ul className="list_mission_id">
          {data.mission_id.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
      ) : (
        <span className="list_mission_id">NA</span>
      )}
      <span className="launch">
        <span className="lau">Launch Year:</span>
        <span className="launch_value">{data.launch_year}</span>
      </span>
      <span className="launch">
        <span className="lau">Successful Launch: </span>
        <span className="launch_value">
          {data.launch_success == true ? "Yes" : "No"}
        </span>
      </span>
      <span className="launch">
        <span className="lau">Successful Land: </span>
        {data.rocket.first_stage.cores[0].land_success ? (
          <span className="launch_value">
            {data.rocket.first_stage.cores[0].land_success == true
              ? "Yes"
              : "No"}
          </span>
        ) : (
          "NA"
        )}
      </span>
    </>
  );
}
