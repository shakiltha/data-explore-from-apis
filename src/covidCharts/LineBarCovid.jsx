import PropTypes from "prop-types";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const TestCharts = ({ monthlyCovid }) => {
  const monthlyInIcuData = [];
  // add death data to monthlyDeathData array
  for (let i = 0; i < 14; i++) {
    const currentMonthData = monthlyCovid[i];
    monthlyInIcuData.push({
      name: i + " month",
      uv: currentMonthData?.hospitalizedCumulative,
      pv: currentMonthData?.hospitalizedCumulative,
    });
  }

  monthlyInIcuData.reverse();

  const numberArray = [];
  monthlyInIcuData.map((obj) => {
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
    monthlyInIcuData[i].name = newReversedArray[i] + " month";
  }

  return (
    <div className="mt-4 w-full h-[30rem] lg:w-[68%] lg:h-[40rem] lg:ml-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={monthlyInIcuData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, uv } = payload[0].payload;
                return (
                  <div className="text-white">
                    <p>{name}</p>
                    <p>InICU: {uv}</p>
                  </div>
                );
              }
            }}
          />
          <Legend formatter={() => "Covid Data - 2020-21 (InICU) - US"} />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

TestCharts.propTypes = {
  monthlyCovid: PropTypes.array.isRequired,
};

export default TestCharts;
