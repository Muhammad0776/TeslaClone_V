import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Auth.module.css";

const Register = () => {
  const [email, setEmail] = useState(""); // email uchun state
  const [passwordOne, setPasswordOne] = useState(""); // birinchi parol inputi
  const [passwordTwo, setPasswordTwo] = useState(""); // ikkinchi parol inputi
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);

    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          router.push("/teslaacount"); // profilga yo'naltiramiz
        })
        .catch((error) => {
          setError(error.message);
        });
    else setError("Passwords do not match!");
    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <div className={styles.login}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.signInText}>Sign Up</h2>
          {error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            name="email"
          />
          <label htmlFor="passwordOne">Password</label>
          <input
            type="password"
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
            className={styles.input}
            name="passwordOne"
          />
          <label htmlFor="passwordTwo">Confirm Password</label>
          <input
            type="password"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
            className={styles.input}
            name="passwordTwo"
          />
          <button className={styles.loginBtn}>Create Acount</button>
        </form>
        <hr className={styles.line} />
        <div className={styles.signUpArea}>
          <Link
            href={{
              pathname: "/sign_in",
            }}
          >
            <button className={styles.createAcount}>Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
