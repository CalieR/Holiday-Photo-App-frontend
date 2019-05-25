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

// create new album, which creates a new albumUser
// so Auth header with token also has to be passed
const newAlbum = name => {
  // debugger;
  return fetch(`${API_BASE_URL}/api/v1/albums`, {
    method: "POST",
    headers: { ...headers, Authorization: localStorage.getItem("token") },
    body: JSON.stringify({
      name
    })
  }).then(resp => resp.json());
};

// find one album when clicked on
const getAlbum = id => {
  return fetch(`${API_BASE_URL}/api/v1/albums/${id}`).then(resp => resp.json());
};

// refactored to add admin param, check still works ok...
const inviteUsers = (admin, id) => {
  return fetch(`${API_BASE_URL}/api/v1/albums/invite`, {
    method: "POST",
    headers: { ...headers },
    body: JSON.stringify({
      admin,
      id
    })
  }).then(resp => resp.json());
};

const addUserToAlbum = (user, album, admin) => {
  return fetch(`${API_BASE_URL}/api/v1/album_users`, {
    method: "POST",
    headers: { ...headers },
    body: JSON.stringify({
      user,
      album,
      admin
    })
  }).then(resp => resp.json());
};

// create a new photo in an album:
// uses get_current_user so needs auth in headers
const newPhoto = (image, title, description, album) => {
  // debugger;
  return fetch(`${API_BASE_URL}/api/v1/photos`, {
    method: "POST",
    headers: { ...headers, Authorization: localStorage.getItem("token") },
    body: JSON.stringify({
      image,
      title,
      description,
      album
    })
  }).then(resp => resp.json());
};

export default {
  login,
  signup,
  getCurrentUser,
  getUserProfile,
  newAlbum,
  getAlbum,
  newPhoto,
  inviteUsers,
  addUserToAlbum
};
