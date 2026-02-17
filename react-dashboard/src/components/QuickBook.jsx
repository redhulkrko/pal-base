import React from 'react';

const QuickBook = () => {
  return (
    <div className="quick-book-section">
      <div className="px-4 container">
        <div className="text-center mb-4">
          <h2 className="text-white">Quick Book</h2>
          <p>Select your movie, date, and time to book tickets instantly</p>
        </div>
        <div className="quick-book-bar">
          <div className="align-items-end g-3 row">
            <div className="col-lg-3 col-md-6 col-12">
              <div>
                <label className="form-label quick-book-label">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    fill="currentColor" 
                    viewBox="0 0 16 16" 
                    className="bi bi-film me-2"
                  >
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"></path>
                  </svg>
                  Select Film
                </label>
                <select className="quick-book-select form-select">
                  <optgroup label="This is a group">
                    <option value="12" defaultValue>Choose a film...</option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div>
                <label className="form-label quick-book-label">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    fill="currentColor" 
                    viewBox="0 0 16 16" 
                    className="bi bi-calendar me-2"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"></path>
                  </svg>
                  Select Date
                </label>
                <select className="quick-book-select form-select">
                  <optgroup label="This is a group">
                    <option value="12" defaultValue>Choose a date...</option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div>
                <label className="form-label quick-book-label">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1em" 
                    height="1em" 
                    fill="currentColor" 
                    viewBox="0 0 16 16" 
                    className="bi bi-clock me-2"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"></path>
                  </svg>
                  Select Time
                </label>
                <select className="quick-book-select form-select">
                  <optgroup label="This is a group">
                    <option value="12" defaultValue>Choose a time...</option>
                    <option value="13">This is item 2</option>
                    <option value="14">This is item 3</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <button className="btn btn-danger w-100 quick-book-button" type="button">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickBook;
