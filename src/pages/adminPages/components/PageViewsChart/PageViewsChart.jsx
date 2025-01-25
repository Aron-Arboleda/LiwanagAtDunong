import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchPageViews } from "@controllers/analytics";
import { formatCompressWithLetters, formatMonth } from "@utils/helpers";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PageViewsChart = () => {
  const [chartData, setChartData] = useState(null);
  const [totalViews, setTotalViews] = useState(0); // To store total views
  const [loading, setLoading] = useState(true);

  const colors = ["#fccd2a", "#FDDA5E", "#FEE486", "#FEEDAE"];

  useEffect(() => {
    const loadPageViews = async () => {
      const result = await fetchPageViews();

      if (result.success) {
        const months = Object.keys(result.data).map(formatMonth); // Get months from the returned data
        const views = Object.values(result.data); // Get the views count

        setTotalViews(views.reduce((acc, view) => acc + view, 0)); // Calculate total views

        setChartData({
          labels: months, // Set months as x-axis labels
          datasets: [
            {
              label: "Page Views",
              data: views,
              backgroundColor: colors.slice(0, views.length), // Assign colors dynamically
              borderColor: "#000", // Ensure borders match
              borderWidth: 1,
              borderRadius: {
                topLeft: 10, // Round top left
                topRight: 10, // Round top right
              },
            },
          ],
        });
      } else {
        console.error("Error loading page views:", result.error);
      }

      setLoading(false);
    };

    loadPageViews();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Website Page Views</h2>
      <p className="total-views">
        {formatCompressWithLetters(totalViews)}
      </p>{" "}
      <p className="total-views-description">
        Page views and downloads for the last 4 months
      </p>{" "}
      {/* Display total page views */}
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : chartData ? (
        <div className="chart-wrapper">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    font: {
                      family: "Montserrat", // Change this to your desired font
                      size: 10,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  ticks: {
                    font: {
                      family: "Montserrat", // Change this to your desired font
                      size: 10,
                    },
                    maxTicksLimit: 5,
                  },
                },
              },
              plugins: {
                legend: {
                  display: false, // Hide legend since colors are predefined
                },
                tooltip: {
                  titleFont: {
                    family: "Montserrat", // Font for tooltip title
                    size: 10,
                  },
                  bodyFont: {
                    family: "Montserrat", // Font for tooltip content
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

export default PageViewsChart;
