import { getCookie, setCookie } from '@/utils/cookies';

export const getToken = (name = 'access_token') => {
    const token = getCookie(name);
    return token! ?? null;
};

export const saveToken = async (token: string, name = 'access_token') => {
    setCookie(name, token);
};
