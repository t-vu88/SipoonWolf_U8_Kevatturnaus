import React from 'react';
import Lauantai from './lauantai';
import Sunnuntai from './sunnuntai';
import Ruokailu from './Ruokailu';
import Pukukopit from './Pukukopit';
import Kahvila from './Kahvila';
import { useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1); // Extract the active tab from the URL

  return (
    <div>
      {activeTab === 'lauantai' && <Lauantai />}
      {activeTab === 'sunnuntai' && <Sunnuntai />}
      {activeTab === 'ruokailu' && <Ruokailu />}
      {activeTab === 'pukukopit' && <Pukukopit />}
      {activeTab === 'kahvila' && <Kahvila />}
    </div>
  );
};

export default Content;
