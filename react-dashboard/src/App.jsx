import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardCards from './components/DashboardCards';
import ChartsSection from './components/ChartsSection';
import ProjectsSection from './components/ProjectsSection';
import ColorPalette from './components/ColorPalette';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Dashboard</h3>
              <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#">
                <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
              </a>
            </div>
            <DashboardCards />
            <ChartsSection />
            <div className="row">
              <ProjectsSection />
              <ColorPalette />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
