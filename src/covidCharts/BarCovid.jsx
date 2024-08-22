import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import LineCovid from "./LineCovid";
import LineBarCovid from "./LineBarCovid";
import TriangularCovid from "./TriangularCovid";

const BarCovid = ({ covid }) => {
  const monthlyCovid = [];

  for (let i = 0; i < covid.length; i += 30) {
    const {
      death,
      hospitalizedCumulative,
      inIcuCumulative,
      onVentilatorCumulative,
    } = covid[i];
    monthlyCovid.push({
      death,
      hospitalizedCumulative,
      inIcuCumulative,
      onVentilatorCumulative,
    });
  }

  // console.log(monthlyCovid);
  // monthly death data array
  const monthlyDeathData = [];
  // add death data to monthlyDeathData array
  for (let i = 0; i < 14; i++) {
    const currentMonthData = monthlyCovid[i];
    monthlyDeathData.push({
      name: i + " month",
      uv: currentMonthData?.death,
      pv: currentMonthData?.death,
    });
  }
  monthlyDeathData.reverse();
  const numberArray = [];
  monthlyDeathData.map((obj) => {
    let name = obj.name;
    const slicedNumber = Number(name.split("").slice(0, 1));
    numberArray.push(slicedNumber);
  });
  const newReversedArray = numberArray.reverse();
  newReversedArray[0] = 1;
  newReversedArray[1] = 2;
  newReversedArray[2] = 3;
  newReversedArray[3] = 4;
  newReversedArray[4] = 5;
  newReversedArray[5] = 6;
  newReversedArray[6] = 7;
  newReversedArray[7] = 8;
  newReversedArray[8] = 9;
  newReversedArray[9] = 10;
  newReversedArray[10] = 11;
  newReversedArray[11] = 12;
  newReversedArray[12] = 13;
  newReversedArray[13] = 14;

  // console.log(newReversedArray);

  for (let i = 0; i < 14; i++) {
    monthlyDeathData[i].name = newReversedArray[i] + " month";
  }
  // console.log(monthlyDeathData);

  return (
    <div>
      <div className="mt-4 w-full h-[30rem] lg:w-3/4 lg:h-[40rem] lg:ml-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={monthlyDeathData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const { name, uv } = payload[0].payload;
                  return (
                    <div className="text-white">
                      <p>{name}</p>
                      <p>Death: {uv}</p>
                    </div>
                  );
                }
              }}
            />
            {/* Update Caption of the chart */}
            <Legend formatter={() => "Covid Data - 2020-21 (Death) - US"} />
            <Bar yAxisId="left" dataKey="pv" fill="#8884d8" barSize={40} />
            {/* <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <LineCovid monthlyCovid={monthlyCovid} />
      <LineBarCovid monthlyCovid={monthlyCovid} />
      <TriangularCovid monthlyCovid={monthlyCovid} />
    </div>
  );
};

BarCovid.propTypes = {
  covid: PropTypes.array.isRequired,
};

export default BarCovid;
