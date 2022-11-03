import MiniChart from 'react-mini-chart';

const MiniCoinChart = (props) => {
  const data = props;
  const ChartData = data.data;
  console.log(ChartData);
  return (
    <MiniChart
      strokeColor="#51db5a"
      activePointColor="#51db5a"
      activePointRadius={8}
      strokeWidth={2}
      labelFontSize={50}
      width={110}
      height={40}
      dataSet={ChartData}
    />
  );
};

export default MiniCoinChart;
