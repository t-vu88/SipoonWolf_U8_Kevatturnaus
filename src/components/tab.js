import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tab = ({ label, tabName }) => {
  const location = useLocation();
  const isActive = location.pathname === `/${tabName}`;

  return (
    <Link to={`/${tabName}`} className={`tab-button ${isActive ? 'active' : ''}`}>
      {label}
    </Link>
  );
};

export default Tab;