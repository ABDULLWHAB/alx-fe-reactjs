import axios from 'axios';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com';

export const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    const response = await axios.get(`${API_URL}/search/users?${query}`, { headers });
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
