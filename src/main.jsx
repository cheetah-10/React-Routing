import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle (includes Popper.js)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
