import { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await searchUsers({
        username,
        location,
        minRepos: minRepos ? parseInt(minRepos) : undefined,
      });
      if (data && data.length > 0) {
        setUserData(data);
      } else {
        setError('No users found matching the criteria');
      }
    } catch (err) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min repos count (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-400"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      {userData && !loading && !error && (
        <div className="mt-4 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="text-center border p-4 rounded-md">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold mt-2">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 block"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default Search;
