import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Auth.module.css";

export default function Login() {
  const [email, setEmail] = useState(""); // email uchun state
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);

    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        router.push("/teslaacount"); // profil komponentini manzili route
      })
      .catch((error) => {
        setError(error.message);
      });
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <div className={styles.login}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.signInText}>Sign In</h2>
          {error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            name="password"
          />
          <button className={styles.loginBtn}>Log In</button>
        </form>

        <hr className={styles.line} />
        <div className={styles.signUpArea}>
          <Link
            href={{
              pathname: "/sign_up",
            }}
          >
            <button className={styles.createAcount}>create an acount </button>
          </Link>
        </div>
      </div>
    </>
  );
}
