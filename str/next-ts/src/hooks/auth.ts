import { loggedIn, logout, updateUser } from '@/store/slices/auth.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { verifyUser } from '@/store/actions/verify-user';
import { deleteCookie, setCookie } from '@/utils/cookies';
import { fetchRequest } from '@/utils/axios/fetch';
import { userType } from '@/types';
import { API_ENDPOINTS } from '@/config/Api_EndPoints';
import { ROUTES } from '@/config/constant';
import { useRouter } from 'next/router';

type logInUserType = {
    access: string;
    refresh?: string;
};

export const useUserAuth = () => {
    const state = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const { push } = useRouter();
    const updateUserDetails = (obj: userType) => dispatch(updateUser(obj));
    const refetchUser = () => dispatch(verifyUser());

    const logoutUser = () => {
        fetchRequest({ url: API_ENDPOINTS.AUTH.LOG_OUT }).then(() => {
            deleteCookie('access_token');
            deleteCookie('refresh_token');
            push(ROUTES.HOMEPAGE);
            dispatch(logout());
        });
    };

    const loggedInUser = ({ access, refresh }: logInUserType) => {
        dispatch(loggedIn());
        setCookie('access_token', access);
        refresh && setCookie('refresh_token', refresh);
    };

    return {
        ...state,
        refetchUser,
        updateUserDetails,
        logoutUser,
        loggedInUser
    };
};
