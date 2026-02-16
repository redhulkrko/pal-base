import React from 'react';
import './ColorCards.css';

const ColorCards = () => {
  const colors = [
    { name: 'Primary', color: 'primary', hex: '#4e73df' },
    { name: 'Success', color: 'success', hex: '#1cc88a' },
    { name: 'Info', color: 'info', hex: '#36b9cc' },
    { name: 'Warning', color: 'warning', hex: '#f6c23e' },
    { name: 'Danger', color: 'danger', hex: '#e74a3b' },
    { name: 'Secondary', color: 'secondary', hex: '#858796' },
  ];

  return (
    <div className="col">
      <div className="row">
        {colors.map((colorInfo, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div className={`card text-white bg-${colorInfo.color} shadow`}>
              <div className="card-body">
                <p className="m-0">{colorInfo.name}</p>
                <p className="text-white-50 m-0 small">{colorInfo.hex}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorCards;
