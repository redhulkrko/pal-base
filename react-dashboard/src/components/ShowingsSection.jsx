import React from 'react';

const ShowingsSection = () => {
  return (
    <div className="content-section">
      <div className="px-5 container">
        <h2 className="text-center mb-3">Heading</h2>
        <div className="text-center mb-4 showtimes-intro">
          <p className="mb-3">Explore our latest film selection and book your tickets for the ideal showtime.</p>
          <p className="mb-3">
            <small>Swipe or scroll through the dates below to view different days</small>
          </p>
          <a className="schedule-link" href="#">View Full Schedule →</a>
        </div>
        <div className="row">
          <div className="mb-4 col-md-4">
            <div className="p-0 card content-card clickable-card" role="button" tabIndex="0">
              <div className="card-graphic">
                <span className="format-badge">2D</span>
              </div>
              <div className="card-body">
                <div className="card-title h5"></div>
                <p className="text-muted mb-3 card-text">Paragraph</p>
                <div className="showtimes-list">
                  <h6 className="showtimes-label">Heading</h6>
                  <div className="times-grid">
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 col-md-4">
            <div className="p-0 card content-card clickable-card" role="button" tabIndex="0">
              <div className="card-graphic">
                <span className="format-badge">2D</span>
              </div>
              <div className="card-body">
                <div className="card-title h5"></div>
                <p className="text-muted mb-3 card-text">Paragraph</p>
                <div className="showtimes-list">
                  <h6 className="showtimes-label">Heading</h6>
                  <div className="times-grid">
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 col-md-4">
            <div className="p-0 card content-card clickable-card" role="button" tabIndex="0">
              <div className="card-graphic">
                <span className="format-badge">2D</span>
              </div>
              <div className="card-body">
                <div className="card-title h5"></div>
                <p className="text-muted mb-3 card-text">Paragraph</p>
                <div className="showtimes-list">
                  <h6 className="showtimes-label">Heading</h6>
                  <div className="times-grid">
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                    <button className="btn btn-outline-primary btn-sm time-button" type="button">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingsSection;
