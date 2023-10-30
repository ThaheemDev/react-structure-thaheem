import {
    setCookie as set,
    getCookie as get,
    deleteCookie as remove
} from 'cookies-next';

export const getCookie = (name: string) => {
    return get(name);
};

export const setCookie = (name: string, value: string) => {
    set(name, value, { maxAge: 365 * 10 * 24 });
};

export const deleteCookie = (name: string) => {
    remove(name);
};
