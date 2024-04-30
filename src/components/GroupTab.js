// GroupTab.js
import React from 'react';

const GroupTab = ({ groupName, isActive, onClick }) => {
  return (
    <a className={isActive ? 'active' : ''} onClick={onClick}>{groupName}</a>
  );
};

export default GroupTab;
