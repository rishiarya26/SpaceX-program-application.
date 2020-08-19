import axios from "axios";

export const getDashboardData = async (details) => {
  let apiResponse = await axios.get(
    "https://api.spaceXdata.com/v3/launches?limit=100&launch_year=" +
      details.launch_year +
      "&land_success=" +
      details.land_success +
      "&launch_success=" +
      details.launch_success,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return apiResponse;
};
