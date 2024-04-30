import React, { useState } from 'react';
import { useUser } from './components/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginLogoutButtons = () => {
  const { user, login, logout } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    login(username, password);
    setUsername(''); // Clear username input after login
    setPassword(''); // Clear password input after login
    navigate('/'); // Redirect to the home page after login
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <div>
      {user ? (
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Käyttäjätunnus"
            className="login-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Salasana"
            className="login-input"
          />
          <button type="submit" className="login-button">Kirjaudu sisään</button>
        </form>
      )}
    </div>
  );
};

export default LoginLogoutButtons;
