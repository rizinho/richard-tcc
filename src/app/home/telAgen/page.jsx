'use client'

import Header from '../../padrao/header/page'
import Footer from '../../padrao/footer/page'
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>

        <div className={styles.searchContainer}>

          <input
            className={styles.searchBar}
            type="text"
            placeholder=" 🔍Search..."
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}