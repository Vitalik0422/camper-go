import axios from 'axios';

const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!apiBaseUrl) {
  throw new Error('NEXT_PUBLIC_BACKEND_URL is not set');
}

export const instance = axios.create({
  baseURL: `${apiBaseUrl}/campers`,
});
