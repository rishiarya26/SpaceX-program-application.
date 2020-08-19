import React from "react";
import Image from "./image";
import Details from "./details";

export default function MainContentPanel(props) {
  const { isLoading, data } = props;
  return (
    <>
      {!isLoading ? (
        data.length > 0 ? (
          <div className="contentBodyContainer">
            {data.map((data, id) => (
              <div className="dataCard">
                <Image data={data} />
                <Details data={data} id={id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no_data"> No Missions Found</div>
        )
      ) : (
        <div className="no_data">Loading missions...</div>
      )}
    </>
  );
}
