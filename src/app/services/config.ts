import axios from "axios";
const API_URL = process.env.API_URL as string;
console.log(API_URL);
export const instance = axios.create({
    baseURL: API_URL,
})