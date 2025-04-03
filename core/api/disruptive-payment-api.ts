import axios from 'axios'

export const disruptiveApi = axios.create({
  baseURL: import.meta.env.VITE_DISRUPTIVE_PAYMENT_URL,
  headers: {
    'Content-Type': 'application/json',
    'client-api-key': import.meta.env.VITE_DISRUPTIVE_PAYMENT_KEY,
  }
})