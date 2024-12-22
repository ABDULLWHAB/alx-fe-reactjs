import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = [
    { name: "Alice", age: 25, bio: "Loves hiking and photography" },
    { name: "Bob", age: 30, bio: "Enjoys traveling and coding" },
  ];

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <Footer />

      {/* User Profiles */}
      {userData.map((user, index) => (
        <UserProfile key={index} name={user.name} age={user.age} bio={user.bio} />
      ))}

      <Counter />
      <WelcomeMessage />

      {/* Optional logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </UserContext.Provider>
  );
}

export default App;


