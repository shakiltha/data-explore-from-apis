import PropTypes from "prop-types";
import CovidDataShow from "./CovidDataShow";

const CovidData = ({ covid }) => {
  return (
    <div>
      {covid.map((elem, idx) => (
        <CovidDataShow key={idx} covidData={elem} />
      ))}
      <li>Hello World</li>
    </div>
  );
};

CovidData.propTypes = {
  covid: PropTypes.array.isRequired,
};

export default CovidData;
