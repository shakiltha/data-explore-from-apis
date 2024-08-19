import { useState } from "react";
import CovidData from "../dataComponents/CovidData";
import fetchCovidData from "../utils/covidApi";
import { useEffect } from "react";
const Home = () => {
  const [corona, setCorona] = useState([]);
  const covidData = async () => {
    const covid = await fetchCovidData();
    setCorona(covid);
  };
  useEffect(() => {
    covidData();
  }, []);
  console.log(corona.length);
  return (
    <div>
      <CovidData covid={corona} />
    </div>
  );
};

export default Home;
