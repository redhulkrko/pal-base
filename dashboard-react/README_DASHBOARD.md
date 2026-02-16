# Dashboard React Application

This is a React conversion of the original HTML dashboard from `/base/backend/index.html`. The application maintains the exact same styling and functionality while being built with modern React components.

## Overview

The dashboard has been converted into modular React components, making it easier to maintain and extend. Each component has its own CSS file to maintain styling separation and organization.

## Component Structure

```
src/
├── Dashboard.js              # Main dashboard container
├── Dashboard.css             # Dashboard layout styles
└── components/
    ├── Sidebar/              # Navigation sidebar
    │   ├── Sidebar.js
    │   └── Sidebar.css
    ├── TopBar/               # Top navigation bar with search, notifications
    │   ├── TopBar.js
    │   └── TopBar.css
    ├── StatsCard/            # Reusable metric cards
    │   ├── StatsCard.js
    │   └── StatsCard.css
    ├── Charts/               # Chart components (line & doughnut)
    │   ├── EarningsChart.js
    │   ├── RevenueChart.js
    │   └── Charts.css
    ├── Projects/             # Projects list with progress bars
    │   ├── Projects.js
    │   └── Projects.css
    ├── TodoList/             # Todo list component
    │   ├── TodoList.js
    │   └── TodoList.css
    ├── ColorCards/           # Color palette cards
    │   ├── ColorCards.js
    │   └── ColorCards.css
    └── Footer/               # Footer component
        ├── Footer.js
        └── Footer.css
```

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Chart.js** - For rendering charts
- **react-chartjs-2** - React wrapper for Chart.js
- **Bootstrap 5** - CSS framework (from original assets)
- **Font Awesome** - Icon library (from original assets)

## Installation

1. Navigate to the dashboard-react directory:
   ```bash
   cd dashboard-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

Create a production build:
```bash
npm run build
```

The optimized production files will be in the `build/` directory.

## Component Details

### Dashboard (Main Component)
The main container that orchestrates all child components and manages the overall layout.

### Sidebar
- Navigation menu with links to Dashboard, Profile, Table, Login, and Register
- Brand logo with icon
- Collapsible sidebar toggle button

### TopBar
- Search functionality
- Notification dropdown (alerts)
- Message dropdown (inbox)
- User profile dropdown

### StatsCard
A reusable component for displaying metrics with:
- Title
- Value
- Icon
- Optional progress bar
- Color-coded borders (primary, success, info, warning)

### Charts
- **EarningsChart**: Line chart showing earnings over time
- **RevenueChart**: Doughnut chart showing revenue sources breakdown

### Projects
Displays project progress with color-coded progress bars for different completion stages.

### TodoList
Shows a list of todo items with checkboxes and timestamps.

### ColorCards
Displays the application's color palette with hex values.

### Footer
Simple copyright footer.

## Assets

All original assets (CSS, fonts, images) have been copied to the `public/assets/` directory:
- Bootstrap CSS and JS
- Font Awesome fonts and CSS
- Custom CSS files (bss-overrides.css, untitled.css)
- Avatar images
- Other images

## Styling

The application uses a combination of:
1. Bootstrap 5 classes (from original assets)
2. Font Awesome icons (from original assets)
3. Custom CSS per component
4. Original custom CSS files (bss-overrides.css, untitled.css)

The styling exactly matches the original HTML dashboard.

## Browser Support

The application supports all modern browsers that support ES6+ features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements that could be made:
- Add React Router for navigation between pages
- Implement state management (Redux/Context API)
- Add interactive features to charts
- Connect to a backend API
- Add authentication flow
- Make components more dynamic with props/state
