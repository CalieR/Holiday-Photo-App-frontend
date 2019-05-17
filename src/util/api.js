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

// create new user
const signup = (username, password) => {
  return fetch(`${API_BASE_URL}/api/v1/users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username,
      password
    })
  }).then(res => res.json());
};

const getCurrentUser = token => {
  return fetch(`${API_BASE_URL}/auth/show`, {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};

const getUserProfile = () => {
  return fetch(`${API_BASE_URL}/api/v1/users/profile`, {
    headers: { ...headers, Authorization: localStorage.getItem("token") }
  }).then(res => res.json());
};

// create new album
const newAlbum = name => {
  return fetch(`${API_BASE_URL}/api/v1/albums`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name
    })
  }).then(resp => resp.json());
};

export default {
  login,
  signup,
  getCurrentUser,
  getUserProfile,
  newAlbum
};
