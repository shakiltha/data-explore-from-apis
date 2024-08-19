import PropTypes from "prop-types";

const CovidDataShow = ({ covidData }) => {
  let {
    date,
    death,
    deathIncrease,
    hospitalizedCumulative,
    hospitalizedCurrently,
    hospitalizedIncrease,
    inIcuCumulative,
    inIcuCurrently,
    negative,
    negativeIncrease,
    onVentilatorCumulative,
    onVentilatorCurrently,
    pending,
    positive,
    positiveIncrease,
    states,
    totalTestResults,
    totalTestResultsIncrease,
  } = covidData;

  //   Date formatting
  let dateString = date.toString();
  let year = dateString.slice(0, 4);
  let month = dateString.slice(4, 6);
  let day = dateString.slice(6);

  //   formatter
  let formatter = new Intl.NumberFormat("en-US");
  // death formatting
  const deathFormatted = formatter.format(death);
  const deathIncreaseFormatted = formatter.format(deathIncrease);
  //   hospitalized formatting
  const hospitalizedCumulativeFormatting = formatter.format(
    hospitalizedCumulative
  );
  const hospitalizedCurrentlyFormatting = formatter.format(
    hospitalizedCurrently
  );
  const hospitalizedIncreasingFormatting =
    formatter.format(hospitalizedIncrease);
  //   icu formatting
  const icuCumulativeFormatting = formatter.format(inIcuCumulative);
  const icuCurrentlyFormatting = formatter.format(inIcuCurrently);

  // negative formatting
  const negativeFormatting = formatter.format(negative);
  const negativeIncreaseFormatting = formatter.format(negativeIncrease);

  // ventilator formatting
  const ventilatorCumulativeFormatting = formatter.format(
    onVentilatorCumulative
  );
  const ventilatorCurrentlyFormatting = formatter.format(onVentilatorCurrently);

  // pending
  const pendingFormatting = formatter.format(pending);

  // positive formatting
  const positiveFormatting = formatter.format(positive);
  const positiveIncreaseFormatting = formatter.format(positiveIncrease);

  // total tests formatting
  const testsFormatting = formatter.format(totalTestResults);
  const testsIncreasingFormatting = formatter.format(totalTestResultsIncrease);

  return (
    <div>
      <li>
        Date: {year}/{month}/{day}
      </li>
      <li>Total Death: {deathFormatted}</li>
      <li>Death Increase: {deathIncreaseFormatted}</li>
      <li>Hospitalized Cumulative: {hospitalizedCumulativeFormatting}</li>
      <li>Hospitalized Currently: {hospitalizedCurrentlyFormatting}</li>
      <li>Hospitalized Increase: {hospitalizedIncreasingFormatting}</li>
      <li>In ICU Cumulative: {icuCumulativeFormatting}</li>
      <li>In ICU Currently: {icuCurrentlyFormatting}</li>
      <li>Negative: {negativeFormatting}</li>
      <li>Negative Increase: {negativeIncreaseFormatting}</li>
      <li>On Ventilator Cumulative: {ventilatorCumulativeFormatting}</li>
      <li>On Ventilator Currently: {ventilatorCurrentlyFormatting}</li>
      <li>Pending: {pendingFormatting}</li>
      <li>Positive: {positiveFormatting}</li>
      <li>Positive Increase: {positiveIncreaseFormatting}</li>
      <li>States: {states}</li>
      <li>Total Test Results: {testsFormatting}</li>
      <li>Total Test Results Increase: {testsIncreasingFormatting}</li>
    </div>
  );
};

CovidDataShow.propTypes = {
  covidData: PropTypes.object.isRequired,
};
//   date: PropTypes.number.isRequired,
//   dateChecked: PropTypes.number.isRequired,
//   death: PropTypes.number.isRequired,
//   deathIncrease: PropTypes.number.isRequired,
//   hospitalized: PropTypes.number.isRequired,
//   hospitalizedCumulative: PropTypes.number.isRequired,
//   hospitalizedCurrently: PropTypes.number.isRequired,
//   hospitalizedIncrease: PropTypes.number.isRequired,
//   inIcuCumulative: PropTypes.number.isRequired,
//   inIcuCurrently: PropTypes.number.isRequired,
//   lastModified: PropTypes.number.isRequired,
//   negative: PropTypes.number.isRequired,
//   negativeIncrease: PropTypes.number.isRequired,
//   onVentilatorCumulative: PropTypes.number.isRequired,
//   onVentilatorCurrently: PropTypes.number.isRequired,
//   pending: PropTypes.number.isRequired,
//   positive: PropTypes.number.isRequired,
//   positiveIncrease: PropTypes.number.isRequired,
//   states: PropTypes.number.isRequired,
//   totalTestResults: PropTypes.number.isRequired,
//   totalTestResultsIncrease: PropTypes.number.isRequired,
export default CovidDataShow;
