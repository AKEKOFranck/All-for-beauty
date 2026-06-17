'use client'

import Image from "next/image";
import styles from "./navigation.module.css";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiStakeHammer } from "react-icons/gi";

export default function Navigation() {
   const [openMenu, setOpenMenu] = useState(false);

    const dataNav = [
        {
            id:1,
            title: "Accueil",
            url:"/"
        },
         {
            id:2,
            title: "Nos Produits",
            url:"/products"
        },
         {
            id:3,
            title: "Informations",
            url:"/about"
        }
    ]
  return (
      <header className={styles.header}>
        
            <Link href={"/"} className={styles.logo}>
            Cosmetique
            </Link>

             <nav
             className={`${styles.nav} ${openMenu ? styles.nav_active: ""}`}
             >
           {dataNav.map((n) => (
            <Link href={n.url} className={styles.items} key={n.id}>
                {n.title}
             </Link>
            ))}
            </nav>

            <button className={styles.btn} onClick={() => setOpenMenu(!openMenu)}>
                {openMenu ? <GiStakeHammer />:<TiThMenu />}
            </button>
      </header>
  );
}
