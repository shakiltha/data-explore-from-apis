import PropTypes from "prop-types";
import CovidDataShow from "./CovidDataShow";

const CovidData = ({ covid, loading }) => {
  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }
  return (
    <div className="z-10 mt-2 lg:ml-80 ">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Death</th>
              <th>Death Increase</th>
              <th>Hospitalized Cumulative</th>
              <th>Hospitalized Currently</th>
              <th>Hospitalized Increase</th>
              <th>ICU Cumulative</th>
              <th>ICU Currently</th>
              <th>Total Negative</th>
              <th>Negative Increase</th>
              <th>Ventilator Cumulative</th>
              <th>Ventilator Currently</th>
              <th>Pending</th>
              <th>Positive</th>
              <th>Positive Increase</th>
              <th>States</th>
              <th>Total Test</th>
              <th>Test Increase</th>
            </tr>
          </thead>
          <tbody>
            {covid.map((elem, idx) => (
              <tr key={idx}>
                <CovidDataShow covidData={elem} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CovidData.propTypes = {
  covid: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CovidData;
