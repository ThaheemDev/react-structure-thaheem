import axios, { AxiosRequestHeaders } from 'axios';
import { getToken } from './token';

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT ?? '',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
    (config) => {
        const token = getToken() as string;
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        } as AxiosRequestHeaders;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use((res) => {
    return res.data! ?? res;
});

export default http;
