/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import Head from "next/head";
import styles from "../styles/Acount.module.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountNavbar from "../components/AccountNavbar";

const LoggedIn = () => {
  const router = useRouter();
  const { authUser, loading, signOut } = useAuth();

  useEffect(() => {
    if (!authUser && !loading) router.push("/sign_in");
  }, [authUser, loading, router]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <AccountNavbar />
          <Head>
            <title>Sign Up</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.logInfo}>
            {authUser && (
              <p>
                You're logged as <b>{authUser.email}</b>'s email
              </p>
            )}
            <button className={styles.logOutBtn} onClick={signOut}>
              <ExitToAppIcon className={styles.btnIcon} />
              Sign Out
            </button>
          </div>
          <div className={styles.carPurchase}>
            <img src="/images/modelX.png" alt="car" className={styles.modelX} />
            <h1>Model X</h1>
            <div className={styles.btnMain}>
              <a href="#" className={styles.btn}>
                custom order
              </a>
              <a href="#" className={styles.btn}>
                existing inventor
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoggedIn;
