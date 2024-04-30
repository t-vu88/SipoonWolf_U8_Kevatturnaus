import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Tab from './components/tab';
import Content from './components/content';
import { UserProvider, useUser } from './components/UserContext';
import LoginLogoutButtons from './LoginLogoutButtons';
function App() {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
}

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('');
  const { user, login, logout } = useUser(); // Access user context

  
  return (
    <div className="App">
      <header className="App-header">
        <p>Sipoon Wolfin U8 & U7</p>
        <p>Kevätturnaus 2024</p>
      </header>
      <div className="content-container">
      <div className="login-logout-button">
        <LoginLogoutButtons />
        {!user && (
        <p style={{ fontSize: '16px', color: 'gray' }}>Huomio! Käyttäjätunnus & salasana : turnaus</p>)
        }
        </div>
    
      {user ? (
        <>
          <div className="tabs">
            <Tab label="Lauantai 18.05.24" tabName="lauantai" onClick={() => setActiveTab('lauantai')} className={activeTab === 'lauantai' ? 'active' : ''} />
            <Tab label="Sunnuntai 19.05.24" tabName="sunnuntai" onClick={() => setActiveTab('sunnuntai')} />
            <Tab label="Pukukopit" tabName="pukukopit" onClick={() => setActiveTab('Pukukopit')} />
            <Tab label="Ruokailu" tabName="ruokailu" onClick={() => setActiveTab('Ruokailu')} />
            <Tab label="Kahvila & Arpajaiset" tabName="kahvila" onClick={() => setActiveTab('Kahvila')} />
          </div>
          <Content activeTab={activeTab} />
        </>
      ) : (
        null // No content to display if user is not logged in
      )}
    </div>
    </div>
  );
};

export default App;



