import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Carousel from './components/Carousel';
import DashboardCards from './components/DashboardCards';
import ChartsSection from './components/ChartsSection';
import ProjectsSection from './components/ProjectsSection';
import ColorPalette from './components/ColorPalette';
import Footer from './components/Footer';
import Films from './components/Films';
import './App.css';

function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 className="text-dark mb-0">Dashboard</h3>
          <a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#">
            <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
          </a>
        </div>
        <Carousel />
        <DashboardCards />
        <ChartsSection />
        <div className="row">
          <ProjectsSection />
          <ColorPalette />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/films" element={<Films />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
