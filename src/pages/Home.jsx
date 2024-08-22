import { useState } from "react";
import CovidData from "../covidComponents/CovidData";
import fetchCovidData from "../utils/covidApi";
import { useEffect } from "react";
import Pagination from "../components/Pagination";
import BarCovid from "../covidCharts/BarCovid";
const Home = () => {
  const [corona, setCorona] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coronaPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);
    const covidData = async () => {
      const covid = await fetchCovidData();
      setCorona(covid);
      setLoading(false);
    };
    covidData();
  }, []);

  // Get current corona data
  const indexOfLastCorona = currentPage * coronaPerPage;
  const indexOfFirstCorona = indexOfLastCorona - coronaPerPage;
  const currentCorona = corona.slice(indexOfFirstCorona, indexOfLastCorona);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-3xl text-left mt-20 ml-2 lg:text-center">
        Covid Data - United States
      </h2>
      <CovidData covid={currentCorona} loading={loading} />
      <Pagination
        coronaPerPage={coronaPerPage}
        totalCorona={corona.length}
        paginate={paginate}
      />
      <BarCovid covid={corona} />
    </div>
  );
};

export default Home;
