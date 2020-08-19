import React, { useState, useEffect } from "react";
import { getDashboardData } from "../../services/index";
import { toast } from "react-toastify";
import Heading from "./heading";
import Menu from "./menu";
import MainContentPanel from "./mainContentPanel/index";
import Footer from "./footer";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [clicked, setClicked] = useState();
  const [launchYear, setLaunchYear] = useState([
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ]);
  const dashboardData = async () => {
    try {
      let result = await getDashboardData(details);
      console.log(result);
      if (result !== undefined && result !== null) {
        setIsLoading(false);
        console.log("hello", result.data);
        console.log(result.data[0].links.mission_patch);
        setData(result.data);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error, "soemthing went wrong");
    }
  };

  useEffect(() => {
    dashboardData();
  }, []);

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    dashboardData();
  }, [details]);

  const handleButtonChange = (e) => {
    let obj = { ...details };
    obj[e.currentTarget.id] = e.currentTarget.value;
    setDetails(obj);
    console.log(obj);
  };

  return (
    <div className="bodyContainer">
      <Heading />
      <div className="containerSpace">
        <Menu
          launchYear={launchYear}
          details={details}
          handleButtonChange={handleButtonChange}
        />
        <MainContentPanel data={data} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
}
