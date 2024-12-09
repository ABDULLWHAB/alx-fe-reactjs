import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';  // Import the WelcomeMessage component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';  // Import the new UserProfile component
import Counter from './components/Counter';  // Import the Counter component

function App() {
  return (
    <>
      {/* Add the Header, MainContent, and Footer components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Use the UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys traveling and coding" 
      />

      {/* Add the Counter component */}
      <Counter />

      {/* Optional: if you want to keep the WelcomeMessage component */}
      <WelcomeMessage />

      {/* Optional: if you want to keep the Vite + React logos */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
