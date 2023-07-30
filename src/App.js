import React, { useState } from 'react';
import ThankYouPage from './Components/ThankyouPage';
import LoginForm from './Components/LoginForm';
import ChallengesList from './Components/ChallengesList';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    
    <div>
      {isLoggedIn ? <ThankYouPage /> : <LoginForm onLogin={handleLogin} />}
      <br/>
      <ChallengesList /> 
    </div>
  );
};

export default App;
