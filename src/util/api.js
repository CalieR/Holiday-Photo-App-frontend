const API_BASE_URL = `http://localhost:3002`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

// routes to auth#create in order to create token
const login = (username, password) => {
  return fetch(`${API_BASE_URL}/auth/create`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
  
};

const getCurrentUser = token => {
  return fetch(`${API_BASE_URL}/auth/show`, {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};

// const getAlbums = token => {
//   console.log(headers);
//   return fetch(`${API_BASE_URL}/albums`, {
//     headers: { ...headers, Authorization: token }
//   }).then(res => res.json());
// };

export default {
  login,
  getCurrentUser
//   getAlbums
};