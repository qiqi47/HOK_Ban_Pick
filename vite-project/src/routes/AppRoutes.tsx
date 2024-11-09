// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Normal from '../pages/Normal';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Normal />} />
        <Route path="/match" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
