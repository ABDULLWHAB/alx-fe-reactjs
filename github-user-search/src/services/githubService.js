import axios from 'axios';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com';


export const fetchUserData = async (username) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${API_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};


export const searchUsers = async (location, minRepos) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};

    let query = '';
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query.trim()}`, { headers });
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching user search results');
  }
};
