# PAL Base Dashboard Project

This repository contains both the original HTML dashboard template and its React Vite conversion.

## Project Structure

```
pal-base/
├── base/backend/          # Original HTML dashboard template
│   ├── index.html        # Main dashboard page
│   ├── assets/           # CSS, JS, images, fonts
│   └── ...
└── react-dashboard/      # React Vite conversion (NEW)
    ├── src/              # React components and source code
    ├── public/           # Static assets
    └── README.md         # Detailed documentation
```

## React Dashboard (NEW)

A modern React application converted from the original HTML template, featuring:
- Component-based architecture
- Vite for fast development and building
- Bootstrap 5 for styling
- Chart.js for data visualization
- Fully responsive design

### Quick Start

```bash
cd react-dashboard
npm install
npm run dev
```

Visit http://localhost:5173/ to see the dashboard.

For detailed documentation, see [react-dashboard/README.md](react-dashboard/README.md)

## Original HTML Template

The original dashboard template is located in `base/backend/`. It uses:
- Bootstrap 5
- FontAwesome icons
- Chart.js for visualizations
- Custom CSS

To view the original, open `base/backend/index.html` in a web browser.

## Comparison

| Feature | Original HTML | React Version |
|---------|---------------|---------------|
| Technology | Static HTML/CSS/JS | React 18 + Vite |
| Components | Monolithic file | 11 separate components |
| Maintainability | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Build System | None | Vite (fast HMR) |
| Development | Manual refresh | Hot Module Replacement |
| Production | Serve files directly | Optimized build |

## Features

Both versions include:
- ✅ Responsive sidebar navigation
- ✅ Top navigation with search, notifications, messages
- ✅ Dashboard statistics cards
- ✅ Interactive charts (line and doughnut)
- ✅ Project progress bars
- ✅ Todo list with checkboxes
- ✅ Color palette reference
- ✅ Responsive footer

## License

This project is for demonstration purposes.
