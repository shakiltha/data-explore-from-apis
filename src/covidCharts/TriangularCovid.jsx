import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const TriangularCovid = ({ monthlyCovid }) => {
  const monthlyInIncubatorData = [];
  // add death data to monthlyDeathData array
  for (let i = 0; i < 14; i++) {
    const currentMonthData = monthlyCovid[i];
    monthlyInIncubatorData.push({
      name: i + " month",
      uv: currentMonthData?.hospitalizedCumulative,
      pv: currentMonthData?.hospitalizedCumulative,
    });
  }

  monthlyInIncubatorData.reverse();

  const numberArray = [];
  monthlyInIncubatorData.map((obj) => {
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
    monthlyInIncubatorData[i].name = newReversedArray[i] + " month";
  }

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-4 w-full h-[30rem] lg:w-3/4 lg:h-[40rem] lg:ml-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={monthlyInIncubatorData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend formatter={() => "Covid - 2020-21 (InIncubator) - US"} />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {monthlyInIncubatorData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

TriangularCovid.propTypes = {
  monthlyCovid: PropTypes.array.isRequired,
};

export default TriangularCovid;
