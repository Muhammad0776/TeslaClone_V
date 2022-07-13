/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { SideBar } from "./SideBar";
import CloseIcon from "@mui/icons-material/Close";

const AccountNavbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <img
            src="/images/logo.svg"
            alt="logo"
            loading="lazy"
            className={styles.teslaLogo}
          />
        </a>
      </Link>

      <ul className={styles.navbarNav}>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Model S
          </a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Model 3
          </a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Model X
          </a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Model Y
          </a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Solar Roof
          </a>
        </li>
        <li className={styles.items}>
          <a href="#" className={styles.itemsLink}>
            Solar Panel
          </a>
        </li>
      </ul>

      <div className={styles.menu}>
        <li className={styles.items}>
          <a href="#">Shop</a>
        </li>
        <li className={styles.items}>
          <Link href="/teslaacount">
            <a>Acount</a>
          </Link>
        </li>
        <li className={styles.items} onClick={showSideBar}>
          Menu
        </li>
      </div>

      <div className={sideBar ? "side-menu active" : "side-menu"}>
        <CloseIcon className="closeIcon" onClick={showSideBar} />
        <ul className="sideBarNav">
          {SideBar.map((item, index) => {
            return (
              <>
                <li key={index} className="hamburgerLinks">
                  <Link href={item.path}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default AccountNavbar;
