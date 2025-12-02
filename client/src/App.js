// ======================================================
// App.jsx
// Main application entry point
// - Sets up React Router for page navigation
// - Currently contains the HeroShowcase page
// ======================================================

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css' // Global styles
import HeroShowcase from './pages/HeroShowcase' // Main hero showcase page

function App() {
  return (
    // Router wraps the entire app to enable client-side routing
    <Router>
      {/* Routes container defines all app routes */}
      <Routes>
        {/* 
          Route: "/" 
          - Path for the main Marvel Rivals project landing page
          - Renders the HeroShowcase component
        */}
        <Route path="/" element={<HeroShowcase />} />
      </Routes>
    </Router>
  )
}

// Export the App component as default for index.js usage
export default App
