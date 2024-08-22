import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineCovid = ({ monthlyCovid }) => {
  // monthly hospitalized data array
  const monthlyHospitalizedData = [];
  // add death data to monthlyDeathData array
  for (let i = 0; i < 14; i++) {
    const currentMonthData = monthlyCovid[i];
    monthlyHospitalizedData.push({
      name: i + " month",
      uv: currentMonthData?.hospitalizedCumulative,
      pv: currentMonthData?.hospitalizedCumulative,
    });
  }

  monthlyHospitalizedData.reverse();

  const numberArray = [];
  monthlyHospitalizedData.map((obj) => {
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
    monthlyHospitalizedData[i].name = newReversedArray[i] + " month";
  }

  //   console.log(monthlyHospitalizedData);

  return (
    <div className="mt-4 w-full h-[30rem] lg:w-3/4 lg:h-[40rem] lg:ml-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={monthlyHospitalizedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const { name, uv } = payload[0].payload;
                return (
                  <div className="text-white">
                    <p>{name}</p>
                    <p>Hospitalized: {uv}</p>
                  </div>
                );
              }
            }}
          />
          <Legend
            formatter={() => "Covid Data - 2020-21 (Hospitalized) - US"}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineCovid.propTypes = {
  monthlyCovid: PropTypes.array.isRequired,
};

export default LineCovid;
