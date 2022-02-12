import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const token = process.env.ACCESS_TOKEN;

const persistRoot = localStorage.getItem('persist:root');
const TOKEN = persistRoot && JSON.parse(JSON.parse(persistRoot).user).currentUser 
  ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken 
  : token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`
  },
});
