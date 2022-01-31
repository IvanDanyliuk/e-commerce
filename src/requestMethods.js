import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjgwNzkwNzhjNzU5OWY0NDg0ZjNhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzY1MDY5OSwiZXhwIjoxNjQzOTA5ODk5fQ.lJ95apozg64wnJrm6niw-4gmn59VH8-rjyTPcqiElDo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`
  },
});
