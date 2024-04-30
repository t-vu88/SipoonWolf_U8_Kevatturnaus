// Tab.js
// Tab.js
import React from 'react';

const Tab = ({ label, isActive, onClick }) => (
  <button className={`tab-button ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </button>
);

export default Tab;
