import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement, // Registering the LineElement
  PointElement, // Registering the PointElement
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchDailyVisitors } from "@controllers/analytics"; // Assuming this is your fetch function
import { formatCompressWithLetters } from "@utils/helpers";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement, // Register LineElement
  PointElement, // Register PointElement
  Title,
  Tooltip,
  Legend
);

const DailyVisitorsChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalVisitors, setTotalVisitors] = useState(0); // State to store the total visitors count

  useEffect(() => {
    const loadDailyVisitors = async () => {
      const result = await fetchDailyVisitors();

      if (result.success) {
        const labels = result.data.map((item) => {
          const date = new Date(item.visit_date);
          const options = { weekday: "short" };
          return new Intl.DateTimeFormat("en-US", options).format(date);
        });

        const visitors = result.data.map((item) => item.visitor_count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Visitors",
              data: visitors,
              fill: false,
              backgroundColor: "#fccd2a",
              borderColor: "black",
              tension: 0.2,
            },
          ],
        });

        // Set total visitors count
        setTotalVisitors(result.totalVisitors);
      } else {
        console.error("Error loading daily visitors:", result.error);
      }

      setLoading(false);
    };

    loadDailyVisitors();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Daily Visitor Trends</h2>
      <p className="total-views">{formatCompressWithLetters(totalVisitors)}</p>
      <p className="total-views-description">Total unique visitors count</p>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : chartData ? (
        <div className="chart-wrapper">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    font: {
                      family: "Montserrat", // Font for x-axis labels
                      size: 10,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  ticks: {
                    font: {
                      family: "Montserrat",
                      size: 10,
                    },
                    maxTicksLimit: 7,
                  },
                },
              },
              plugins: {
                legend: {
                  display: false, // Hide legend if not needed
                },
                tooltip: {
                  titleFont: {
                    family: "Montserrat",
                    size: 10,
                  },
                  bodyFont: {
                    family: "Montserrat",
                    size: 9,
                  },
                },
              },
            }}
          />
        </div>
      ) : (
        <p className="error-text">Failed to load data</p>
      )}
    </div>
  );
};

export default DailyVisitorsChart;
