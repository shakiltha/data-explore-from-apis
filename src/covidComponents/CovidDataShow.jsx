import PropTypes from "prop-types";

const CovidDataShow = ({ covidData }) => {
  const {
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
    <>
      <td>
        {year}/{month}/{day}
      </td>
      <td>{deathFormatted}</td>
      <td>{deathIncreaseFormatted}</td>
      <td>{hospitalizedCumulativeFormatting}</td>
      <td>{hospitalizedCurrentlyFormatting}</td>
      <td>{hospitalizedIncreasingFormatting}</td>
      <td>{icuCumulativeFormatting}</td>
      <td>{icuCurrentlyFormatting}</td>
      <td>{negativeFormatting}</td>
      <td>{negativeIncreaseFormatting}</td>
      <td>{ventilatorCumulativeFormatting}</td>
      <td>{ventilatorCurrentlyFormatting}</td>
      <td>{pendingFormatting}</td>
      <td>{positiveFormatting}</td>
      <td>{positiveIncreaseFormatting}</td>
      <td>{states}</td>
      <td>{testsFormatting}</td>
      <td>{testsIncreasingFormatting}</td>
    </>
  );
};

CovidDataShow.propTypes = {
  covidData: PropTypes.object.isRequired,
};
export default CovidDataShow;
