import React, { useState } from 'react';
import './App.css';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('User not found or an error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-400"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {userData && !loading && !error && (
          <div className="mt-4 text-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2">{userData.name}</h2>
            <p className="text-gray-600">{userData.bio}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 block"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
