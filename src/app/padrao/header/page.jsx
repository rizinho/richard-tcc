'use client'

import { useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Header () {

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          className={styles.icon}
          src="/logotcc.png"
          width={65}
          height={50}
          alt="Imagem do logo"
        />
        <h1 className={styles.txtLog}>Consult Doctor</h1>
      </div>
      
      <div className={styles.navBar}>
          <Link className={styles.link} href='/duvidas'>SAC</Link>
          <Link className={styles.link} href='/duvidas'>Configurações</Link>

        </div>
    </header>
  )
}
