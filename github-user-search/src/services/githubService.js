import axios from 'axios';

const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const API_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};
    const response = await axios.get(`${API_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
  }
};
