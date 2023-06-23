import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Sidepage1 from './components/pages/Sidepage1';
import Sidepage2 from './components/pages/Sidepage2';
import Sidepage3 from './components/pages/Sidepage3';
import Sidepage4 from './components/pages/Sidepage4';
import Sidepagemain from './components/pages/Sidepagemain'

import './index.css'
import './components/sidebar/Sidebar.css'


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar 적용 */}
        <div className="content-container">
          <Routes>
            <Route path="/Sidepagemain" element={<Sidepagemain />} />
            <Route path="/Sidepage1" element={<Sidepage1 />} />
            <Route path="/Sidepage2" element={<Sidepage2 />} />
            <Route path="/Sidepage3" element={<Sidepage3 />} />
            <Route path="/Sidepage4" element={<Sidepage4 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;