import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';  // Import the new component
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Add the Header, MainContent, and Footer components here */}
      <Header />
      <MainContent />
      <Footer />
      
      {/* You can keep the WelcomeMessage component if you want */}
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

