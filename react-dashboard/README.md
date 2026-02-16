# React Dashboard - Vite Project

This is a React-based dashboard application converted from the original HTML/CSS template. It uses Vite for fast development and building, Bootstrap for styling, and Chart.js for data visualization.

## Features

- **Responsive Dashboard Layout**: Sidebar navigation and top navigation bar
- **Statistics Cards**: Display key metrics (earnings, tasks, pending requests)
- **Interactive Charts**: Line chart for earnings overview and doughnut chart for revenue sources
- **Progress Tracking**: Project progress bars and todo list
- **Modern Tech Stack**: React 18, Vite, Bootstrap 5, Chart.js

## Project Structure

```
react-dashboard/
├── public/
│   └── assets/          # Static assets (images, fonts, Bootstrap CSS/JS)
├── src/
│   ├── components/      # React components
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── DashboardCards.jsx
│   │   ├── ChartsSection.jsx
│   │   ├── EarningsChart.jsx
│   │   ├── RevenueChart.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── TodoList.jsx
│   │   ├── ColorPalette.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 24.x or higher
- npm 11.x or higher

### Installation

1. Navigate to the project directory:
   ```bash
   cd react-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build the application for production:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Dependencies

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **bootstrap**: ^5.3.3
- **@popperjs/core**: ^2.11.8
- **chart.js**: ^4.4.8
- **react-chartjs-2**: ^5.3.0

## Components

### Sidebar
Left navigation panel with links to different pages (Dashboard, Profile, Table, Login, Register).

### Topbar
Top navigation bar with search functionality, notifications, messages, and user profile dropdown.

### DashboardCards
Four statistics cards showing monthly earnings, annual earnings, tasks progress, and pending requests.

### ChartsSection
Contains two charts:
- **EarningsChart**: Line chart showing earnings over time
- **RevenueChart**: Doughnut chart showing revenue sources distribution

### ProjectsSection
Displays project progress bars and includes the TodoList component.

### TodoList
Interactive todo list with checkboxes for task completion.

### ColorPalette
Grid of colored cards showing the application's color scheme.

### Footer
Simple footer with copyright information.

## Styling

The application uses Bootstrap 5 for base styling with custom CSS for component-specific styles. Each component has its own CSS file for better maintainability.

## Original Template

This React application is a conversion of the original HTML dashboard template located in `base/backend/index.html`.

