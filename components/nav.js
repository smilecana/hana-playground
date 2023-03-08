import * as React from "react";
import Link from "next/link";
import styles from "./Component.module.css";
const menus = [
  { name: "ABOUT", href: "/" },
  { name: "PORTFOLIO", href: "/portfolio" },
];
export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.resp_menu}></div>
      <ul>
        {menus.map((menu, idx) => (
          <li key={`${menu}_${idx}`}>
            <Link href={menu.href}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.nav_bg}></div>
    </div>
  );
};
