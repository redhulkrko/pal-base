import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, icon, borderColor, progress }) => {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <div className={`card shadow py-2 border-left-${borderColor}`}>
        <div className="card-body">
          <div className="row g-0 align-items-center">
            <div className="col me-2">
              <div className={`text-uppercase text-${borderColor} mb-1 fw-bold text-xs`}>
                <span>{title}</span>
              </div>
              {progress !== undefined ? (
                <div className="row g-0 align-items-center">
                  <div className="col-auto">
                    <div className="text-dark me-3 mb-0 fw-bold h5">
                      <span>{value}</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm">
                      <div
                        className={`progress-bar bg-${borderColor}`}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${progress}%` }}
                      >
                        <span className="visually-hidden">{progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-dark mb-0 fw-bold h5">
                  <span>{value}</span>
                </div>
              )}
            </div>
            <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
