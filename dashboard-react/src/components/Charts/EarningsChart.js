import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './Charts.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const EarningsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Earnings',
        data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000],
        fill: true,
        backgroundColor: 'rgba(78, 115, 223, 0.05)',
        borderColor: 'rgba(78, 115, 223, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgb(234, 236, 244)',
          drawBorder: false,
          drawTicks: false,
          borderDash: [2],
          drawOnChartArea: false,
        },
        ticks: {
          color: '#858796',
          padding: 20,
        },
      },
      y: {
        grid: {
          color: 'rgb(234, 236, 244)',
          drawBorder: false,
          drawTicks: false,
          borderDash: [2],
        },
        ticks: {
          color: '#858796',
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="col-lg-7 col-xl-8">
      <div className="card shadow mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="text-primary m-0 fw-bold">Earnings Overview</h6>
          <div className="dropdown no-arrow">
            <button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
              <i className="fas fa-ellipsis-v text-gray-400"></i>
            </button>
            <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
              <p className="text-center dropdown-header">dropdown header:</p>
              <button type="button" className="dropdown-item" onClick={() => {}}>&nbsp;Action</button>
              <button type="button" className="dropdown-item" onClick={() => {}}>&nbsp;Another action</button>
              <div className="dropdown-divider"></div>
              <button type="button" className="dropdown-item" onClick={() => {}}>&nbsp;Something else here</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart-area">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
