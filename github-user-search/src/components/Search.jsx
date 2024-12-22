import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      if (data) {
        setUserData(data);
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (err) {
      setError('Error fetching user data');
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
