/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '.';
import { AxiosResponse } from 'axios';

interface fetchRequestTypes {
    url: string;
    type?: 'get' | 'post' | 'patch' | 'put' | 'delete';
    body?: { [key: string]: string | any };
    query?: { [key: string]: string | any };
    token?: string;
}

interface axiosResponse extends AxiosResponse {
    message: string;
}

export const fetchRequest = async ({
    url,
    type = 'get',
    body,
    query,
    token
}: fetchRequestTypes) => {
    const config: { Authorization?: string } = token
        ? { Authorization: `Bearer ${token}` }
        : {};
    const requestOptions = {
        params: { ...query },
        ...config
    };

    return http[type](
        type === 'delete' ? url : url,
        type === 'get' ? requestOptions : body,
        requestOptions
    ) as Promise<axiosResponse>;
};
