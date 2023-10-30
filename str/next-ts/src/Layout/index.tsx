import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useUserAuth } from "../hooks/auth";
import { getCookie } from "../utils/cookies";
import { ROUTES } from "../constant/Route_Endpoints";
import ModalWraper from "../Modal";
import { Toaster } from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';

export interface propsType {
  children: React.ReactElement;
  header?: boolean;
  footer?: boolean;
  auth?: boolean;
  isPublic?: boolean;
}

const ScreenLoader = () => <>Screen Loader</>; // replace with your screen loader

const MainLayout = ({
  children,
  header = true,
  footer = true,
  auth = false,
  isPublic = false,
}: propsType) => {
  const { refetchUser, isAuthenticated, isLoading } = useUserAuth();
  const token = getCookie("access_token");
  const router = useRouter();

  useEffect(() => {
    // If the route requires authentication but no token is available, redirect to sign-in
    if (auth && !token) {
      router.push(ROUTES.SIGN_IN);
      return;
    }

    // If the route is public and the user is already authenticated, redirect to the homepage
    if (isPublic && isAuthenticated && token) {
      router.push(ROUTES.HOMEPAGE);
      return;
    }

    // If the route requires authentication and the user is not authenticated, refetch user data
    if (token && !isAuthenticated && !isLoading) {
      refetchUser();
    }
  }, [auth, token, isAuthenticated]);

  // if user is fetching from api show loader till user is authenticated
  if (isLoading) return <ScreenLoader />;

  const Layout = () => (
    <>
      {header && <Header />}
      <main className="wraper" id="wraper">
        {children}
      </main>
      {footer && <Footer />}
    </>
  );

  return (
    <>
      {auth ? (
        <>{isAuthenticated ? <Layout /> : <ScreenLoader />}</>
      ) : (
        <Layout />
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
      <ModalWraper />
      <NextNProgress color="#435FB5" />
      {/* add you any Global Providers */}
    </>
  );
};

export default MainLayout;
