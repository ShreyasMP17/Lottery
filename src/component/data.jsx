// src/components/MilanMorningChart.js
import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

const MilanMorningChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Replace with your data fetching logic
    fetch('/path-to-your-data-endpoint')
      .then(response => response.json())
      .then(data => {
        // Process and set the chart data
        setChartData({
          labels: data.dates,
          datasets: [
            {
              label: 'Milan Morning Jodi Chart',
              data: data.values,
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Milan Morning Jodi Chart</h2>
      <h1 data={chartData} h1/>
    </div>
  );
};

export default MilanMorningChart;
