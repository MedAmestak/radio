import React from 'react';

function Home() {

  const handleLogin = () => {
    alert('Login button clicked');
  }

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Home;