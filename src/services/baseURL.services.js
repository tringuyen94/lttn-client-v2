import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const restConnector = axios.create({
  baseURL,
});
