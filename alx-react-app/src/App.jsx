import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';  // Import the WelcomeMessage component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';  // Import the new UserProfile component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Add the Header, MainContent, and Footer components here */}
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

      {/* Optional: if you want to keep the WelcomeMessage component */}
      <WelcomeMessage />

      {/* Optional: if you want to keep the counter functionality */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

