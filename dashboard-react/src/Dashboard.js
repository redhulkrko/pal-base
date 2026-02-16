import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import StatsCard from './components/StatsCard/StatsCard';
import EarningsChart from './components/Charts/EarningsChart';
import RevenueChart from './components/Charts/RevenueChart';
import Projects from './components/Projects/Projects';
import TodoList from './components/TodoList/TodoList';
import ColorCards from './components/ColorCards/ColorCards';
import Footer from './components/Footer/Footer';
import './Dashboard.css';

function Dashboard() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
                <button className="btn btn-primary btn-sm d-none d-sm-inline-block" type="button">
                  <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
                </button>
              </div>
              <div className="row">
                <StatsCard
                  title="Earnings (monthly)"
                  value="$40,000"
                  icon="fa-calendar"
                  borderColor="primary"
                />
                <StatsCard
                  title="Earnings (annual)"
                  value="$215,000"
                  icon="fa-dollar-sign"
                  borderColor="success"
                />
                <StatsCard
                  title="Tasks"
                  value="50%"
                  icon="fa-clipboard-list"
                  borderColor="info"
                  progress={50}
                />
                <StatsCard
                  title="Pending Requests"
                  value="18"
                  icon="fa-comments"
                  borderColor="warning"
                />
              </div>
              <div className="row">
                <EarningsChart />
                <RevenueChart />
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <Projects />
                  <TodoList />
                </div>
                <ColorCards />
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top" aria-label="Scroll to top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
