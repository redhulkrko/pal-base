import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Charts.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = () => {
  const data = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
      {
        label: '',
        data: [50, 30, 15],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
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
  };

  return (
    <div className="col-lg-5 col-xl-4">
      <div className="card shadow mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h6 className="text-primary m-0 fw-bold">Revenue Sources</h6>
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
            <Doughnut data={data} options={options} />
          </div>
          <div className="text-center mt-4 small">
            <span className="me-2">
              <i className="fas fa-circle text-primary"></i>&nbsp;Direct
            </span>
            <span className="me-2">
              <i className="fas fa-circle text-success"></i>&nbsp;Social
            </span>
            <span className="me-2">
              <i className="fas fa-circle text-info"></i>&nbsp;Refferal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
