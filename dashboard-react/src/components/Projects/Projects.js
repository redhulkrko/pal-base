import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Server migration', percentage: 20, color: 'danger' },
    { name: 'Sales tracking', percentage: 40, color: 'warning' },
    { name: 'Customer Database', percentage: 60, color: 'primary' },
    { name: 'Payout Details', percentage: 80, color: 'info' },
    { name: 'Account setup', percentage: 100, color: 'success', complete: true },
  ];

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="text-primary m-0 fw-bold">Projects</h6>
      </div>
      <div className="card-body">
        {projects.map((project, index) => (
          <div key={index}>
            <h4 className="small fw-bold">
              {project.name}
              <span className="float-end">
                {project.complete ? 'Complete!' : `${project.percentage}%`}
              </span>
            </h4>
            <div className="progress mb-4">
              <div
                className={`progress-bar bg-${project.color}`}
                aria-valuenow={project.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${project.percentage}%` }}
              >
                <span className="visually-hidden">{project.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
