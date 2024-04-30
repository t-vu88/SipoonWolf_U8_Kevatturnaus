import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Tab from './components/tab';
import Content from './components/content';

function App() {
  const [activeTab, setActiveTab] = useState('lauantai');

  const switchMainTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Router> {/* Wrap your entire application with BrowserRouter */}
      <div className="App">
        <header className="App-header">
          <p>
             Sipoon Wolfin U8 & U7 
          </p>
          <p>  Kotiturnaus 2024</p>
        </header>
        <div className="tabs">
          <Tab label="Lauantai 18.05.24" isActive={activeTab === 'lauantai'} onClick={() => switchMainTab('lauantai')} />
          <Tab label="Sunnuntai 19.05.24" isActive={activeTab === 'sunnuntai'} onClick={() => switchMainTab('sunnuntai')} />
          <Tab label="Ruokailu" isActive={activeTab === 'ruokailu'} onClick={() => switchMainTab('ruokailu')} />
          <Tab label="Pukukopit" isActive={activeTab === 'pukukopit'} onClick={() => switchMainTab('pukukopit')} />
          <Tab label="Kahvila" isActive={activeTab === 'kahvila'} onClick={() => switchMainTab('kahvila')} />
        </div>
        <Content activeTab={activeTab} />
      </div>
    </Router>
  );
}

export default App;
